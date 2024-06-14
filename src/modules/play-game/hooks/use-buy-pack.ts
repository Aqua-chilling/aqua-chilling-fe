import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { ENVS } from '@/config';
import { COMMUNICATIONFUNCTION } from '@/constants/app-constaints';
import { useNotification } from '@/contexts/notification.context';
import { usePlayGame } from '@/hooks/use-play-game';
import { CHAIN, useTonConnectUI } from '@tonconnect/ui-react';
import { useCallback, useState } from 'react';

interface IPropsUseBuyPack {
  transaction: any;
  onBuySuccess: () => void;
}
export const useBuyPack = (props: IPropsUseBuyPack) => {
  const { addNotification } = useNotification();
  const { sendMessage } = usePlayGame();
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const [isLoading, setIsLoading] = useState(false);
  const { transaction, onBuySuccess } = props;
  const handleBuyPack = useCallback(async () => {
    console.log(transaction);
    try {
      const activeChain = ENVS.VITE_ISTESTNET ? CHAIN.TESTNET : CHAIN.MAINNET;
      const activeChainName = ENVS.VITE_ISTESTNET ? 'Testnet' : 'Mainnet';
      if (tonConnectUI.account?.chain !== activeChain) {
        tonConnectUI.disconnect();
        addNotification({
          message: `Invalid chain. Please switch to TON ${activeChainName}`,
          type: NOTIFICATION_TYPE.ERROR,
          id: new Date().getTime()
        });
        return;
      }
      setIsLoading(true);
      console.log('transaction', transaction);
      const res = await tonConnectUI.sendTransaction(transaction);
      if (res) {
        addNotification({
          message: 'Bought Packages successfully!',
          type: NOTIFICATION_TYPE.SUCCESS,
          id: new Date().getTime()
        });
        console.log('ressss', res);
        onBuySuccess();
      }
      console.log('res', res);
      setIsLoading(false);
    } catch (err) {
      console.log(err, 'errrrrrrrrrrrr');
      setIsLoading(false);
    }
  }, [transaction]);

  return {
    isLoading,
    handleBuyPack
  };
};
