import styled, { keyframes } from 'styled-components';
import frame from '@/assets/home/section5/frame.png';
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #422433;
  position: relative;
  top: -30px;
  .sand {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .section6 {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 80px 120px;
    @media screen and (max-width: 768px) {
      padding: 32px 16px;
    }
    gap: 120px;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      gap: 32px;
    }
    &-left {
      width: 60%;
      display: flex;
      align-items: center;
      flex-direction: column;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      .lf-player-container {
        position: relative;
        @media screen and (max-width: 768px) {
          width: 328px;
          height: 262.4px;
        }
        .bubbles-token {
          width: 100%;
          height: 100%;
          .bubbles {
            width: 100%;
            height: 100%;
          }
          position: absolute;
          bottom: -10%;
        }
      }
    }
    &-right {
      width: 40%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 40px;
      .stats {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-image: url(${frame});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 27px 32px 53px 27px;
        gap: 8px;
        .stat {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .label {
            color: rgba(255, 255, 255, 0.6);
            font-family: Quicksand;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 24px */
          }
          .value {
            color: #fff;
            text-align: right;
            font-family: Quicksand;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.32px;
          }
        }
      }
    }
  }
`;
