import { ENVS } from '@/config';
import { SUPPORTED_NETWORKS } from '@/config/network.config';
import { ethers } from 'ethers';

export const useReadContract = () => {
  const readContract = async (
    contractAddress: string,
    abi: any,
    funcName: string,
    value: string,
    ...args: any[]
  ): Promise<any> => {
    try {
      const jsonRpcProviderInherits = new ethers.providers.JsonRpcProvider(
        SUPPORTED_NETWORKS[parseInt(ENVS.VITE_BASE_CHAIN_ID?.[0] || '56')]?.rpc?.[0] || ''
      );
      console.log(SUPPORTED_NETWORKS[parseInt(ENVS.VITE_BASE_CHAIN_ID?.[0] || '56')]?.rpc?.[0]);
      const contract = new ethers.Contract(contractAddress, abi, jsonRpcProviderInherits);
      const response = await contract[funcName](...args);
      return response;
    } catch (err: any) {
      console.log('error contract');
      console.log(err);
    }
  };
  return { readContract };
};
