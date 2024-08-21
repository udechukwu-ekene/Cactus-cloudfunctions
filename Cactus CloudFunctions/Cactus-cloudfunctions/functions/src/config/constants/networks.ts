import { ChainId } from './types';

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://bsc-dataseed1.defibit.io',
  [ChainId.TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  [ChainId.DEV]: 'http://127.0.0.1:7545',
}

const PUBLIC_CHAIN_ID = parseInt(process.env.PUBLIC_CHAIN_ID);
export const NETWORK_URL: string = NETWORK_URLS[PUBLIC_CHAIN_ID];
export const CHAIN_ID = PUBLIC_CHAIN_ID;

export default NETWORK_URLS;
