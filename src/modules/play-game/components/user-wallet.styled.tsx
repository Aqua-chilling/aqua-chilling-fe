import styled, { keyframes } from 'styled-components';
import roundedBg from '@/assets/wallet/rounded-bg.png';
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
  .wallet-content {
    width: 100%;
    max-width: 522px;
    position: relative;
    background: url(${roundedBg});
    background-size: 100% 100%;
    padding-top: 1px;
    padding-left: 5px;
    padding-bottom: 5px;
    padding-right: 3px;
    border-radius: 24px;
    /* overflow: hidden; */
    .header-bg {
      border-radius: 24px 24px 0px 0px;
      overflow: hidden;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .wallet-info {
      width: 100%;
      background: #0c2449;
      padding: 16px 27px;
      border-radius: 0px 0px 24px 24px;
      margin-top: -7px;
      .wallet-title {
        font-family: 'Fredoka';
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #ffffff;
      }
      .wallet-address {
        display: flex;
        gap: 8px;
        align-items: center;
        margin-top: 4px;
        margin-bottom: 24px;
        div {
          font-family: 'Fredoka';
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: -0.02em;
          text-align: left;
          color: #ffffff;
          max-width: 80%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        img {
          width: 16px;
          cursor: pointer;
        }
      }
      .wallet-cards {
        width: 100%;
        display: flex;
        gap: 16px;
        .wallet-card {
          padding: 16px;
          background: #143464;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
          img {
            height: 80px;
            width: auto;
          }
          .wallet-subtitle {
            font-family: 'Fredoka';
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #ffffff;
            margin-top: 48px;
          }
          .wallet-value {
            font-family: 'Fredoka';
            font-size: 24px;
            font-weight: 500;
            line-height: 32px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #ffffff;
            display: flex;
            gap: 4px;
            margin-top: 4px;
            span {
              opacity: 0.5;
            }
          }
          .wallet-button {
            background: #7aefff;
            padding: 8px 16px;
            border-radius: 8px;
            margin-top: 16px;
            width: fit-content;
            font-family: 'Fredoka';
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
            letter-spacing: -0.02em;
            text-align: center;
            color: #ffffff;
            border: 1px solid #1d1d22;
            cursor: pointer;
          }
          .wallet-border {
            width: 100%;
            height: 1px;
            background: #265389;
            margin: 16px 0px;
          }
          .wallet-subbutton {
            font-family: 'Fredoka';
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #f2de29;
            cursor: pointer;
          }
        }
      }
    }

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
    }
  }
`;
