import { useSelector } from 'react-redux';
import { Wrapper } from './play-game.styled';
import React from 'react';
import { selectToken } from '@/redux';
import { PopUpLogin } from './components/popup-login';
import { Modal } from '@/components/modal/modal';
import { usePlayGame } from '@/hooks/use-play-game';

export const GamePlay = () => {
  const [isShowPopupLogin, setIsShowPopupLogin] = React.useState(false);
  const token = useSelector(selectToken);
  const {gameMessage, sendMessage}   = usePlayGame()
  React.useEffect(() => {
    console.log('useEFFect222')
    if (!token) {
      console.log('asasa')
      setIsShowPopupLogin(true);
      sendMessage('token', '12313123123')
    } else {
      console.log('sendmess')
      sendMessage('token', token)
      setIsShowPopupLogin(false);
    }
  }, [token]);
  return (
    <Wrapper>
   {isShowPopupLogin && (
        <Modal control={isShowPopupLogin} setControl={()=>{setIsShowPopupLogin}}>
          <PopUpLogin />
        </Modal>
      )}
      {
        !isShowPopupLogin && <iframe src="https://game-test.aquachilling.com/" className='game-iframe' id="iframe-aqua-gameID"></iframe>
      }
    </Wrapper>
  );
};
