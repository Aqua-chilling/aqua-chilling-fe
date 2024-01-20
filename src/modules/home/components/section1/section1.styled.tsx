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
  .fish {
    position: absolute;
    z-index: 1;
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
    z-index: 2;
    &.left {
      left: 10%;
      bottom: -20%;
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
    z-index: 2;
    position: relative;
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
      &:hover {
        #magnifier {
          display: block;
        }
      }
    }
  }
`;
