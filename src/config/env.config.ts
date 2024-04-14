/* eslint-disable @typescript-eslint/no-explicit-any */
import isEmpty from 'lodash/isEmpty';

interface IENVS {
  VITE_BASE_BC_API: string;
  VITE_BASE_GAME_API: string;
  VITE_BASE_CHAIN_ID: string[];
  VITE_WC_PROJECT_ID: string;
  VITE_THIRD_WEB_CLIENT_ID: string;
  VITE_NFT_CONTRACT: string;
  VITE_SELLER_CONTRACT: string;
  VITE_DISTRIBUTER_CONTRACT: string;
  VITE_ISTESTNET: boolean;
  VITE_BASE_PACKAGE_TON_CONTRACT: string;
}

const defaultEnvs: IENVS = {
  VITE_BASE_BC_API: '',
  VITE_BASE_GAME_API: '',
  VITE_BASE_CHAIN_ID: [],
  VITE_WC_PROJECT_ID: '',
  VITE_THIRD_WEB_CLIENT_ID: '',
  VITE_DISTRIBUTER_CONTRACT: '',
  VITE_NFT_CONTRACT: '',
  VITE_SELLER_CONTRACT: '',
  VITE_BASE_PACKAGE_TON_CONTRACT :  '',
  VITE_ISTESTNET: true,
};

export const getEnvs = () => {
  let envs: any = {};
  try {
    const ENVS = import.meta.env;
    if (!isEmpty(ENVS)) {
      Object.keys(ENVS).forEach((key: string) => {
        const value = ENVS[key];
        if (key === 'VITE_BASE_CHAIN_ID') {
          envs[key] = ENVS[key]?.split(',');
        } else {
          if (value === 'true' || value === 'false') {
            envs[key] = value === 'true';
          } else {
            envs[key] = ENVS[key];
          }
        }
        return key;
      });
    }
  } catch (error) {
    console.debug(error);
  } finally {
    envs = isEmpty(envs) ? defaultEnvs : envs;
  }
  return { ...envs };
};

export const ENVS: IENVS = getEnvs();
