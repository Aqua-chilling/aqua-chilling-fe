import styled from 'styled-components';
import bg from '@/assets/airdrop/bg.png';
import bgNFT from '@/assets/airdrop/bg-triden.png';
import bgTop from '@/assets/airdrop/bg-top.png';
import bgBottom from '@/assets/airdrop/bg-time.png';
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
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 1024px) {
    background-size: cover;
  }
  @media screen and (max-width: 600px) {
    min-height: 1200px;
  }

  .top-airdrop {
    background-image: url(${bgTop});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 80%;
    height: 87.592px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 12px;
    margin-top: 12px;
    color: #fff;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.64px;
    @media screen and (max-width: 900px) {
      width: 110%;
      margin-top: 0px;
      padding: 0px 10%;
    }
    span {
      @media screen and (max-width: 500px) {
        font-size: 24px;
      }
    }
    .hole {
      @media screen and (max-width: 900px) {
        display: none;
      }
      width: 160px;
      visibility: hidden;
    }
    .btn-sell {
      position: relative;
      z-index: 4;
      .toogle {
        .btn {
          @media screen and (max-width: 768px) {
            display: none;
          }
        }
        .btn-mobile {
          display: none;
          color: white;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          svg {
            width: 24px;
            height: 24px;
          }
          @media screen and (max-width: 768px) {
            display: flex;
          }
        }
      }
      .sign-out {
        position: absolute;
        padding-top: 72px;
        width: 328px;
        right: 0px;
        top: 0px;
        transition: all 0.3s;
        z-index: 2;
        display: none;
        &.show {
          display: flex !important;
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100vw;
          height: 100vh;
          background-color: transparent;
        }
      }
    }
    .outer-1 {
      border-radius: 6px;
      background: #090910;
      padding: 6px;
      height: 100%;
      width: 100%;
      position: relative;
      z-index: 2;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
      .outer-2 {
        height: 100%;
        border-radius: 6px;
        background: #285cc4;
        padding: 6px;
        .outer-3 {
          height: 100%;
          border-radius: 4px;
          background: #143464;
          padding: 4px;
          .outer-4 {
            height: 100%;
            padding: 12px;
            border-radius: 4px;
            background: #249fde;
            .outer-5 {
              height: 100%;
              border-radius: 8px;
              border: 4px solid #090910;
              background: #143464;
              padding: 16px;
              display: flex;
              flex-direction: column;
              position: relative;
              &.signout {
                background-color: black;
                align-items: center;
                gap: 12px;
                color: rgba(255, 255, 255, 0.7);
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: -0.32px;
                .value {
                  display: flex;
                  align-items: center;
                  gap: 8px;
                  img {
                    width: 24px;
                    height: 24px;
                  }
                }
                span {
                  color: #fff;
                  font-size: 32px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: normal;
                  letter-spacing: -0.64px;
                }
              }
            }
          }
        }
      }
    }
  }
  .airdrop {
    display: flex;
    height: fit-content;
    gap: 48px;

    position: relative;
    z-index: 3;
    @media screen and (max-width: 1240px) {
      flex-direction: column-reverse;
      gap: 0px;
    }
    .left {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      @media screen and (max-width: 1240px) {
        width: 100%;
      }
      @media screen and (max-width: 600px) {
        padding: 0px 12px;
        transform: translateY(-64px);
      }
      .title {
        color: #090910;
        font-size: 80px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -1.6px;
        white-space: nowrap;
        width: 100%;
        @media screen and (max-width: 1240px) {
          font-size: 60px;
          display: flex;
          white-space: wrap;
        }
      }
      ul {
        width: 100%;
        color: #090910;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 36px */
        @media screen and (max-width: 1240px) {
          margin-block-start: 0;
          margin-block-end: 0;
        }
        li {
        }
      }
      .joined {
        color: #285cc4;
        width: 100%;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 36px */
        margin-left: 24px;
        span {
          color: #545468;
          font-style: normal;
          font-weight: 600;
          line-height: 150%;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (max-width: 600px) {
        transform: translateY(-100px);
      }
      .slider-container {
        position: relative;
        max-width: 600px;
        overflow: hidden;
        display: flex;
        @media screen and (max-width: 600px) {
          max-width: 325px;
        }
        .swiper_container {
          padding: 2rem 0;
          width: 100%;
          display: flex;
          align-items: center;
          .swiper-slide {
            width: 250px;
            height: 315px;
            @media screen and (max-width: 600px) {
              width: 225px;
              height: 290px;
            }
            position: relative;
            background-image: url(${bgNFT});
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 37px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            img {
              width: 175px;
              height: 200px;
              border-radius: 6.687px;
              @media screen and (max-width: 600px) {
                width: 150px;
                height: 175px;
              }
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
            transition: all 0.3s;
            opacity: 0.3;
            &-active {
              opacity: 1;
              transform: scale(1.1);
              z-index: 333;
            }
            &-next {
              transform: scale(0.9) translateX(-100px);
            }
            &-prev {
              transform: scale(0.9) translateX(100px);
            }
          }

          .swiper-slide .swiper-slide-shadow-left,
          .swiper-slide-shadow-right {
            display: none;
          }
          .slider-controler {
            .swiper-button-prev,
            .swiper-button-next {
              position: absolute;
              width: 64px;
              height: 64px;
              .icon {
                width: 100%;
                height: 100%;
              }
              &::after {
                display: none;
              }
            }
          }
        }
      }
    }
  }
  .bottom-airdrop {
    width: 300px;
    height: 80px;
    padding: 0px 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url(${bgBottom});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-bottom: 64px;
    @media screen and (max-width: 1240px) {
      margin-bottom: 16px;
    }
    @media screen and (max-width: 600px) {
      transform: translateY(-64px);
    }
    .timer {
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.4px;
    }
  }
  .fish {
    position: absolute;
    z-index: 0;
    width: 96px;
    @media screen and (max-width: 600px) {
      display: none;
    }
    &.a {
      top: 300px;
      right: 60px;
    }
    &.b {
      top: 500px;
      left: 200px;
    }
    &.c {
      top: 158px;
      right: 356px;
    }
    &.d {
      bottom: 0px;
      left: 456px;
    }
    &.e {
      bottom: 10px;
      right: 356px;
    }
    &.f {
      top: 350px;
      left: 556px;
    }
    &.g {
      bottom: 10px;
      right: left;
    }
  }
  .bubbles-section1 {
    position: absolute;
    z-index: 0;
    &.left {
      left: 10%;
      bottom: 0%;
    }
    &.right {
      bottom: 0%;
      right: 10%;
    }
  }
`;
