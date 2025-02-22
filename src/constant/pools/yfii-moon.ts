// Just copied from https://github.com/KodamaSakuno/moon-apollo/blob/main/src/features/configure/pools.js
// id: '池子id',
// name: '池子名字',
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// tokenDecimals: '存入精度'
// itokenDecimals: '提取精度'
// depostLimit: '存入最大数量限制' 0时不限制
// depostAlert: '存入提示'
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！

import { ChainId } from "../index";

export type Pool = {
  chainId: ChainId | number;
  id: string;
  name: string;
  token: string;
  tokenDescription: string;
  tokenAddress: string;
  tokenDecimals: number;
  itokenDecimals: number;
  depostLimit: number;
  depostAlert: string;
  tokenDescriptionUrl: string;
  tokenDescriptionUrl2: string;
  earnedToken: string;
  claimedTokenAddress: string;
  earnedTokenAddress: string;
  earnContractAddress: string;
  defaultApy: string;
  pricePerFullShare: number;
  pastPricePerFullShare: number;
};

// path price:
export const pools: Pool[] = [
  /*
  {
    chainId: 56,
    id: 'bnb',
    name: 'BNB',
    token: 'BNB',
    tokenDescription: 'BNB',
    tokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    tokenAddress: '',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    depostAlert:'',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWBNB',
    earnedTokenAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    earnContractAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },
  {
    chainId: 56,
    id: 'wbnb',
    name: 'WBNB',
    token: 'WBNB',
    tokenDescription: 'WBNB',
    tokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit:0,
    // depostAlert:'Vault-Dialog-Content',
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'iWBNB',
    earnedTokenAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    earnContractAddress: '0x72dd5Df626ebBc020fdF431502799413c56Ac12C',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1
  },*/
  {
    chainId: 56,
    id: "busd",
    name: "BUSD",
    token: "BUSD",
    tokenDescription: "BUSD",
    tokenAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit: 0,
    depostAlert: "",
    tokenDescriptionUrl: "",
    tokenDescriptionUrl2: "",
    earnedToken: "YFII",
    claimedTokenAddress: "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
    earnedTokenAddress: "0xFD3569936FdAeE9A328c628dc5f871D01EbA1C72",
    earnContractAddress: "0xFD3569936FdAeE9A328c628dc5f871D01EbA1C72",
    defaultApy: "42.63",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 56,
    id: "usdt",
    name: "USDT",
    token: "USDT",
    tokenDescription: "USDT",
    tokenAddress: "0x55d398326f99059ff775485246999027b3197955",
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit: 0,
    depostAlert: "",
    tokenDescriptionUrl: "",
    tokenDescriptionUrl2: "",
    earnedToken: "YFII",
    claimedTokenAddress: "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
    earnedTokenAddress: "0xb3ffec73d20a190f1d8e719e1dfa20a0450cb4ec",
    earnContractAddress: "0xb3ffec73d20a190f1d8e719e1dfa20a0450cb4ec",
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 56,
    id: "usdc",
    name: "USDC",
    token: "USDC",
    tokenDescription: "USDC",
    tokenAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit: 0,
    depostAlert: "",
    tokenDescriptionUrl: "",
    tokenDescriptionUrl2: "",
    earnedToken: "YFII",
    claimedTokenAddress: "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
    earnedTokenAddress: "0x72A2dCcf66f85b7090D1B21689128607C84b28f6",
    earnContractAddress: "0x72A2dCcf66f85b7090D1B21689128607C84b28f6",
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 56,
    id: "dai",
    name: "DAI",
    token: "DAI",
    tokenDescription: "DAI",
    tokenAddress: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit: 0,
    depostAlert: "",
    tokenDescriptionUrl: "",
    tokenDescriptionUrl2: "",
    earnedToken: "YFII",
    claimedTokenAddress: "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
    earnedTokenAddress: "0xC1F5Cf645F24b890Aab52A24A17Bf49915b6336c",
    earnContractAddress: "0xC1F5Cf645F24b890Aab52A24A17Bf49915b6336c",
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  //Heco
  {
    chainId: 128,
    id: "ht",
    name: "HT",
    token: "HT",
    tokenDescription: "HT",
    tokenAddress: "",
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit: 0,
    depostAlert: "",
    tokenDescriptionUrl: "",
    tokenDescriptionUrl2: "",
    earnedToken: "WHT",
    claimedTokenAddress: "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
    earnedTokenAddress: "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
    earnContractAddress: "0x59dfe9c9b67ccf62b4d42c7a884c1ccb20adffaa",
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: "wht",
    name: "WHT",
    token: "WHT",
    tokenDescription: "WHT",
    tokenAddress: "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit: 0,
    depostAlert: "",
    tokenDescriptionUrl: "",
    tokenDescriptionUrl2: "",
    earnedToken: "WHT",
    claimedTokenAddress: "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
    earnedTokenAddress: "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
    earnContractAddress: "0x59dfe9c9b67ccf62b4d42c7a884c1ccb20adffaa",
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: "husd",
    name: "HUSD",
    token: "HUSD",
    tokenDescription: "HUSD",
    tokenAddress: "0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047",
    tokenDecimals: 8,
    itokenDecimals: 8,
    depostLimit: 0,
    depostAlert: "",
    tokenDescriptionUrl: "",
    tokenDescriptionUrl2: "",
    earnedToken: "HUSD",
    claimedTokenAddress: "0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047",
    earnedTokenAddress: "0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047",
    earnContractAddress: "0x902f551edc28ccfa5d2f84f10f8acb50d6b00613",
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: "eth",
    name: "ETH",
    token: "ETH",
    tokenDescription: "ETH",
    tokenAddress: "0x64FF637fB478863B7468bc97D30a5bF3A428a1fD",
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit: 0,
    depostAlert: "",
    tokenDescriptionUrl: "",
    tokenDescriptionUrl2: "",
    earnedToken: "ETH",
    claimedTokenAddress: "0x64FF637fB478863B7468bc97D30a5bF3A428a1fD",
    earnedTokenAddress: "0x64FF637fB478863B7468bc97D30a5bF3A428a1fD",
    earnContractAddress: "0x882814c0520a3790e5f4b83467eef106eb4c7b76",
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
  {
    chainId: 128,
    id: "hbtc",
    name: "HBTC",
    token: "HBTC",
    tokenDescription: "HBTC",
    tokenAddress: "0x66a79d23e58475d2738179ca52cd0b41d73f0bea",
    tokenDecimals: 18,
    itokenDecimals: 18,
    depostLimit: 0,
    depostAlert: "",
    tokenDescriptionUrl: "",
    tokenDescriptionUrl2: "",
    earnedToken: "HBTC",
    claimedTokenAddress: "0x66a79d23e58475d2738179ca52cd0b41d73f0bea",
    earnedTokenAddress: "0x66a79d23e58475d2738179ca52cd0b41d73f0bea",
    earnContractAddress: "0xd6027458c4f8441eea19e2b6a6e8cd60119c8ea1",
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
  },
];

export const hecoPools = pools.filter(
  (pool) => pool.chainId === ChainId.HECO_MAINNET
);
export const bscPools = pools.filter(
  (pool) => pool.chainId === ChainId.BSC_MAINNET
);
