import { ChainId } from './chain-id.config';

export interface INetworkProps {
  chainId?: number;
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  shortName?: string;
  slug?: string;
  testnet?: boolean;
  chain?: string;
  rpc?: string[];
  name?: string;
}

export const SUPPORTED_NETWORKS: { [x: number]: INetworkProps } = {
  [ChainId.MAINNET]: {
    chainId: 56,
    rpc: ['https://bsc-dataseed.binance.org'],
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18
    },
    shortName: 'BSC', // Display value shown in the wallet UI
    slug: 'BSC', // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: 'BSC', // Name of the network
    name: 'BSC Testnet' // Name of the network
  },
  [ChainId.ZKSYNCERA]: {
    chainId: 280,
    rpc: ['https://zksync2-testnet.zksync.dev'],
    nativeCurrency: {
      decimals: 18,
      name: 'zkSync Era Testnet',
      symbol: 'zkETH'
    },
    shortName: 'zkSync', // Display value shown in the wallet UI
    slug: 'zkSync', // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: 'zkSync', // Name of the network
    name: 'zkSync Era Testnet' // Name of the network
  },
  [ChainId.ZKSYNCERA_MAINNET]: {
    chainId: 324,
    rpc: ['https://zksync2-mainnet.zksync.io'],
    nativeCurrency: {
      decimals: 18,
      name: 'zkSync Era',
      symbol: 'zkETH'
    },
    shortName: 'zkSync', // Display value shown in the wallet UI
    slug: 'zkSync', // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: 'zkSync', // Name of the network
    name: 'zkSync Era' // Name of the network
  },
  [ChainId.GÖRLI]: {
    chainId: 5,
    rpc: ['https://goerli.blockpi.network/v1/rpc/public'],
    nativeCurrency: {
      decimals: 18,
      name: 'GoerliETH',
      symbol: 'GoerliETH'
    },
    shortName: 'Goerli', // Display value shown in the wallet UI
    slug: 'Goerli', // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: 'Goerli', // Name of the network
    name: 'Goerli' // Name of the network
  },
  // [ChainId.FANTOM]: {
  //   chainId: '0xfa',
  //   chainNumb: ChainId.FANTOM,
  //   chainName: 'Fantom',
  //   nativeCurrency: {
  //     name: 'Fantom',
  //     symbol: 'SOL',
  //     decimals: 18,
  //   },
  //   path: '/phantom.svg',
  //   rpcUrls: ['https://rpcapi.fantom.network'],
  //   blockExplorerUrls: ['https://ftmscan.com'],
  // },
  [ChainId.BSC]: {
    chainId: 56,
    rpc: ['https://bsc-dataseed.binance.org'],
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18
    },
    shortName: 'BSC', // Display value shown in the wallet UI
    slug: 'BSC', // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: 'BSC', // Name of the network
    name: 'BSC' // Name of the network
  },
  [ChainId.BSC_TESTNET]: {
    chainId: 97,
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18
    },
    // path: '/bsc.svg',
    rpc: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    shortName: 'BSC', // Display value shown in the wallet UI
    slug: 'BSC', // Display value shown in the wallet UI
    testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
    chain: 'BSC', // Name of the network
    name: 'BSC Testnet'
  }
  // [ChainId.MATIC]: {
  //   chainId: '0x89',
  //   chainName: 'Matic',
  //   chainNumb: ChainId.MATIC,
  //   nativeCurrency: {
  //     name: 'Matic',
  //     symbol: 'MATIC',
  //     decimals: 18,
  //   },
  //   // path: '/polygon.svg',
  //   rpcUrls: ['https://rpc-mainnet.maticvigil.com'], // ['https://matic-mainnet.chainstacklabs.com/'],
  //   blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com'],
  // },
  // [ChainId.MATIC_TESTNET]: {
  //   chainId: '0x13881',
  //   chainName: 'Mumbai',
  //   chainNumb: ChainId.MATIC_TESTNET,
  //   nativeCurrency: {
  //     name: 'Matic',
  //     symbol: 'MATIC',
  //     decimals: 18,
  //   },
  //   path: '/polygon.svg',
  //   rpcUrls: ['https://rpc.ankr.com/polygon_mumbai'], // ['https://matic-mainnet.chainstacklabs.com/'],
  //   blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
  // },

  // [ChainId.HECO]: {
  //   chainId: '0x80',
  //   chainName: 'Heco',
  //   nativeCurrency: {
  //     name: 'Heco Token',
  //     symbol: 'HT',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://http-mainnet.hecochain.com'],
  //   blockExplorerUrls: ['https://hecoinfo.com'],
  // },
  // [ChainId.XDAI]: {
  //   chainId: '0x64',
  //   chainName: 'xDai',
  //   nativeCurrency: {
  //     name: 'xDai Token',
  //     symbol: 'xDai',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://rpc.xdaichain.com'],
  //   blockExplorerUrls: ['https://blockscout.com/poa/xdai'],
  // },
  // [ChainId.HARMONY]: {
  //   chainId: '0x63564C40',
  //   chainName: 'Harmony',
  //   nativeCurrency: {
  //     name: 'One Token',
  //     symbol: 'ONE',
  //     decimals: 18,
  //   },
  //   rpcUrls: [
  //     'https://api.harmony.one',
  //     'https://s1.api.harmony.one',
  //     'https://s2.api.harmony.one',
  //     'https://s3.api.harmony.one',
  //   ],
  //   blockExplorerUrls: ['https://explorer.harmony.one/'],
  // },
  // [ChainId.AVALANCHE]: {
  //   chainId: '0xA86A',
  //   chainName: 'Avalanche',
  //   nativeCurrency: {
  //     name: 'Avalanche Token',
  //     symbol: 'AVAX',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
  //   blockExplorerUrls: ['https://cchain.explorer.avax.network'],
  // },
  // [ChainId.OKEX]: {
  //   chainId: '0x42',
  //   chainName: 'OKEx',
  //   nativeCurrency: {
  //     name: 'OKEx Token',
  //     symbol: 'OKT',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://exchainrpc.okex.org'],
  //   blockExplorerUrls: ['https://www.oklink.com/okexchain'],
  // },
  // [ChainId.ARBITRUM]: {
  //   chainId: '0xA4B1',
  //   chainName: 'Arbitrum',
  //   nativeCurrency: {
  //     name: 'Ethereum',
  //     symbol: 'ETH',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://arb1.arbitrum.io/rpc'],
  //   blockExplorerUrls: ['https://mainnet-arb-explorer.netlify.app'],
  // },
  // [ChainId.CELO]: {
  //   chainId: '0xA4EC',
  //   chainName: 'Celo',
  //   nativeCurrency: {
  //     name: 'Celo',
  //     symbol: 'CELO',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://forno.celo.org'],
  //   blockExplorerUrls: ['https://explorer.celo.org'],
  // },
  // [ChainId.PALM]: {
  //   chainId: '0x2A15C308D',
  //   chainName: 'Palm',
  //   nativeCurrency: {
  //     name: 'Palm',
  //     symbol: 'PALM',
  //     decimals: 18,
  //   },
  //   rpcUrls: [
  //     'https://palm-mainnet.infura.io/v3/da5fbfafcca14b109e2665290681e267',
  //   ],
  //   blockExplorerUrls: ['https://explorer.palm.io'],
  // },
  // [ChainId.MOONRIVER]: {
  //   chainId: '0x505',
  //   chainName: 'Moonriver',
  //   nativeCurrency: {
  //     name: 'Moonriver',
  //     symbol: 'MOVR',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://rpc.moonriver.moonbeam.network'],
  //   blockExplorerUrls: ['https://blockscout.moonriver.moonbeam.network'],
  // },
};
