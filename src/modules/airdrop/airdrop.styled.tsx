import styled from 'styled-components';
import bg from '@/assets/airdrop/bg.png';
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

  .top-airdrop {
    background-image: url(${bgTop});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 80%;
    height: 87.592px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 0px;
    margin-top: 12px;
    color: #fff;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.64px;
  }
  .airdrop {
    display: flex;
    height: fit-content;
    gap: 48px;
    .left {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      .title {
        color: #090910;
        font-size: 80px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -1.6px;
        white-space: nowrap;
        width: 100%;
      }
      ul {
        width: 100%;
        color: #090910;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 36px */
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
      .slider-container {
        position: relative;
        max-width: 500px;
        overflow: hidden;
        display: flex;
        .swiper_container {
          padding: 2rem 0;
          .swiper-slide {
            position: relative;
            width: auto;

            img {
              object-fit: cover;
            }
            opacity: 0.3;
            transform: scale(0.8);
            transition: all 0.3s;
            &-active {
              opacity: 1;
              transform: scale(1);
            }
          }
          .swiper-slide .swiper-slide-shadow-left,
          .swiper-slide-shadow-right {
            display: none;
          }
          .slider-controler {
            .swiper-button-prev,
            .swiper-button-next {
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
    .timer {
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.4px;
    }
  }
`;
