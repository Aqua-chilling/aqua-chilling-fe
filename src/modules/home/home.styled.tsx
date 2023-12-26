import styled from 'styled-components';
import bg from '@/assets/home/section1/bg.png';
export const Wrapper = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column;
  position: relative; */
  .section3-wrapper {
    width: 100%;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    background-color: #143464;
    padding: 80px 0px;
    gap: 80px;
    /* position: relative; */
    .fishs {
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      padding: 66px 0px;
      background-image: url(${bg});
      background-size: 100% 100%;
      margin-bottom: 99px;
      gap: 27px;
      .row {
        display: flex;
        align-items: center;
        gap: 100px;
        &.above {
        }
        img {
          width: 144px;
          height: 66px;
        }
      }
    }
    .section3 {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      gap: 80px;
      .features {
        display: flex;
        align-items: center;
        gap: 80px;
        .feature {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 420px;
          height: 240px;

          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          font-family: Quicksand;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.48px;
        }
      }
    }
  }
  /* .home {
    .section1-wrapper {
      background-image: url(${bg});
      background-position: 100% 100%;
      width: 100%;
      min-height: 960px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .section1 {
        margin-top: 165px;
        display: flex;
        align-items: center;
        flex-direction: column;
        .logo {
          max-width: 706px;
          max-height: 412px;
          position: relative;
        }
        .btns {
          display: flex;
          gap: 16px;
          align-items: center;
        }
      }
    }
    .section2-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #422433;
      position: relative;
      .section2 {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 16px;
        &-txt {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 50%;
          gap: 16px;
          margin-bottom: 50px;
        }
        .cards {
          display: flex;
          gap: 24px;
          margin-top: 12px;
          .card2 {
            transform: translateY(-48px);
          }
        }
        .grass {
          width: 100%;
          position: relative;
          .grass-img {
            width: 100%;
            position: relative;
            z-index: 2;
          }
          .pyramid {
            position: absolute;
            left: 2%;
            top: -70%;
            max-width: 373px;
            z-index: 1;
          }
          .shrine {
            position: absolute;
            right: 2%;
            top: -90%;
            max-width: 373px;
            z-index: 1;
          }
        }
      }
    }
  } */
`;
