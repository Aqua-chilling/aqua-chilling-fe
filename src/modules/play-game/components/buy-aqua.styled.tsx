import styled, { keyframes } from 'styled-components';
import buyBg from '@/assets/wallet/buy-bg.png';
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
  .close {
    position: absolute;
    z-index: 1;
    top: 16px;
    right: 16px;
  }
  .buy-wrapper {
    width: 100%;
    max-width: 360px;
    position: relative;
    background: url(${buyBg});
    background-size: 100% 100%;
    padding: 24px;
    border-radius: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    .buy-success {
      align-self: center;
      width: 120px;
    }
    .success-subtitle {
      font-family: 'Quicksand';
      font-size: 14px;
      font-weight: 500;
      line-height: 17.5px;
      text-align: left;
      color: #ffffffb2;
      align-self: center;
    }
    .success-title {
      font-family: 'Fredoka';
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;
      letter-spacing: -0.02em;
      text-align: left;
      align-self: center;
      margin-top: 8px;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .buy-title {
      font-family: 'Fredoka';
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: -0.02em;
      text-align: left;
      color: #ffffff;
    }
    .buy-subtitle {
      margin-top: 8px;
      font-family: 'Fredoka';
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.02em;
      text-align: left;
      color: #ffffff;
      margin-bottom: 112px;
    }
    .input-token {
      align-self: center;
      display: flex;
      align-items: center;
      gap: 4px;
      img {
        width: 16px;
      }
      span {
        font-family: 'Quicksand';
        font-size: 14px;
        font-weight: 500;
        line-height: 17.5px;
        text-align: right;
        color: #ffffffb2;
      }
    }
    .buy-button {
      width: 100%;
      background: #7aefff;
      padding: 8px 16px;
      border-radius: 8px;
      margin-top: 16px;
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
    .btn-cancel {
      margin-top: 40px;
    }
    .input-wrapper {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .buy-output {
      margin-top: 16px;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 35px;
      .output-value {
        font-family: 'Fredoka';
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #ffffff;
        opacity: 0.7;
        width: 70%;
      }
    }
    .buy-input {
      border: 1px solid #143464;
      margin-top: 24px;
      border-radius: 8px;
      padding: 16px;

      input {
        border: none;
        outline: none;
        background: transparent;
        font-family: 'Fredoka';
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #ffffff;
        opacity: 0.7;
        width: 70%;
      }
    }
    .input-label {
      font-family: 'Quicksand';
      font-size: 14px;
      font-weight: 500;
      line-height: 17.5px;
      text-align: left;
      color: #ffffffb2;
      margin-bottom: 4px;
    }
  }
`;
