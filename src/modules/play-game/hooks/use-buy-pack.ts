import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useNotification } from '@/contexts/notification.context';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useCallback, useState } from 'react';

interface IPropsUseBuyPack {
  transaction: any;
}
export const useBuyPack = (props: IPropsUseBuyPack) => {
  const { addNotification } = useNotification();
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const [isLoading, setIsLoading] = useState(false);
  const { transaction } = props;
  const handleBuyPack = useCallback(async () => {
    console.log(transaction);
    try {
      setIsLoading(true);
      console.log('transaction', transaction);
      const res = await tonConnectUI.sendTransaction(transaction);
      if (res) {
        addNotification({
          message: 'Bought Packages successfully!',
          type: NOTIFICATION_TYPE.SUCCESS,
          id: new Date().getTime()
        });
      }
      console.log('res', res);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  }, [transaction]);

  return {
    isLoading,
    handleBuyPack
  };
};
