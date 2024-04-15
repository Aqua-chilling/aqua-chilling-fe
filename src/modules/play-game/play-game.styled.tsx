import styled from 'styled-components';
import bg from '@/assets/airdrop/bg.png';
import bgAirdrop from '@/assets/bg-quest.png';
import purchaseSuccess from '@/assets/packages/purchase-success.png';
import cardSuccess from '@/assets/packages/card-success.png';
export const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
  /* padding: 12px; */
  @media screen and (max-width: 1024px) {
    background-size: cover;
  }
  .game-iframe {
    width: 100vw;
    /* max-width: 56.25svh;
    padding-top: min(100svh, 177.77vw);
    height: 0; */
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    iframe {
      width: 100%;
      height: 100%;
      top: 0;
      position: absolute;
    }
  }
  .airdrop-wrapper {
    width: 90vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${bgAirdrop});
    background-size: 100% 100%;
    @media screen and (max-width: 768px) {
      background-image: none;
      flex-direction: column;
      align-items: start;
      background: #0c2449;
      width: 100vw;
      height: 100vh;
    }
    .close-mobile {
      display: none;
      @media screen and (max-width: 768px) {
        display: flex;
        padding: 16px;
      }
      div {
        width: 24px;
        height: 24px;
      }
    }
    .close-received {
      @media screen and (max-width: 768px) {
        display: none;
      }
      position: absolute;
      top: -14px;
      right: 0px;
      z-index: 2;
    }
  }
`;
