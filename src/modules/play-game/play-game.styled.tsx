import styled from 'styled-components';
import bg from '@/assets/airdrop/bg.png';
import bgAirdrop from '@/assets/bg-quest.png';
import purchaseSuccess from '@/assets/packages/purchase-success.png';
import cardSuccess from '@/assets/packages/card-success.png';
import balanceBg from '@/assets/airdrop/balance-bg.png';
import specialPackage from '@/assets/airdrop/special-bg.png';
import specialCard from '@/assets/airdrop/card-bg.png';
import btnBg from '@/assets/airdrop/button-1.png';
import aquaPackage from '@/assets/airdrop/aqua-package.png';
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
  position: relative;
  box-sizing: border-box !important;
  /* padding: 12px; */
  @media screen and (max-width: 1024px) {
    background-size: cover;
  }
  .game-iframe {
    box-sizing: border-box !important;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    iframe {
      box-sizing: border-box !important;
      width: 100%;
      height: 100%;
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
    @media screen and (max-width: 3000px) {
      background-image: none;
      flex-direction: column;
      align-items: start;
      background: #0c2449;
      width: 100vw;
      height: 100vh;
    }
    .close-mobile {
      display: none;
      @media screen and (max-width: 3000px) {
        display: flex;
        padding: 16px;
      }
      div {
        width: 24px;
        height: 24px;
      }
    }
    .close-received {
      @media screen and (max-width: 3000px) {
        display: none;
      }
      position: absolute;
      top: -14px;
      right: 0px;
      z-index: 2;
    }
  }

  * {
    box-sizing: border-box !important;
  }
  @media screen and (max-width: 3000px) {
    background-size: cover;
  }
  .purchase-result {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    background: #000000b2;
    gap: 40px;
  }
  .package-nav {
    width: 100%;
  }
  .aqua-packages {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;

    max-height: calc(100vh - 420px);
    overflow: auto;
    .aqua-package {
      background: url(${aquaPackage});
      background-size: 100% 100%;
      .aqua-info {
        background: url(${specialCard});
        background-size: 100% 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .buy-btn {
    font-family: 'Fredoka';
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    width: 69px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${btnBg});
    background-size: 100% 100%;
    cursor: pointer;
  }
  .purchase-cards {
    margin-top: 55px;
    margin-bottom: 35px;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    @media screen and (max-width: 3000px) {
      margin-top: 16px;
      margin-bottom: 24px;
    }
    .purchase-card {
      position: relative;
      width: 180px;
      height: 169px;
      background-image: url(${cardSuccess});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      img {
        width: 100px;
      }
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 3000px) {
        width: 100px;
        height: 94px;
        img {
          width: 59px;
        }
      }
      .card-amount {
        font-family: 'Quicksand';
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: -0.02em;
        text-align: center;
        color: white;
        @media screen and (max-width: 3000px) {
          font-size: 14px;
          line-height: 17.5px;
          letter-spacing: -0.02em;
          text-align: center;
        }
      }
    }
  }
  .card-btns {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .card-btn {
    cursor: pointer;
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
    margin-bottom: 30px;
  }
  .purchase-success {
    margin-top: 30px;
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
    @media screen and (max-width: 3000px) {
      width: 328px;
      height: 54px;
      font-size: 24px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: -0.02em;
      text-align: center;
    }
  }
  .buy-modal {
    width: 100%;
    max-width: 1200px;
    position: relative;
    overflow: visible;
    .buy-background-mb {
      position: absolute;
      width: calc(100% + 90px);
      top: -18px;
      z-index: 2;
      display: none;
      @media screen and (max-width: 3000px) {
        display: block;
      }
    }
    @media screen and (max-width: 3000px) {
      width: 92vw;
      max-width: 475px;
    }
    .close {
      position: absolute;
      top: 33px !important;
      right: 68px !important;
      padding: 4px;
      padding-bottom: 0px;
      border-radius: 30%;
      cursor: pointer;
      transition: all 0.3s;
      background: white;
      z-index: 3 !important;
      @media screen and (max-width: 3000px) {
        top: 3px !important;
        right: 4px !important;
      }
      @media screen and (max-width: 3000px) {
        top: 16px;
        right: 16px;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    .buy-modal-bg {
      position: absolute;
      width: 110%;
      height: 110%;
      top: 46%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
      }
      @media screen and (max-width: 3000px) {
        display: none;
      }
    }
    .buy-background {
      position: relative;
      z-index: 1;
      width: 100%;
      @media screen and (max-width: 3000px) {
        display: none;
      }
    }
    .buy-content {
      position: absolute;
      z-index: 2;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      gap: 35px;
      align-items: center;
      flex-direction: column;
      border: 8px solid #090910;
      border-radius: 16px;
      background: white;
      padding: 8px;
      .balance-card {
        background: url(${balanceBg});
        background-size: 100% 100%;
        padding: 4px 6px;
        padding-right: 22px;
      }
      .special-package {
        background: url(${specialPackage});
        background-size: 100% 100%;
        .special-card {
          background: url(${specialCard});
          background-size: 100% 100%;
        }
      }
      @media screen and (max-width: 3000px) {
        position: relative;
        width: 100%;
        top: unset;
        left: unset;
        transform: unset;
        flex-direction: column;
        align-items: center;
        gap: 24px;
      }

      .buy-title {
        font-family: 'Quicksand';
        font-size: 48px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: -0.02em;
        text-align: center;
        @media screen and (max-width: 3000px) {
          font-size: 24px;
          font-weight: 700;
          line-height: 30px;
          letter-spacing: -0.02em;
          text-align: left;
          margin-top: 10%;
        }
      }
      .buy-summary {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        @media screen and (max-width: 3000px) {
          width: 100%;
        }
        .summary-border {
          background: #272c33;
          width: 100%;
          height: 1px;
          margin-top: -4px;
          margin-bottom: -4px;
        }
        .summary-button {
          cursor: pointer;
          background: #0a80b8;
          border: 3px solid #090910;
          width: 100%;
          min-width: 120px;
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
          position: relative;
          &.summary-loading {
            opacity: 0.9;
            cursor: default;
          }
          > span {
            opacity: 0.5;
          }
          .button-spin {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .summary-info-3 {
          padding: 4px;
          background: #090910;
          border-radius: 8px;
          .summary-info-2 {
            padding: 2px;
            background: #249fde;
            border-radius: 6px;
            .summary-info-1 {
              padding: 3px;
              background: #285cc4;
              border-radius: 4px;
              .summary-info-0 {
                padding: 4px;
                background: #060608;
                border-radius: 4px;
              }
            }
          }
        }
        .summary-info {
          background: #285cc4;
          display: flex;
          flex-direction: row;
          gap: 16px;
          padding: 4px;
          @media screen and (max-width: 3000px) {
            width: 100%;
          }
          .info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 6px;
            .info-label {
              font-family: 'Quicksand';
              font-size: 20px;
              font-weight: 700;
              line-height: 25px;
              letter-spacing: -0.02em;
              text-align: left;
              color: #ffffff;
            }
            .info-value {
              font-family: 'Quicksand';
              font-size: 20px;
              font-weight: 700;
              line-height: 25px;
              letter-spacing: -0.02em;
              text-align: right;
              color: #ffffff;
            }
          }
        }
      }
      .buy-package {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        @media screen and (max-width: 3000px) {
          width: 100%;
        }
        .package-cards {
          display: flex;
          gap: 16px;
          max-height: calc(100vh - 340px);
          overflow-y: auto;
          @media screen and (max-width: 3000px) {
            flex-direction: column;
            width: 100%;
          }
          .package-card {
            border: 4px solid #090910;
            background: #121b27cc;
            border-radius: 16px;
            padding: 24px 12px;
            padding-bottom: 17px;

            img {
              width: 120px;
              @media screen and (max-width: 3000px) {
                width: 80px;
              }
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            @media screen and (max-width: 3000px) {
              flex-direction: row;
              align-items: stretch;
              gap: 16px;
            }
            .card-content {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
              justify-content: space-between;
              @media screen and (max-width: 3000px) {
                align-items: flex-start;
              }
            }
            .card-title {
              font-family: 'Quicksand';
              font-size: 16px;
              font-weight: 700;
              line-height: 20px;
              letter-spacing: -0.02em;
              text-align: left;
              margin-top: 17px;
              color: #ffffff;
              white-space: nowrap;
              @media screen and (max-width: 3000px) {
                margin-top: 10px;
              }
            }
            .card-border {
              background: #272c33;
              width: 100%;
              height: 1px;
              margin-top: 10px;
              margin-bottom: 12px;
              @media screen and (max-width: 3000px) {
                margin-bottom: 3px;
              }
            }
            .card-info {
              display: flex;
              width: 100%;
              justify-content: space-between;
              @media screen and (max-width: 3000px) {
                margin-bottom: 10px;
              }
            }
            .card-amount {
              display: flex;
              gap: 6px;
              align-items: center;
              .amount-btn {
                cursor: pointer;
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
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
`;
