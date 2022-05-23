// update if exchange increase
const EXCHANGE_ADDRESS = {
  'binance': [
    '0xF977814e90dA44bFA03b6295A0616a897441aceC',
    '0x8894e0a0c962cb723c1976a4421c95949be2d4e3',
    '0xe2fc31f816a9b94326492132018c3aecc4a93ae1', 
    '0xB1256D6b31E4Ae87DA1D56E5890C66be7f1C038e',
    '0x17B692ae403a8Ff3a3B2eD7676cF194310ddE9Af',
    '0x8fF804cc2143451F454779A40DE386F913dCff20',
    '0xAD9ffffd4573b642959D3B854027735579555Cbc',
    '0xEB2d2F1b8c558a40207669291Fda468E50c8A0bB',
    '0x73f5ebe90f27B46ea12e5795d16C4b408B19cc6F',
    '0x29bDfbf7D27462a2d115748ace2bd71A2646946c',
    '0xa180Fe01B906A1bE37BE6c534a3300785b20d947',
    '0x1D40B233CdF2cC0CDC347d5401D5b02c2831A0c1',
    '0x7a8A34DB9acD10C3b6277473b192FE47192569cA',
    '0xBD612a3f30dcA67bF60a39Fd0D35e39B7aB80774',
    '0x515b72Ed8a97F42C568D6A143232775018f133C8',
    '0x161bA15A5f335c9f06BB5BbB0A9cE14076FBb645',
    '0xEB2d2F1b8c558a40207669291Fda468E50c8A0bB',
    '0x631Fc1EA2270e98fbD9D92658eCe0F5a269Aa161',
    '0x5a52E96BAcdaBb82fd05763E25335261B270Efcb'
  ],
  'huobi': [
    '0xEFDca55e4bCE6c1d535cb2D0687B5567eEF2AE83',
    '0xcee6de4290a4002de8712d16f8cfba03cb9afcf4'
  ],
  'gate': ['0x0D0707963952f2fBA59dD06f2b425ace40b492Fe'],
  'mxc': ['0x67221451121647e46dc691d7f2188f4c10e868dd'],
  'HBTC': ['0xedc3e7139505a8c0f2744a970f3202ce3ad4868c']
};

const MDX_ADDRESS = {
  56: '0x9c65ab58d8d978db963e63f2bfb7121627e3a739',
  128: '0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c'
};

const XMDX_ADDRESS = {
  56: '0xf6a8291c34b3cce997144e276f3c975b862d7873',
  128: '0xf5cf092c93cddfe9087b86bdca5cb3f4f72b7242'
};

// update if BLACK_ADDRESS increase
const BLACK_ADDRESS = {
  56: ['0x000000000000000000000000000000000000dead', '0x0000000000000000000000000000000000000666'],
  128: ['0xf9852c6588b70ad3c26dae47120f174527e03a25', '0x0000000000000000000000000000000000000666', '0x000000000000000000000000000000000000dead', '0x0000000000000000000000000000000000000003']
};

const LOCK_ADDRESS = {
  56: '0x99Dca07444263C5B34fe34e4a2C4A862B1e398BD',
  128: '0x1BB7995f64C393A73a480EC7400BB52c335a4809'
}

const CHAIN_NAMES = {
  56: 'BSC',
  128: 'HECO'
}

// update if CONTRACT_ADDRESS increase
const CONTRACT_ADDRESS = {
  56: {
    '0xda28Eb7ABa389C1Ea226A420bCE04Cb565Aafb85': 'BTCB/USDT LP',
    '0x9c65ab58d8d978db963e63f2bfb7121627e3a739': 'MDX_ADDRESS',
    '0xf6a8291c34b3cce997144e276f3c975b862d7873': 'XMDX_ADDRESS',
    '0xc48fe252aa631017df253578b1405ea399728a50': 'mdex pool',
    '0x782395303692abed877d2737aa7982345eb44c11': 'mdex swapMining',
    '0xaFb8C759b018780e5e36F48004177edf3ce6AAe5': 'mdex controller',
    '0x6ba7d75ec6576f88a10be832c56f0f27dc040ddd': 'Coinwind gunPool'
  },
  128: {
    '0xBFff969A85e355eE0851b019Dba1e87C7780F40d': 'HBTC/WHT LP',
    '0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c': 'MDX_ADDRESS',
    '0xf5cf092c93cddfe9087b86bdca5cb3f4f72b7242': 'XMDX_ADDRESS'
  }
}

const BORDARROOM_ADDRESS = {
  56: {
    mdx: '0x6aEE12e5Eb987B3bE1BA8e621BE7C4804925bA68',
    hmdx: '0x55c11417C7D9789161A3F8478b8B9057830a6fc9',
    wbnb: '0xDF484250C063C46F2E1F228954F82266CB987D78',
    rabbit: '0x71e9b620d7873cB9583c69650162Bd6DDfa38cb2',
    cow: '0x543d581B0e85e5362Ca53D6305C12034BE241De5',
    tusd: '0xF54DD53EaE60FbfccDF343715A51795182539d37',
    bunny: '0x68c7af56c71033dE78f5620C192bbd46e82c313B',
    qbt: '0xBfbfc0C1Be94Ae0AC0DA9Af598D2E0434156Aa22',
    fiwa: '0xf1aC72896fd98CfbD922505acd0D5971575aA960',
    xwg: '0xdb596d315ce24d779e3c2C920053d46dd71e2f48',
    kala: '0xcB1F4AD14f340A5279521646927038Bf503371D1',
    bpet: '0xAc0a22B5411aEd7399A7c0cd943977a71C293eB4',
    kine: '0xb405616617c12f5c5aB9f645c5d5abd58673ff52',
    arv: '0x4454A6Ccd2732C8e1c49ffF327DcC392d9540d32',
    pid: '0x0e10c1A0D5a66906598c8F4c9D4c7b7646D5F51B',
    npid: '0x5AAc84C6D1Af071cCE78A12519C8CcD813b063AA',
    jgn: '0xc5c9b313aB4376d4c28b6106EB3e054738dd3379',
    bnbh: '0xaC35da9abb227fD10808E34999eD38ed05DbDF5F',
    rici: '0xb8F3e968e41958fd3b266AC3c5dFe0f81E607A52',
    meta: '0x25A9809df02991bA66B784FaCe246E15a25cf3e0',
    dep: '0xDA905613e3dA4dD68331C10262A944125aE2C508',
    ginza: '0x632212c293E9C38c81bcfAD6fdc5c245646eac32',
    sip: '0xB4912b2e82fC55eaF90fEcEe738f1a7834c62043',
    atl: '0xDD4BC5E59e8a0e3309027A1bE6294Ef2ff8C010A',
    avn: '0x7BA1ee1892A2BFc16D867A33C44124A215Bf370C',
    cpd: '0x04da390ce6Ff088640787FEa8bB2b0Dd33B400D9',
  },
  128: {
    wht: '0x9197d717a4F45B672aCacaB4CC0C6e09222f8695',
    mdx: '0x19D054836192200c71EEc12Bc9f255b1faE8eE80',
    hoo: '0x10b4eD4FCfd810554E465902CD5acC50441C4aE0',
    oldhoo: '0xca8c672abc97b362738fb77ffb5b2b72f6e46161',
    jt: '0x2FE93f0B9D397E30ac341BF78693f5ce51E2396f',
    zt: '0xaCB0126A1fe6104881443B427792809EDBc90D7e',
    one: '0x18F735dB04247De046161e31C3D6522429A98DD4',
    mx: '0x172CC83dDeC365a0c1D033575A64b44B5C53a246',
    o3: '0xf6fC3DcC364B58dd0addb4e759F7Ab0f209B9904',
    cow: '0x6E05EB4165DE63854BD4B41700C15354C1791F28',
    tusd: '0xbE3a613B13DC106Ce548eaC5C369C2B56B639389',
    nt: '0x17b3d720ff4252BA5FB32926Cb7FC19c1Fc5AcCf',
    hcfx: '0x5F9917bB55eF492B887627D19C0d9CB7E17e9ca2',
    xtm: '0xb9ad850648AAf48B7b518D0e301843bBAd1f1f8c',
    wnd: '0xAE67032cF42f6FC5f38EbEE35247828328D7FF51',
    plato: '0xd688c08d830F437D98f7e4d70ac351722a898154'
  }
}

// update if MDX_LPS increase
const MDX_LPS = {
  56: {
    '0x223740a259e461abee12d84a9fff5da69ff071dd': 'MDX / BUSD LP',
    '0xaf9aa53146c5752bf6068a84b970e9fbb22a87bc': 'MDX / WBNB LP',
    '0x6849026e570eb5d3404a5c9611f85beaa9fdc019': 'MDX / XMDX LP',
    '0xe1cbe92b5375ee6afe1b22b555d257b4357f6c68': 'USDT / MDX LP',
    '0x5E23fADEE9d8b5689F89104f10118C956Df3a286': 'HMDX / MDX LP'
  },
  128: {
    '0x615e6285c5944540fd8bd921c9c8c56739fd1e13': 'USDT / MDX LP'
  }
}

const THIRD_PART = {
  '0x6ba7d75ec6576f88a10be832c56f0f27dc040ddd': 'Coinwind gunPool'
}

module.exports = {
  EXCHANGE_ADDRESS,
  MDX_ADDRESS,
  XMDX_ADDRESS,
  BLACK_ADDRESS,
  CHAIN_NAMES,
  LOCK_ADDRESS,
  BORDARROOM_ADDRESS,
  CONTRACT_ADDRESS,
  MDX_LPS,
  THIRD_PART
}
