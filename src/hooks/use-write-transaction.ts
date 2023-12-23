import { useSigner } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
// import { getWeb3 } from "../utils/getWeb3";

interface IWriteTransactionProps {
  onSuccess?: () => void;
}
export const useWriteTransaction = (props?: IWriteTransactionProps) => {
  const signer = useSigner();

  const sendTransaction = async (
    contractAddress: string,
    abi: any,
    funcName: string,
    value: string,
    ...args: any[]
  ): Promise<any> => {
    try {
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const options = {
        value: ethers.utils.parseEther(value)
      };
      const tx = await contract.functions[funcName](...args, options);

      const isSuccess = await tx.wait();
      props?.onSuccess && (await props?.onSuccess());
      return isSuccess;
    } catch (err: any) {
      throw new Error(`${err?.message?.substring(0, 25)}...` || err);
    }
  };
  return { sendTransaction };
};
