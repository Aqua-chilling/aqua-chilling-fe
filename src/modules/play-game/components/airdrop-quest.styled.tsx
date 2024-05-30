import styled, { keyframes } from 'styled-components';
import backgroundBg from '@/assets/airdrop/new-bg.png';
import backgroundBgMb from '@/assets/airdrop/new-bg-mb.png';
import backgroundBg1 from '@/assets/airdrop/new-bg-1.png';
import backgroundBg2 from '@/assets/airdrop/new-bg-2.png';
import buttonBg from '@/assets/airdrop/button-bg.png';
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
  z-index: 999;
  &.disapear {
    animation: ${animDisapear} 0.3s forwards;
  }

  .overlay {
    background: #bebebebe;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .airdrop-content {
    width: 90%;
    max-width: 450px;
    height: 90%;
    max-height: 750px;
    position: relative;
    background-image: url(${backgroundBg});
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.bg-1 {
      background-image: url(${backgroundBg1});
    }
    &.bg-2 {
      background-image: url(${backgroundBg2});
    }
    @media screen and (max-width: 3000px) {
      background-image: url(${backgroundBgMb});
    }
    .btn-back {
      position: absolute;
      top: 3.3%;
      left: 18px;
      cursor: pointer;
      padding: 5px;
      img {
        width: 24px;
      }
    }
    .close {
      position: absolute;
      z-index: 1;
      top: -24px;
      right: -25px;
      width: 72px;
      @media screen and (max-width: 3000px) {
        right: -15px;
        width: 56px;
        top: -18px;
      }
      img {
        width: 100%;
      }
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.01);
        opacity: 0.8;
      }
    }
    .airdrop-title {
      position: absolute;
      top: 8.2%;
      left: 50%;
      transform: translate(-50%, -100%);
      font-family: 'Fredoka';
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;
      letter-spacing: -0.02em;
      text-align: center;
      color: #ffffff;
      @media screen and (max-width: 3000px) {
        font-size: 22px;
        line-height: 32px;
      }
    }
  }
  .airdrop-referral {
    width: 100%;
    height: 100%;
    padding: 16px;
    padding-top: 82px;
  }
  .airdrop-leaderboard {
    width: 100%;
    height: 100%;
    padding: 16px;
    padding-top: 82px;
    /* background: red; */
  }
  .airdrop-quest {
    width: 100%;
    max-width: 560px;
    height: 100%;
    padding: 16px;
    padding-top: 120px;
    padding-bottom: 70px;
    overflow: auto;
  }
  .airdrop-tabs {
    display: flex;
    width: 80%;
    justify-content: space-between;
    max-width: 583px;
    align-items: center;
    @media screen and (max-width: 3000px) {
      flex-direction: column;
      gap: 20px;
    }
    .tabs-left {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
      img {
        width: 280px;
        @media screen and (max-width: 3000px) {
          width: 140px;
        }
      }
      .left-label {
        font-family: 'Fredoka';
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: -0.02em;
        text-align: center;
        color: #ffffff;
      }
      .left-value {
        font-family: 'Fredoka';
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: -0.02em;
        text-align: center;
        color: #ffffff;
        margin-top: -12px;
      }
    }
    .tabs-right {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
      .tabs-tab {
        cursor: pointer;

        display: flex;
        gap: 8px;
        align-items: center;
        background: url(${buttonBg});
        background-size: 100% 100%;
        width: 180px;
        height: 64px;
        justify-content: center;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.01);
          opacity: 0.9;
        }
        img {
          height: 32px;
          width: auto;
        }
        div {
          min-width: 92px;
          font-family: 'Fredoka';
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
`;
