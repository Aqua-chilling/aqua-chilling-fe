import styled, { keyframes } from 'styled-components';
import backgroundBg from '@/assets/airdrop/new-bg.png';
import backgroundBg3 from '@/assets/airdrop/new-bg-3.png';
import infoBg from '@/assets/airdrop/info-bg.png';
import backgroundBg2 from '@/assets/airdrop/new-bg-2.png';
import buttonBg from '@/assets/airdrop/button-bg.png';
import specialCard from '@/assets/airdrop/card-bg.png';
const anim = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}

`;
const animDisapear = keyframes`
0%{
    opacity: 1;
}
100%{
    opacity: 0;
}`;
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${anim} 0.3s forwards;
  z-index: 1000;
  &.disapear {
    animation: ${animDisapear} 0.3s forwards;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .buy-popup-content {
    width: 90%;
    max-width: 344px;
    position: relative;
    background: #131b26;
    border: 8px solid #090910;
    display: flex;
    align-items: center;
    padding: 24px;
    .close {
      position: absolute;
      z-index: 1;
      top: -24px;
      right: -25px;
      width: 72px;
      img {
        width: 100%;
      }
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.01);
        opacity: 0.8;
      }
      @media screen and (max-width: 768px) {
        right: -15px;
        width: 56px;
        top: -18px;
      }
    }
    .purchase-price {
      background: url(${specialCard});
      background-size: 100% 100%;
      height: 40px;
      margin-top: 53px;
      margin-bottom: 8px;
    }
    .purchase-btn {
      padding: 8px 11px;
      gap: 4px;
      border-radius: 12px;
      border: 3px solid #090910;
      background: #0a80b8;
      font-family: 'Quicksand';
      font-size: 14px;
      font-weight: 700;
      line-height: 17.5px;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;
