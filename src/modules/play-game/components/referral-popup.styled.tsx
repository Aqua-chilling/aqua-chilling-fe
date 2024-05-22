import styled, { keyframes } from 'styled-components';
import backgroundBg from '@/assets/airdrop/new-bg.png';
import backgroundBg3 from '@/assets/airdrop/new-bg-3.png';
import infoBg from '@/assets/airdrop/info-bg.png';
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
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .referral-popup-content {
    width: 90%;
    max-width: 344px;
    height: 90%;
    max-height: 350px;
    position: relative;
    background-image: url(${backgroundBg3});
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;

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
    .ref-title {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translate(-50%, -100%);
      font-family: 'Fredoka';
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;
      letter-spacing: -0.02em;
      text-align: center;
      color: #ffffff;
    }
    .ref-info {
      width: 100%;
      padding: 20px;
      padding-top: 85px;
      .info-title {
        font-family: 'Fredoka';
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: -0.02em;
        text-align: center;
        color: #ffffff;
      }
      .info-wrapper {
        margin-top: 16px;
        background: url(${infoBg});
        background-size: 100% 100%;
        border-radius: 16px;
        overflow: hidden;
        padding: 16px;
        width: 100%;
        max-width: 300px;
        .ref-link {
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 8px;
          align-items: center;
          margin-bottom: 16px;
          .link-left {
            max-width: 60%;
          }
        }
        .link-label {
          font-family: 'Fredoka';
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          text-align: left;
          color: #ffffff;
        }
        .ref-btn {
          border: 2px solid #4c99d1;
          background: #7aefff;
          border-radius: 8px;
          padding: 4px 16px;
          width: fit-content;
          cursor: pointer;
          &:hover {
            opacity: 0.9;
            transform: scale(1.01);
          }
        }
        .link-value {
          font-family: 'Fredoka';
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: -0.02em;
          text-align: left;
          color: #38b6ff;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .code-value {
          border: 2px solid #143464;
          padding: 16px;
          border-radius: 16px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
          span {
            font-family: 'Fredoka';
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #ffffff;
            opacity: 0.7;
          }
        }
      }
    }
  }
`;
