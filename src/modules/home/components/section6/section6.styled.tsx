import styled, { keyframes } from 'styled-components';
import frame from '@/assets/home/section5/frame.png';
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #422433;
  position: relative;
  .sand {
    width: 100%;
    min-height: 200px;
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
    gap: 120px;
    &-left {
      width: 60%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &-right {
      width: 40%;
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
