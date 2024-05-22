import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
    padding: 24px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
  .swap-wrapper {
    border: 1px solid #143464;
    background: #0a1d3a;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .swap-label {
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: -0.004em;
      text-align: left;
      color: #ffffff;
      padding: 16px;
    }
    .swap-border {
      width: 100%;
      height: 1px;
      background: #143464;
      position: relative;
    }
    .swap-token {
      display: flex;
      align-items: center;
      gap: 8px;
      span {
        font-size: 14px;
        font-weight: 500;
        line-height: 17.5px;
        text-align: left;
        color: #ffffffb2;
      }
      img {
        width: 16px;
      }
    }
    .swap-input {
      padding: 16px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .swap-output {
        font-family: 'Quicksand';
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #ffffffb2;
        @media screen and (max-width: 768px) {
          font-size: 24px;
          line-height: 36px;
        }
      }
      input {
        max-width: calc(100% - 60px);
        background: none;
        border: none;
        outline: none;
        font-family: 'Quicksand';
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #ffffffb2;
        @media screen and (max-width: 768px) {
          font-size: 24px;
          line-height: 36px;
        }
      }
    }
    .swap-summary {
      font-family: 'Quicksand';
      font-size: 14px;
      font-weight: 500;
      line-height: 17.5px;
      text-align: left;
      color: #ffffffb2;
      width: 100%;
      text-align: center;
      padding: 16px;
    }
    .btn-swap {
      width: 100%;

      padding: 16px;

      > div {
        border-radius: 4px;
        padding: 7px;
        width: 100%;
        background: #f2de29;
        border: solid 5px #ffcf27;
        text-align: center;
        font-family: 'Quicksand';
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: -0.02em;
        text-align: center;
        color: #4b1606;
      }
    }
    .swap-border-with-btn {
      width: 100%;
      height: 1px;
      position: relative;
      margin: 16px 0px;
      div {
        width: 100%;
        height: 1px;
        background: #143464;
        position: relative;
        z-index: 1;
      }
      .btn-rotate {
        z-index: 2;
        position: absolute;
        width: 32px;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
      }
    }
  }
  .wallet-wrapper {
    border-radius: 6px;
    outline: solid 4px #090910;
    border: solid 6px #285cc4;
    overflow: hidden;
    > div {
      height: 100%;
      border-radius: 6px;
      border: solid 2px #143464;
      overflow: hidden;
      width: 100%;
      padding: 12px;
      background: #249fde;
    }
    .wallet {
      height: 100%;
      border: 4px solid #090910;
      background: #143464;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .wallet-border {
        width: 100%;
        height: 1px;
        background: #ffffff1a;
        margin: 8px 0px;
      }
      .wallet-bot {
        display: flex;
        padding: 18px;
        gap: 80px;
        @media screen and (max-width: 768px) {
          gap: 30px;
        }
        .wallet-bot-left {
          img {
            height: 40px;
            width: auto;
            margin-bottom: 24px;
          }
          .wallet-bot-label {
            font-size: 14px;
            font-weight: 500;
            line-height: 17.5px;
            text-align: left;
            color: #ffffffb2;
          }
          .wallet-bot-value {
            font-size: 32px;
            font-weight: 700;
            line-height: 40px;
            letter-spacing: -0.02em;
            text-align: left;
            color: #ffffff;
            margin-top: 8px;
            @media screen and (max-width: 768px) {
              font-size: 24px;
              line-height: 36px;
            }
          }
        }
      }
      .wallet-top {
        display: flex;
        width: 100%;
        padding: 18px;
        justify-content: space-between;

        .wallet-top-left {
          max-width: calc(100% - 150px);
          width: fit-content;
        }
        .wallet-top-right {
          display: flex;
          gap: 24px;
          > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            img {
              width: 48px;
            }
            span {
              font-size: 14px;
              font-weight: 700;
              line-height: 20px;
              letter-spacing: -0.004em;
              text-align: center;
              color: #ffffff;
            }
          }
        }
        .wallet-label {
          font-family: 'Quicksand';
          font-size: 32px;
          font-weight: 700;
          line-height: 40px;
          text-align: left;
          color: #ffffff;
        }
        .wallet-address {
          display: flex;
          gap: 8px;
          margin-top: 4px;
          align-items: center;
          width: 100%;
          span {
            font-family: 'Quicksand';
            font-size: 14px;
            font-weight: 500;
            line-height: 17.5px;
            text-align: left;
            color: #ffffffb2;
            display: block;
            max-width: calc(100% - 22px);
            overflow: hidden;
          }
          img {
            width: 16px;
          }
        }
        @media screen and (max-width: 1050px) {
          flex-direction: column;
          gap: 20px;
          .wallet-top-left {
            max-width: 100%;
            width: fit-content;
          }
          .wallet-label {
            font-size: 24px;
            line-height: 36px;
          }
        }
      }
    }
  }
`;
