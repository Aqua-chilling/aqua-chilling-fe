import { ENVS } from '@/config';
import { SUPPORTED_NETWORKS } from '@/config/network.config';
import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
declare const window: any;

export const usePlayGame = () => {
  const [gameMessage, setGameMessage] = useState<any>()
 useEffect(()=>{
  const iframeWeb = document.getElementById("iframe-aqua-gameID");
  if(!iframeWeb) return;
  console.log('useEFFect')
  window.addEventListener('message', function (e : any) {
    var data = e?.data; // parameter
    console.log("-----------message--------------", data)
    setGameMessage(data)
});


 }, [])
  const sendMessage = useCallback((key: string, value: string)=>{ 
      if (window?.isNative) {
          //android or ios
          console.log('1')
          document.location = `testkey://key=${key}&value=${value}`
      } else {
          // browser, send a message to cocos
          console.log('2')
          parent.postMessage("------------hello!-----cocos---------", "*")
      }
  }, [])
  return { gameMessage,sendMessage };
};
