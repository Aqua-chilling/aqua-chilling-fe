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
  background: #0c2449;
  @media screen and (max-width: 1024px) {
    background-size: cover;
  }
  @media screen and (max-width: 600px) {
    min-height: 1200px;
  }
  .marketplace {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
    width: 100%;
    .marketplace-content {
      flex: 1;
      margin-top: 86px;
      margin-left: 220px;
      max-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      .search-wrapper {
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        padding: 9px 12px;
        justify-content: space-between;
        width: 300px;
        transition: all 0.3s;
        margin-left: 24px;
        margin-top: 16px;
        input {
          outline-style: none;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          flex: 1;
          background: transparent;
        }
      }
      .fish-list {
        flex: 1;
        overflow-y: scroll;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 24px;
        width: 100%;
        overflow: scroll;
        padding: 24px;
        &::-webkit-scrollbar {
          display: none;
        }
        .fish {
          display: flex;
          flex-direction: column;
          width: 148px;
          gap: 6px;
          padding: 12px;
          border-radius: 8px;
          transition: all 0.3s;
          &:hover {
            box-shadow: rgba(114, 114, 248, 1) 0px 7px 29px 0px;
            background-color: transparent;
          }
          .top {
            background-image: url(${frame});
            background-size: 100% 100%;
            width: 100%;
            img {
              width: 100%;
            }
          }
          .bottom {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
            .rarity {
              font-size: 12px;
            }
            .name {
              font-size: 14px;
            }
            .xp {
              color: rgba(255, 255, 255, 0.7);
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
            .price {
              width: 100%;
              padding: 4px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-image: url(${fishPriceBG});
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
          }
        }
      }
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
      .title {
        color: #fff;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.96px;
      }
      .tabs {
        display: flex;
        width: 208px;
        padding: 4px;
        justify-content: center;
        align-items: flex-start;
        flex-shrink: 0;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.1);
        .tab {
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
        border-radius: 12px;
        border: 4px solid #71b6a9;
        background: #588d99;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 32px;
      }
    }
    .left-bar {
      position: fixed;
      top: 86px;
      left: 6px;
      padding: 16px 24px;
      background: #0c2449;
      min-width: 220px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 80vh;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .line {
        background: #556680;
        width: 100%;
        margin: 16px 0px;
        height: 1px;
      }
      .rarities {
        width: 100%;
        color: #fff;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 21px */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;

        .rarity {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          span {
            &.rare {
              color: #20d6c7;
            }
            &.epic {
              color: #fee250;
            }
            &.legendary {
              color: #e33c47;
            }
          }
        }
      }
      .colors-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        gap: 8px;
        span {
          font-size: 14px;
        }

        .colors {
          gap: 8px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          .color {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .sort-by-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        gap: 8px;
        span {
          font-size: 14px;
          font-weight: 700;
        }
        .sort-by {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          .dropdown-wrapper {
            position: relative;
            width: 100%;
            &:hover {
              .dropdown-content {
                display: flex;
              }
            }
            .dropdown-header {
              font-weight: 500;
              width: 100%;
              align-items: center;
              justify-content: space-between;
              display: flex;
              span {
                font-weight: 400;
              }
            }
            .dropdown-content {
              display: flex;
              gap: 4px;
              align-items: center;
              justify-content: center;
              position: absolute;
              flex-direction: column;
              top: -100px;
              left: 0;
              display: none;
              height: 100px;
              border-radius: 12px;
              border: 3px solid #090910;
              background: #0c2449;
              width: 100%;
              padding: 4px;
              font-weight: 400;
              font-size: 12px;
              animation: ${animDropdown} 0.3s forwards;
              transform-origin: bottom center;
              .option {
                padding: 4px 6px;
                display: flex;
                border-radius: 8px;
                justify-content: space-between;
                width: 100%;
                &:hover {
                  background-color: rgba(255, 255, 255, 0.1);
                }
              }
            }
          }
        }
      }
    }
  }
`;
