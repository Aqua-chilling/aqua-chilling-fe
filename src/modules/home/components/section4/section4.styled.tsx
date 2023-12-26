import styled, { keyframes } from 'styled-components';
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
  .section4 {
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
      .card {
        img {
          width: 100%;
        }
      }
    }
  }
`;
