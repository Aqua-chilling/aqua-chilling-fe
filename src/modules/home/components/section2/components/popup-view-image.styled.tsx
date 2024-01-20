import styled, { keyframes } from 'styled-components';
export const anim = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
export const animImg = keyframes`
0%{
  transform: scale(0);
}
100%{
  transform: scale(1);
}
`;
export const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  animation: ${anim} 0.5s forwards;
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
        animation: ${animImg} 0.5s forwards;
        overflow: hidden;
        display: flex;
        border-radius: 4px;
        .prev {
          position: absolute;
          transform: translateX(-100%);
        }
        img {
          width: 100%;
          height: 100%;
        }
        .next {
          position: absolute;
          transform: translateX(100%);
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

      transition: all 0.3s;
      &:hover {
        transform: scale(1.1) !important;
      }
    }
  }
`;
