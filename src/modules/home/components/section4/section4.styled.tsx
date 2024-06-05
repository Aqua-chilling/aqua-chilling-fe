import styled, { keyframes } from 'styled-components';
import bg from '@/assets/home/section3/bg.png';
export const anim = keyframes`
0%{
  transform: translate(0,0);
}
100%{
  transform: translate(-50%,0);
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
    padding: 24px 0px;
    max-height: 680px;
  }

  .fishs {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 66px 0px;
    margin-bottom: 59px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 32px;
      gap: 0px;
    }
    gap: 27px;
    position: relative;
    .bg {
      z-index: 1;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url(${bg});
      background-size: 100% 100%;
    }
    .row {
      animation: ${anim} 20s forwards infinite linear;
      top: 0px;
      left: 0px;
      white-space: nowrap;
      position: relative;
      z-index: 2;
      display: flex;
      img {
        width: 144px;
        height: 66px;
        margin: 0 0.5em;
        position: relative;
        z-index: 2;
      }
      &.below {
        animation: ${anim} 20s reverse infinite linear;
      }
    }
  }
  .section4 {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 80px;
    position: relative;
    z-index: 3;
    height: 600px;
    @media screen and (max-width: 1024px) {
      gap: 32px;
    }
    .partners {
      display: flex;
      align-items: center;
      @media screen and (max-width: 1024px) {
        gap: 24px;
      }

      @media screen and (max-width: 1024px) {
        flex-direction: column;
        img {
          width: 200px;
        }
      }
    }
  }
`;
