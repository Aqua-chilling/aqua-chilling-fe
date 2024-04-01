import styled from 'styled-components';
import bg from '@/assets/airdrop/bg.png';
import purchaseSuccess from '@/assets/packages/purchase-success.png';
import cardSuccess from '@/assets/packages/card-success.png';
export const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px;
  @media screen and (max-width: 1024px) {
    background-size: cover;
  }
  @media screen and (max-width: 600px) {
    min-height: 1200px;
  }
  .package-nav {
    width: 100%;
  }
  .purchase-cards {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    .purchase-card {
      position: relative;
      width: 360px;
      height: 338px;
      background-image: url(${cardSuccess});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      img {
        width: 200px;
      }
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: center;
      justify-content: center;
      .card-amount {
        font-family: 'Quicksand';
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: -0.02em;
        text-align: center;
        color: white;
      }
      .card-btn {
        width: 141px;
        height: 40px;
        border-radius: 12px;
        border: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: 'Quicksand';
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: -0.02em;
        text-align: center;
        color: white;
        border: 4px solid #71b6a9;
        background: #588d99;
        margin-top: 11px;
      }
    }
  }
  .purchase-success {
    background-image: url(${purchaseSuccess});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 549.13px;
    height: 90px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Quicksand';
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: -0.02em;
    text-align: center;
    color: white;
  }
  .buy-modal {
    width: 100%;
    max-width: 1200px;
    position: relative;
    .buy-background {
      position: relative;
      z-index: 1;
      width: 100%;
    }
    .buy-content {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      gap: 52px;
      align-items: flex-start;
      .buy-title {
        font-family: 'Quicksand';
        font-size: 48px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: -0.02em;
        text-align: center;
      }
      .buy-summary {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        .summary-border {
          background: #272c33;
          width: 100%;
          height: 1px;
          margin-top: -4px;
          margin-bottom: -4px;
        }
        .summary-button {
          background: #0a80b8;
          border: 3px solid #090910;
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border-radius: 12px;
          font-family: 'Quicksand';
          font-size: 14px;
          font-weight: 700;
          line-height: 17.5px;
          text-align: center;
          color: white;
        }
        .summary-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 200px;
          .info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            .info-label {
              font-family: 'Quicksand';
              font-size: 16px;
              font-weight: 500;
              line-height: 20px;
              letter-spacing: -0.02em;
              text-align: left;
              color: #090910;
            }
            .info-value {
              font-family: 'Quicksand';
              font-size: 16px;
              font-weight: 700;
              line-height: 20px;
              letter-spacing: -0.02em;
              text-align: right;
              color: #090910;
            }
          }
        }
      }
      .buy-package {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        .package-cards {
          display: flex;
          gap: 16px;
          .package-card {
            border: 4px solid #090910;
            background: #121b27cc;
            border-radius: 16px;
            padding: 24px 12px;
            padding-bottom: 17px;
            img {
              width: 120px;
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            .card-title {
              font-family: 'Quicksand';
              font-size: 16px;
              font-weight: 700;
              line-height: 20px;
              letter-spacing: -0.02em;
              text-align: left;
              margin-top: 17px;
              color: #ffffff;
            }
            .card-border {
              background: #272c33;
              width: 100%;
              height: 1px;
              margin-top: 10px;
              margin-bottom: 12px;
            }
            .card-info {
              display: flex;
              width: 100%;
              justify-content: space-between;
            }
            .card-amount {
              display: flex;
              gap: 6px;
              align-items: center;
              .amount-btn {
                width: 20px;
                height: 20px;
                background: #588d99;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                padding-bottom: 4px;
                text-align: center;
              }
              .amount {
                font-family: 'Quicksand';
                font-size: 14px;
                font-weight: 700;
                line-height: 17.5px;
                letter-spacing: -0.02em;
                text-align: left;
                color: white;
              }
            }
            .card-price {
              font-family: 'Quicksand';
              font-size: 14px;
              font-weight: 700;
              line-height: 17.5px;
              letter-spacing: -0.02em;
              text-align: left;
              color: #a6fcdb;
            }
          }
        }
      }
    }
  }
`;
