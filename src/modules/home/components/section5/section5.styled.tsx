import styled, { keyframes } from 'styled-components';
import sand2 from '@/assets/home/section4/sand2.png';
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #422433;
  position: relative;
  background-image: url(${sand2});
  background-size: 100% 40%;
  background-position: left bottom;
  padding-bottom: 3%;
  background-repeat: no-repeat;
  .sand {
    width: 100%;
    min-height: 200px;
    img {
      width: 100%;
      height: 100%;
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
    &-txt {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .cards {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 16px;
      .cardd {
        width: 240px;
        height: 240px;
        img {
          width: 100%;
        }
      }
    }
  }
`;
