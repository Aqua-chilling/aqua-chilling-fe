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
    width: 800px;
    display: flex;
    flex-direction: column;
    background: #131b26;
    position: relative;
    gap: 24px;
    border-radius: 16px;

    @media screen and (max-width: 900px) {
      max-height: 90vh;
      max-width: 90vw;
      overflow-y: scroll;
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

    .quest-content {
      display: flex;
      width: 100%;
      gap: 24px;
      border-radius: 16px;
      border: 8px solid #090910;
      background: #131b26;
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
        justify-content: center;
        align-items: center;
        gap: 12px;
        flex: 1;
        background: #d8fbff;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        padding: 0px 12px;
        @media screen and (max-width: 900px) {
          background: transparent;
          margin-top: 24px;
        }
        .title {
          display: none;

          @media screen and (max-width: 900px) {
            display: block;
          }
        }
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
          @media screen and (max-width: 900px) {
            width: 100px;
            height: 126px;
            padding: 15px;
          }
          img {
            width: 175px;
            height: 200px;
            @media screen and (max-width: 900px) {
              width: 70px;
              height: 80px;
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
            @media screen and (max-width: 900px) {
              font-size: 7.5px;
              margin-top: 4px;
            }
          }
        }
        .btn-claim {
        }
        p {
          color: #090910;
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
      .steps {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 40px;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;

        @media screen and (max-width: 900px) {
          padding: 12px;
        }
        .title {
          text-align: left;
          @media screen and (max-width: 900px) {
            display: none;
          }
        }
        .step {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;

          &.completed {
            color: #37ff7b;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }

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
          .tooltip {
            color: #fff;
            span {
              color: #37ff7b;
              text-decoration: underline;
            }
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
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
              &.completed {
                color: #37ff7b;
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                border-radius: 12px;
                border: 3px solid rgba(255, 255, 255, 0.1);
                background: transparent;
                .ic {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }
              &.disabled {
                opacity: 0.5;
                pointer-events: none;
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
