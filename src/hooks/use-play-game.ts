import { ENVS } from '@/config';
import { SUPPORTED_NETWORKS } from '@/config/network.config';
import { COMMUNICATIONTYPE } from '@/constants/app-constaints';
import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
declare const window: any;

export const usePlayGame = () => {
  const [gameMessage, setGameMessage] = useState<any>()
 useEffect(()=>{
    const handler = (ev : any) => {     
        if (typeof ev.data !== "object") return;
        if (!ev.data.type) return;
        if (ev.data.type !== COMMUNICATIONTYPE.TOAPP) return;
        if (!ev.data.functionName) return;   
        const functionName = ev.data.functionName;
        const message = ev.data.param;
         
       setGameMessage({
        functionName, message
       })
        
      };
  window.addEventListener('message', handler);
  return () => window.removeEventListener("message", handler);

 }, [])
  const sendMessage = useCallback((functionName: string, param: string)=>{ 
    const iframe : any = document.getElementById('game-iframeID')
    if(!iframe){
        console.log("can get iframe")
        return;
    }
    iframe.contentWindow.postMessage(
        {
          type:COMMUNICATIONTYPE.TOGAME,
          functionName,
          param 
        },"*");    
    //   if (window?.isNative) {
    //       //android or ios
    //       console.log('1')
    //       document.location = `testkey://key=${key}&value=${value}`
    //   } else {
    //       // browser, send a message to cocos
    //       console.log('2')
    //       parent.postMessage("------------hello!-----cocos---------", "*")
    //   }
  }, [])
  return { gameMessage,sendMessage };
};
