import styled, { keyframes } from 'styled-components';
import bg from '@/assets/home/section3/bg.png';
export const anim = keyframes`
0%{
}
100%{
  transform: translate(calc(-50% - 2rem));
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
      gap: 4rem;
      animation: ${anim} 35s forwards infinite linear;
      position: relative;
      width: fit-content;
      &.below {
        animation: ${anim} 35s reverse infinite linear;
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
    .partners {
      display: flex;
      align-items: center;
      @media screen and (max-width: 1024px) {
        gap: 24px;
      }

      @media screen and (max-width: 1024px) {
        flex-direction: column;
      }
    }
  }
`;
