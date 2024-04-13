import styled, { keyframes } from 'styled-components';
export const animDropdown = keyframes`
0%{

  transform: scale(1,0);
}
  
100%{
  transform: scale(1);
}

`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  height: 80vh;
  border-radius: 22.5px;
  border: 6px solid #090910;
  background: #0c2449;
  padding: 40px 24px;
  gap: 40px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    background-size: cover;
    height: unset;
    position: relative;
  }
  @media screen and (max-width: 600px) {
  }
  .land {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  .left-bar {
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 3;
    @media screen and (max-width: 768px) {
      padding: 12px 6px;
    }
    .tabs {
      display: flex;
      flex-direction: column;
      padding: 4px;
      align-items: flex-start;
      border-radius: 12px;
      gap: 8px;
      width: 100%;
      @media screen and (max-width: 768px) {
        gap: 2px;
        flex: 1;
      }
      .tab {
        width: 100%;
        color: #fff;
        text-align: center;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -0.32px;
        transition: all 0.3s;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: start;
        border-radius: 12px;
        padding: 8px;
        &.active {
          background: #061225;
        }
        &:hover {
          background: #061225;
        }
        @media screen and (max-width: 768px) {
          width: fit-content;
          padding: 4px 8px;
        }
      }
    }
  }
  .airdrop-detail-content-container {
    padding: 24px;
    display: flex;
    gap: 24px;
    flex: 1;
    height: 100%;
    position: relative;
    z-index: 2;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      margin-top: 50px;
      padding: 12px;
    }
    .airdrop-detail-content {
      width: 100%;
      &::-webkit-scrollbar {
        display: none;
      }
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      @media screen and (max-width: 500px) {
        padding: 0;
      }
    }
  }

  .outer-1 {
    border-radius: 6px;
    background: #090910;
    padding: 6px;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    .outer-2 {
      height: 100%;
      border-radius: 6px;
      background: #285cc4;
      padding: 6px;
      .outer-3 {
        height: 100%;
        border-radius: 4px;
        background: #143464;
        padding: 4px;
        .outer-4 {
          height: 100%;
          padding: 12px;
          border-radius: 4px;
          background: #249fde;
          .outer-5 {
            height: 100%;
            border-radius: 8px;
            border: 4px solid #090910;
            background: #143464;
            padding: 16px;
            display: flex;
            flex-direction: column;
            position: relative;
            &.signout {
              background-color: black;
              align-items: center;
              gap: 12px;
              color: rgba(255, 255, 255, 0.7);
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              letter-spacing: -0.32px;
              .value {
                display: flex;
                align-items: center;
                gap: 8px;
                img {
                  width: 24px;
                  height: 24px;
                }
              }
              span {
                color: #fff;
                font-size: 32px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: -0.64px;
              }
            }
          }
        }
      }
    }
  }
`;
