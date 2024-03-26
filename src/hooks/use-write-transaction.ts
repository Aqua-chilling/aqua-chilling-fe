import { ENVS } from "@/config";
import { CHAIN, SendTransactionRequest, useTonConnectUI } from "@tonconnect/ui-react";
import { useEffect } from "react";

interface IWriteTransactionProps {
  onSuccess?: () => void;
}
export const useWriteTransaction = (props?: IWriteTransactionProps) => {
  const [tonConnectUi] = useTonConnectUI();
  const sendTransaction = async (
    messages: SendTransactionRequest["messages"]
  ): Promise<any> => {
    const tx: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 600,
      network: ENVS.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET,
      messages: messages
    }
    try {
      const response = await tonConnectUi.sendTransaction(tx)
      console.log('response', response)
    } catch (err: any) {
      console.log('erro', err)
    }
  };
  return { sendTransaction };
};
