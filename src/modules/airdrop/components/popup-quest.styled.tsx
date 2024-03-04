import styled, { keyframes } from 'styled-components';
import bgNFT from '@/assets/airdrop/bg-triden.png';
const anim = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}

`;
const animContent = keyframes`
0%{
  top: 100%;
}
100%{
  top: 0;

}

`;

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
  z-index: 1001;
  @media screen and (max-width: 1024px) {
    top: auto;
    bottom: 0;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .popup-quest {
    max-width: 60vw;
    display: flex;
    flex-direction: column;
    padding: 40px;
    border-radius: 16px;
    border: 8px solid #090910;
    background: #131b26;
    position: relative;
    gap: 24px;

    @media screen and (max-width: 900px) {
      max-height: 90vh;
      overflow-y: scroll;
    }
    @media screen and (max-width: 600px) {
      max-width: 90vw;
    }
    @media screen and (max-width: 400px) {
    }
    .close {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
      transition: all 0.3s;
      @media screen and (max-width: 600px) {
        top: 4px;
        right: 4px;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
    .title {
      margin: 0 auto;
      color: #fff;
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.64px;
      width: 100%;
      max-width: 320px;
      @media screen and (max-width: 600px) {
        font-size: 22px;
      }
    }
    .quest-content {
      display: flex;
      width: 100%;
      gap: 24px;
      @media screen and (max-width: 900px) {
        flex-direction: column-reverse;
        align-items: center;
        .nft {
          width: 100%;
          gap: 24px;
          .nft-image {
          }
        }
        .steps {
          width: 100% !important;
        }
      }
      .nft {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        .nft-img {
          position: relative;
          background-image: url(${bgNFT});
          background-size: 100% 100%;
          background-repeat: no-repeat;
          padding: 37px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-size: 100% 100%;
          width: 250px;
          height: 315px;
          @media screen and (max-width: 600px) {
            width: 150px;
            height: 215px;
          }
          img {
            width: 175px;
            height: 200px;
            @media screen and (max-width: 600px) {
              width: 75px;
              height: 100px;
            }
            border-radius: 6.687px;
          }
          span {
            color: #090910;
            text-align: center;
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%; /* 22.5px */
            margin-top: 12px;
          }
        }
      }
      .steps {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        .step {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          &.nd {
            .btns {
              .btn {
                background: #4a57b5;
              }
            }
          }
          .label {
            color: #fff;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
          .btns {
            padding: 8px 0px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            @media screen and (max-width: 1140px) {
              flex-direction: column;
            }

            .btn {
              @media screen and (max-width: 1140px) {
                width: 100%;
              }
              color: #fff;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 4px;
              border-radius: 12px;
              padding: 8px 0px;
              background: #0a80b8;
              border: 3px solid #090910;
              img {
                width: 24px;
                height: 24px;
              }
              transition: all 0.3s;
              &:hover {
                background: #090910;
                border: 3px solid #0a80b8;
              }
            }
            input {
              width: 100%;
              flex: 1;
              border-radius: 12px;
              padding: 9px 12px;
              background: rgba(255, 255, 255, 0.1);
              outline: none;
              border: none;

              color: rgba(255, 255, 255, 0.5);
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              &::-webkit-input-placeholder {
                font-family: Quicksand;
              }
            }
          }
          span {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }
      }
    }
  }
`;
