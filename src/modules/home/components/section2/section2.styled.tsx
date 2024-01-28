import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #422433;
  position: relative;
  top: -10px;
  padding-bottom: 80px;
  .sand {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
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
      position: relative;
      transform: translateY(-10%);
      @media screen and (max-width: 500px) {
        gap: 6px;
      }
      transition: all 0.3s;
      &:hover {
        transform: scale(1.1) !important;
      }

      .card {
        position: relative;
        @media screen and (max-width: 1240px) {
          width: 300px;
          height: 234px;
        }
        @media screen and (max-width: 500px) {
          width: 200px;
          height: 134px;
        }
      }
      .card1 {
        @media screen and (max-width: 500px) {
          transform: rotate(-10deg);
        }
      }
      .card2 {
        transform: translateY(-48px);
        @media screen and (max-width: 500px) {
          transform: none;
        }
      }
      .card3 {
        @media screen and (max-width: 500px) {
          transform: rotate(7deg);
        }
      }
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
      top: -30%;
      max-width: 373px;
      z-index: 1;
      @media screen and (max-width: 960px) {
        width: 200px;
        top: -50%;
      }
      @media screen and (max-width: 500px) {
        width: 124.442px;
        height: 95.357px;
        top: -70%;
      }
    }
    .shrine {
      position: absolute;
      right: 2%;
      top: -50%;
      max-width: 373px;
      z-index: 1;
      @media screen and (max-width: 960px) {
        width: 200px;
        top: -80%;
      }
      @media screen and (max-width: 500px) {
        width: 105.619px;
        height: 106.009px;
        top: -90%;
      }
    }
  }
`;
