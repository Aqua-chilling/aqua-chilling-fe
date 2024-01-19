import styled from 'styled-components';
export const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  .view-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    .view-img {
      display: flex;
      align-items: center;
      gap: 12px;
      .main-view {
        width: 960px;
        height: 538px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .cancle {
      color: #fff;
      text-align: center;
      font-family: Quicksand;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.32px;
    }
  }
`;
