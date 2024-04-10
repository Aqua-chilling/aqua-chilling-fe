import { useSelector } from 'react-redux';
import { Wrapper } from './play-game.styled';
import React, { useEffect } from 'react';
import { selectToken } from '@/redux';
import { PopUpLogin } from './components/popup-login';
import { Modal } from '@/components/modal/modal';
import { usePlayGame } from '@/hooks/use-play-game';
import { COMMUNICATIONFUNCTION } from '@/constants/app-constaints';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import WebApp from '@twa-dev/sdk'

function iframe() {
  return {
    __html: '<iframe src="https://game-test.aquachilling.com/" id="game-iframeID"></iframe>',
  };
}
export const GamePlay = () => {
  const [isShowPopupLogin, setIsShowPopupLogin] = React.useState(false);
  const token = useSelector(selectToken);
  const { addNotification } = useNotification();
  const {gameMessage, sendMessage}   = usePlayGame()
  console.log('gameMessage', gameMessage)
  useEffect(()=>{
    WebApp.expand()
    WebApp.enableClosingConfirmation()
  }, [])
  useEffect(()=>{
    if(gameMessage?.functionName === COMMUNICATIONFUNCTION.LOGIN_REQUEST) {
      if(!token){
        setIsShowPopupLogin(true)
      }
      else{
        addNotification({
          message: 'Sign with TON successfully',
          type: NOTIFICATION_TYPE.SUCCESS,
          id: new Date().getTime()
        });
        setIsShowPopupLogin(false)
        sendMessage(COMMUNICATIONFUNCTION.LOGIN_SUCCESS, token)
      }
    }
  }, [gameMessage, token])
  return (
    <Wrapper>
   {isShowPopupLogin && (
        <Modal control={isShowPopupLogin} setControl={()=>{setIsShowPopupLogin}}>
          <PopUpLogin />
        </Modal>
      )}
      
      <div dangerouslySetInnerHTML={iframe()} className='game-iframe' />
    </Wrapper>
  );
};
