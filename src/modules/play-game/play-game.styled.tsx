import styled from 'styled-components';
import bg from '@/assets/airdrop/bg.png';
import purchaseSuccess from '@/assets/packages/purchase-success.png';
import cardSuccess from '@/assets/packages/card-success.png';
export const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px;
  @media screen and (max-width: 1024px) {
    background-size: cover;
  }
  @media screen and (max-width: 600px) {

  }
  .game-iframe{
    width: 100vw;
    max-width: 56.25svh;
    padding-top: min(100svh ,  177.77vw);
    height:0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    iframe{
      width:100% ;
      height: 100%;
      top:0;
      position:absolute ;
    }
  }
`;
