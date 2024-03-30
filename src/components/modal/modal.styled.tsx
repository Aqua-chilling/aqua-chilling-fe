import styled, { keyframes } from 'styled-components';
const anim = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}

`;
const animDisapear = keyframes`
0%{
    opacity: 1;
}
100%{
    opacity: 0;
}

`;
const animContent = keyframes`
0%{
    transform: scale(0);
}
100%{
    transform: scale(1);
}

`;
const animContentDisapear = keyframes`
0%{
    transform: scale(1);
}
100%{
    transform: scale(0);
}

`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${anim} 0.3s forwards;
  z-index: 999;
  &.disapear {
    animation: ${animDisapear} 0.3s forwards;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  #modal-content {
    animation: ${animContent} 0.3s forwards;
    &.disapear {
      animation: ${animContentDisapear} 0.3s forwards;
    }
    position: relative;
    .close {
      position: absolute;
      z-index: 1;
      top: 16px;
      right: 16px;
    }
  }
`;
