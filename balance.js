require('dotenv').config();
//
const { ethers } = require("ethers");

//
const { MDX_ADDRESS, XMDX_ADDRESS, BLACK_ADDRESS, CHAIN_NAMES, EXCHANGE_ADDRESS, LOCK_ADDRESS, BORDARROOM_ADDRESS, CONTRACT_ADDRESS, MDX_LPS, THIRD_PART } = require('./config')
const erc20Abi = require('./abi/erc20.json')
const lockupAbi = require('./abi/lockup.json')
const masterchefAbi = require('./abi/masterchef.json')
// calaute mdx
async function getBanalce(chainId) {
  const chainName = CHAIN_NAMES[chainId];
  const mdxAddress = MDX_ADDRESS[chainId];
  const xmdxAddress = XMDX_ADDRESS[chainId];
  const blackAddress = BLACK_ADDRESS[chainId];
  const rpcUrl = getRpcUrl(chainId);
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const mdxContract = new ethers.Contract(mdxAddress, erc20Abi, provider);
  const xmdxContract = new ethers.Contract(xmdxAddress, erc20Abi, provider);
  let mdxTotal = 0;
  let xmdxTotal = 0;
  for(const address of blackAddress) {
    const mdxbalance = await mdxContract['balanceOf'](address);
    const xmdxbalance = await xmdxContract['balanceOf'](address);
    mdxTotal += Number(ethers.utils.formatUnits(mdxbalance, 18));
    xmdxTotal += Number(ethers.utils.formatUnits(xmdxbalance, 18));
  }
  const mdxSupply = await mdxContract['totalSupply']();
  console.log(`On ${chainName}, MDX totalSupply is ${ethers.utils.formatUnits(mdxSupply, 18)}`)
  console.log(`On ${chainName}, MDX in blackhole is ${mdxTotal}, xmdx in blackhole is ${xmdxTotal}`)
  await getExData(mdxContract, xmdxContract, chainName);
  await getLockData(chainId, chainName, provider, mdxContract, xmdxContract);
  await getBorderRoomValue(chainId, chainName, mdxContract, xmdxContract);
  await getMdxInContrct(chainId, chainName, mdxContract, xmdxContract);
  await getMdxInLp(chainId, chainName, mdxContract, xmdxContract);
  await getThirdPart(chainName, mdxContract, xmdxContract);
}

async function getMdxInLp(chainId, chainName, mdxContract, xmdxContract) {
  const mdxLps = MDX_LPS[chainId];
  const address = Object.keys(mdxLps);
  let lpMdxTotal = 0;
  let lpXmdxTotal = 0;
  for(const addr of address) {
    const mdxbalance = await mdxContract['balanceOf'](addr);
    const xmdxbalance = await xmdxContract['balanceOf'](addr);
    lpMdxTotal += Number(ethers.utils.formatUnits(mdxbalance, 18));
    lpXmdxTotal += Number(ethers.utils.formatUnits(xmdxbalance, 18));
  }
  console.log(`On ${chainName} MDX in LP balance is ${lpMdxTotal}, XMDX balance is ${lpXmdxTotal}`);
}

async function getMdxInContrct(chainId, chainName, mdxContract, xmdxContract) {
  const contractAddr = CONTRACT_ADDRESS[chainId];
  const address = Object.keys(contractAddr);
  let conMdxTotal = 0;
  let conXmdxTotal = 0;
  for(const addr of address) {
    const mdxbalance = await mdxContract['balanceOf'](addr);
    const xmdxbalance = await xmdxContract['balanceOf'](addr);
    conMdxTotal += Number(ethers.utils.formatUnits(mdxbalance, 18));
    conXmdxTotal += Number(ethers.utils.formatUnits(xmdxbalance, 18));
  }
  console.log(`On ${chainName} MDX in Contract that is locked balance is ${conMdxTotal}, XMDX balance is ${conXmdxTotal}`);
}

async function getExData(mdxContract, xmdxContract, chainName) {
  const exchanges = Object.keys(EXCHANGE_ADDRESS);
  for(const name of exchanges) {
    const exAddress = EXCHANGE_ADDRESS[name];
    let exMdxTotal = 0;
    let exXmdxTotal = 0;
    for(const exaddr of exAddress) {
      const mdxbalance = await mdxContract['balanceOf'](exaddr);
      const xmdxbalance = await xmdxContract['balanceOf'](exaddr);
      exMdxTotal += Number(ethers.utils.formatUnits(mdxbalance, 18));
      exXmdxTotal += Number(ethers.utils.formatUnits(xmdxbalance, 18));
    }
    console.log(`On ${chainName} In ${name}, MDX balance is ${exMdxTotal}, XMDX balance is ${exXmdxTotal}`)
  }
}

async function getLockData(chainId, chainName, provider, mdxContract, xmdxContract) {
  const lockAddress = LOCK_ADDRESS[chainId];
  const lockContract = new ethers.Contract(lockAddress, lockupAbi, provider);
  const types = {
    0: 'current',
    1: '30 day',
    2: '90 day',
    3: '180 day',
    4: '365 day'
  }
  let mdxInLock = 0
  const keys = Object.keys(types);
  for(const type of keys) {
    const amount = await lockContract['cycleLockAmount'](type)
    mdxInLock += Number(ethers.utils.formatUnits(amount, 18));
    console.log(`On ${chainName} ${types[type]} in lockContract is ${ethers.utils.formatUnits(amount, 18)}`)
  }
  const mdxbalance = await mdxContract['balanceOf'](lockAddress);
  const xmdxbalance = await xmdxContract['balanceOf'](lockAddress);
  console.log(`On ${chainName} More MDX in lockContract is ${ethers.utils.formatUnits(mdxbalance, 18) - mdxInLock}, More XMDX in lockContract is ${ethers.utils.formatUnits(xmdxbalance, 18)}`)
}

async function getBorderRoomValue(chainId, chainName, mdxContract, xmdxContract) {
  const rooms = BORDARROOM_ADDRESS[chainId];
  const keys = Object.keys(rooms);
  let mdxInRoom = 0;
  let xmdxInRoom = 0;
  for(const key of keys) {
    try {
      const roomAddr = rooms[key];
      const mdxbalance = await mdxContract['balanceOf'](roomAddr);
      const xmdxbalance = await xmdxContract['balanceOf'](roomAddr);
      mdxInRoom += Number(ethers.utils.formatUnits(mdxbalance, 18));
      xmdxInRoom += Number(ethers.utils.formatUnits(xmdxbalance, 18));
    } catch (error) {
      console.error(roomAddr, error)
    }
  }
  console.log(`On ${chainName} MDX in BorderRoom is ${mdxInRoom}, More XMDX in BorderRoom is ${xmdxInRoom}`)
}

async function getThirdPart(chainName, mdxContract, xmdxContract) {
  const address = Object.keys(THIRD_PART);
  for(const addr of address) {
    const mdxbalance = await mdxContract['balanceOf'](addr);
    const xmdxbalance = await xmdxContract['balanceOf'](addr);
    console.log(`On ${chainName}, In ${THIRD_PART[addr]} MDX balance is ${ethers.utils.formatUnits(mdxbalance, 18)}, XMDX balance is ${ethers.utils.formatUnits(xmdxbalance, 18)}`);
  }
}

function getRpcUrl(chainId) {
  switch (chainId) {
    case 56:
      return process.env.BSC_NODE;
    case 128:
      return process.env.HECO_NODE;  
  }
}

// calaute xmdx
async function calBalance() {
  await getBanalce(56)
  await getBanalce(128)
}
calBalance()