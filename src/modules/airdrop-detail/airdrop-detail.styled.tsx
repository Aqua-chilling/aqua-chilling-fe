import styled, { keyframes } from 'styled-components';
import frame from '@/assets/home/section4/frame.png';
import fishPriceBG from '@/assets/marketplace/fish-price-bg.svg';
export const animDropdown = keyframes`
0%{

  transform: scale(1,0);
}
  
100%{
  transform: scale(1);
}

`;
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 24px;
  border: 6px solid #090910;
  @media screen and (max-width: 1024px) {
    background-size: cover;
    height: unset;
    position: relative;
  }
  @media screen and (max-width: 600px) {
  }
  .land {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    background: #061225;
    z-index: 3;
    @media screen and (max-width: 1024px) {
      padding: 12px 6px;
    }
    .title {
      width: 160px;
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
    .tabs {
      display: flex;
      padding: 4px;
      justify-content: center;
      align-items: flex-start;
      flex-shrink: 0;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.1);
      gap: 8px;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
      .tab {
        width: 136px;
        color: #fff;
        text-align: center;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.32px;
        transition: all 0.3s;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px solid transparent;
        border-radius: 12px;
        &.active {
          border: 4px solid #71b6a9;
          background: #588d99;
        }
        &:hover {
          border: 4px solid #71b6a9;
          background: #588d99;
        }
      }
    }
    .btn-sell {
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
  }
  .airdrop-detail-content-container {
    padding: 24px;
    display: flex;
    gap: 24px;
    margin-top: 104px;
    width: 100%;
    position: relative;
    z-index: 2;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      margin-top: 50px;
      padding: 12px;
    }
    .left-bar {
      background: #0c2449;
      width: 360px;
      height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow-y: auto;
      border-radius: 6px;
      @media screen and (max-width: 1024px) {
        width: 100%;
        height: unset;
      }

      &::-webkit-scrollbar {
        display: none;
      }
      .line {
        background: #556680;
        width: 100%;
        margin: 16px 0px;
        height: 1px;
      }
      .outer-1 {
        border-radius: 6px;
        background: #090910;
        padding: 6px;
        height: 100%;
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
                .coin {
                  position: absolute;
                  right: 0;
                  bottom: 0;
                }
                .your-nft {
                  width: 100%;
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  gap: 16px;
                  margin-bottom: 40px;
                  span {
                    color: #fff;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    letter-spacing: -0.48px;
                  }
                  img {
                    width: 128px;
                    border-radius: 12px;
                    border: 6.44px solid #090910;
                  }
                  .btn-upgrade {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 700;
                    width: 137px;
                    height: 40px;
                    border-radius: 12px;
                    border: 4px solid #71b6a9;
                    background: #588d99;
                  }
                }
                .available-points {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: start;
                  color: rgba(255, 255, 255, 0.7);
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  gap: 16px;
                  .value {
                    color: #fff;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    letter-spacing: -0.48px;
                  }
                  margin-bottom: 8px;
                }
                .referral-links {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: start;
                  color: rgba(255, 255, 255, 0.7);
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  gap: 8px;
                  color: #fff;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: normal;
                  letter-spacing: -0.32px;
                  span {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    margin-bottom: 8px;
                  }
                  .btn-copy-link {
                    color: #f2de29;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    letter-spacing: -0.32px;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
    }
    .airdrop-detail-content {
      &.task {
        flex: 1;
      }
      max-height: 80vh;
      overflow: scroll;
      min-width: 70%;
      @media screen and (max-width: 1024px) {
        max-height: unset;
      }

      &::-webkit-scrollbar {
        display: none;
      }
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      border-radius: 8px;
      border: 1px solid #143464;
      background: #0a1d3a;
      padding: 16px;
      @media screen and (max-width: 500px) {
        padding: 0;
      }
    }
  }
`;
