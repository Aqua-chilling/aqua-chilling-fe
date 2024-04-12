import styled from 'styled-components';
import bg from '@/assets/airdrop/bg.png';
import purchaseSuccess from '@/assets/packages/purchase-success.png';
import cardSuccess from '@/assets/packages/card-success.png';
export const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  padding: 12px;
  *{
    box-sizing: border-box !important;
  }
  @media screen and (max-width: 930px) {
    background-size: cover;
  }
  .purchase-result{
    display: flex;
  align-items: center;
  justify-content: center;
  min-height: 92vh;
  flex-direction: column;
  }
  .package-nav {
    width: 100%;
  }
  .purchase-cards {
    margin-top: 55px;
    margin-bottom: 35px;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
      margin-top: 16px;
    margin-bottom: 24px;
  }
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
      @media screen and (max-width: 768px) {
        width: 200px;
height: 188px;
img{
  width: 108px;
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
        @media screen and (max-width: 768px) {
font-size: 14px;
line-height: 17.5px;
letter-spacing: -0.02em;
text-align: center;


  }
      }
      
    }
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
    @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 930px) {
        background: white;
        width: 92% ;
        max-width: 600px;
        border: 8px solid #090910;
        padding: 16px;
        border-radius: 8px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
  }
    .buy-background {
      position: relative;
      z-index: 1;
      width: 100%;
      @media screen and (max-width: 930px) {
        display: none;
  }
    }
    .buy-content {
      position: absolute;
      z-index: 2;
      top: 53%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      gap: 52px;
      align-items: flex-start;
      @media screen and (max-width: 930px) {
        position: relative;
       width: 100%;
        top: unset;
      left: unset;
      transform: unset;
      flex-direction: column;
      align-items: center;
      gap: 24px;
  }
      .buy-background-mb{
        position: absolute;
        width: calc(100% + 90px);
        top:-26px;
    display: none;
    @media screen and (max-width: 930px) {
        display: block;
  }
  }
      .buy-title {
        font-family: 'Quicksand';
        font-size: 48px;
        font-weight: 700;
        line-height: 60px;
        letter-spacing: -0.02em;
        text-align: center;
        @media screen and (max-width: 930px) {
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
        align-items: flex-start;
        gap: 20px;
        @media screen and (max-width: 930px) {
          width:100% ;

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
          position:relative ;
          &.summary-loading{
            opacity: 0.9;
            cursor: default;
          }
          >span{
            opacity: 0.5;
          }
          .button-spin{
            position:absolute ;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .summary-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 200px;
          @media screen and (max-width: 930px) {
          width:100% ;

  }
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
        @media screen and (max-width: 930px) {
        width: 100%;
  }
        .package-cards {
          display: flex;
          gap: 16px;
          @media screen and (max-width: 930px) {
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
              @media screen and (max-width: 930px) {
                width: 80px;
  }
            }
            display: flex;
            flex-direction: column;
            align-items: center;
            @media screen and (max-width: 930px) {
              flex-direction: row;
              align-items: stretch;
              gap: 16px;
  }
      .card-content{
        display: flex;
        flex-direction: column;
            align-items: center;
            width:100% ;
            justify-content: space-between;
            @media screen and (max-width: 930px) {
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
              @media screen and (max-width: 930px) {
                margin-top: 10px;
  }
            }
            .card-border {
              background: #272c33;
              width: 100%;
              height: 1px;
              margin-top: 10px;
              margin-bottom: 12px;
              @media screen and (max-width: 930px) {
                margin-bottom: 3px;
  }
            }
            .card-info {
              display: flex;
              width: 100%;
              justify-content: space-between;
              @media screen and (max-width: 930px) {
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
