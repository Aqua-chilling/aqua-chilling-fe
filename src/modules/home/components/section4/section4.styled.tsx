import styled, { keyframes } from 'styled-components';
import bg from '@/assets/home/section3/bg.png';
import tank from '@/assets/home/section3/tank.png';
export const anim = keyframes`
0%{
}
100%{
  transform: translateX(-100%);
}
`;
export const animReverse = keyframes`
0%{
}
100%{
  transform: translateX(100%);
}
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #143464;
  padding: 80px 0px;
  position: relative;
  top: -20px;
  @media screen and (max-width: 1024px) {
    gap: 32px;
  }
  .fishs {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 66px 0px;
    background-image: url(${bg});
    background-size: 100% 100%;
    margin-bottom: 59px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 32px;
    }
    gap: 27px;
    .row {
      display: flex;
      align-items: center;
      gap: 100px;
      animation: ${animReverse} 10s infinite;
      &.above {
        animation: ${anim} 10s infinite;
      }
      img {
        width: 144px;
        height: 66px;
      }
    }
  }
  .section4 {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 80px;
    @media screen and (max-width: 1024px) {
      gap: 32px;
    }
    .features {
      display: flex;
      align-items: center;
      gap: 80px;
      @media screen and (max-width: 1024px) {
        gap: 24px;
      }

      @media screen and (max-width: 1024px) {
        flex-direction: column;
      }
      .feature {
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url(${tank});
        background-size: 100% 100%;
        width: 420px;
        height: 240px;
        @media screen and (max-width: 768px) {
          width: 280px;
          height: 160px;
          font-size: 13.333px;
        }

        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        font-family: Quicksand;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.48px;
      }
    }
  }
`;
