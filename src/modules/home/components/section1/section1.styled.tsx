import styled from 'styled-components';
import bg from '@/assets/home/section1/bg.png';
export const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: 100% 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .bubbles-section1 {
    position: absolute;
    z-index: 2;
    &.left {
      bottom: -20%;
      left: 10%;
    }
    &.right {
      bottom: -20%;
      right: 10%;
    }
  }
  .section1 {
    margin-top: 165px;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 634px;
    @media screen and (max-width: 768px) {
      min-height: 640px;
    }
    .logo {
      max-width: 706px;
      max-height: 412px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .btns {
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
      display: flex;
      gap: 16px;
      align-items: center;
    }
  }
`;
