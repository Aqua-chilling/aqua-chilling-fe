import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #422433;
  position: relative;
  padding: 80px 0px;
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
      .card {
        position: relative;
      }
      .card2 {
        transform: translateY(-48px);
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
      top: -60%;
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
`;
