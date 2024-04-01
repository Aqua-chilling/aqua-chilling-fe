import styled from 'styled-components';
import bg from '@/assets/eanring/earning-bg.png';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .earning-content {
    width: 80%;
    height: 80%;
    position: relative;
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .close {
      position: absolute;
      z-index: 1;
      top: 16px;
      right: 16px;
    }
    .content-wrapper {
      width: 80%;
      display: flex;
      flex-direction: column;
      top: 64px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      border-radius: 24px;
      border: 6px solid #090910;
      background: #0c2449;
      .top-bar {
        border-top-right-radius: 24px;
        border-top-left-radius: 24px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 24px;
        background: #061225;
        z-index: 3;
        @media screen and (max-width: 1024px) {
          padding: 12px 6px;
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
      }
      .body {
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 142.857% */
        letter-spacing: -0.056px;
        display: flex;
        padding: 24px;
        gap: 24px;
        .left {
          width: 60%;
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
                    .wallet-address {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      width: 100%;

                      .address {
                        color: #fff;
                        font-size: 32px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        display: flex;
                        flex-direction: column;
                        align-items: start;
                        gap: 8px;
                        span {
                          color: rgba(255, 255, 255, 0.7);
                          font-size: 14px;
                          font-style: normal;
                          font-weight: 500;
                          line-height: normal;
                          display: flex;
                          gap: 8px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .right {
          flex: 1;
          border-radius: 8px;
          border: 1px solid #143464;
          background: #0a1d3a;
        }
      }
    }
  }
`;
