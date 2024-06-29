import styled from 'styled-components';
import bg from '@/assets/game/bg.png';
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  .loading-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 600px;
    background: url(${bg});
    background-size: cover;
    background-position: center center;
    .with-shadow {
      shadow: 0px 2px 16px 0px #000000cc;
    }
    /* HTML: <div class="loader"></div> */
    .loading-spine {
      width: 30px;
      aspect-ratio: 1;
      display: grid;
      border-radius: 50%;
      background: linear-gradient(0deg, rgb(0 0 0/50%) 30%, #0000 0 70%, rgb(0 0 0/100%) 0) 50%/8% 100%,
        linear-gradient(90deg, white 30%, #0000 0 70%, rgb(0 0 0/75%) 0) 50%/100% 8%;
      background-repeat: no-repeat;
      animation: l23 1s infinite steps(12);
    }
    .loading-spine::before,
    .loading-spine::after {
      content: '';
      grid-area: 1/1;
      border-radius: 50%;
      background: inherit;
      transform: rotate(30deg);
    }
    .loading-spine::after {
      opacity: 0.83;
      transform: rotate(60deg);
    }
    @keyframes l23 {
      100% {
        transform: rotate(1turn);
      }
    }
  }
`;
