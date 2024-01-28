import styled, { keyframes } from 'styled-components';
import sand2 from '@/assets/home/section4/sand2.png';
import frame from '@/assets/home/section4/frame.png';
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #422433;
  position: relative;
  background-image: url(${sand2});
  background-size: 100% 40%;
  top: -20px;
  margin-top: 154px;
  @media screen and (max-width: 768px) {
    background-position: left 120%;
  }
  background-position: left bottom;
  padding-bottom: 3%;
  background-repeat: no-repeat;
  .sand {
    width: 100%;
    position: relative;
    transform: translateY(-10%);
    img {
      width: 100%;
      height: 100%;
    }
    .adult {
      position: absolute;
      top: -50px;
      width: 132px;
      height: 132px;
      @media screen and (max-width: 500px) {
        width: 64px;
        height: 64px;
        top: -30px;
      }
      &.left {
        left: 10%;
      }
      &.right {
        right: 10%;
      }
    }
  }
  .sand2 {
    position: absolute;
    bottom: 2%;
    width: 100%;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .section5 {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 80px;
    gap: 80px;
    @media screen and (max-width: 1024px) {
      padding: 24px;
    }
    &-txt {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 32px;
      }
    }
    .cards {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      &::-webkit-scrollbar {
        display: none;
      }
      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
      }
      gap: 16px;
      .cardd {
        background-image: url(${frame});
        background-size: 100% 100%;
        @media screen and (max-width: 768px) {
          &.end {
            display: none;
          }
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
