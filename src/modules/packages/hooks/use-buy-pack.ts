import { useTonConnectUI } from '@tonconnect/ui-react';
import { useCallback, useState } from 'react';

interface IPropsUseBuyPack {
  transaction: any;
}
export const useBuyPack = (props: IPropsUseBuyPack) => {
    const [tonConnectUI, setOptions] = useTonConnectUI()
    const [isLoading, setIsLoading] = useState(false)
    const {transaction} = props;
    const handleBuyPack = useCallback(async()=>{
        setIsLoading(true)
      const res = await tonConnectUI.sendTransaction(transaction)
      console.log('res',res)
      setIsLoading(false)
    }, [transaction])

    return{
        isLoading,
        handleBuyPack
    }
};
