import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { COMMUNICATIONFUNCTION } from '@/constants/app-constaints';
import { useNotification } from '@/contexts/notification.context';
import { usePlayGame } from '@/hooks/use-play-game';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useCallback, useState } from 'react';

interface IPropsUseBuyAqua {
  transaction: any;
  onBuySuccess: () => void;
}
export const useBuyAqua = (props: IPropsUseBuyAqua) => {
  const { addNotification } = useNotification();
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const [isLoading, setIsLoading] = useState(false);
  const { transaction, onBuySuccess } = props;
  const handleBuyAqua = useCallback(async () => {
    console.log(transaction);
    try {
      setIsLoading(true);
      console.log('transaction', transaction);
      const res = await tonConnectUI.sendTransaction(transaction);
      if (res) {
        addNotification({
          message: 'Transaction Confirmed! Wait for server listening!',
          type: NOTIFICATION_TYPE.SUCCESS,
          id: new Date().getTime()
        });
        onBuySuccess();
      }
      setIsLoading(false);
    } catch (err: any) {
      addNotification({
        message: err?.message || 'Something went wrong!',
        type: NOTIFICATION_TYPE.ERROR,
        id: new Date().getTime()
      });
      setIsLoading(false);
    }
  }, [transaction]);

  return {
    isLoading,
    handleBuyAqua
  };
};
