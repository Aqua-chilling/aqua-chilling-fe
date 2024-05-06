import styled from 'styled-components';
import bg from '@/assets/home/section1/bg.png';
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
  transition: all 0.3s;
  visibility: visible;
  opacity: 1;
  background: #143464;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  .loading-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    .lf-player-container {
      position: relative;
      @media screen and (max-width: 768px) {
        width: 328px;
        height: 262.4px;
      }
      #lottie {
        @media screen and (max-width: 768px) {
          width: 120px !important;
          height: 120px !important;
        }
      }
      .bubbles-token {
        width: 100%;
        height: 100%;
        .bubbles {
          width: 100%;
          height: 100%;
        }
        position: absolute;
        bottom: -10%;
      }
    }
  }
`;
