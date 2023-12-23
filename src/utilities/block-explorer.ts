import { ENVS } from '@/config';

export const getBlockExplorerScanner = () => {
  if (ENVS.VITE_BASE_CHAIN_ID?.[0] === '97') {
    return 'https://testnet.bscscan.com';
  } else {
    return 'https://bscscan.com';
  }
};
