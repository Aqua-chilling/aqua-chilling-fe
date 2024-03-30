import styled from 'styled-components';
import frame from '@/assets/home/section4/frame.png';
import fishPriceBG from '@/assets/marketplace/fish-price-bg.svg';

export const Wrapper = styled.div`
  width: 60vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 8px solid #090910;
  background: rgba(18, 27, 39, 0.9);
  padding: 16px;
  gap: 16px;
  position: relative;
  .close {
    position: absolute;
    z-index: 1;
    top: 16px;
    right: 16px;
  }
  .nft-info {
    display: flex;
    gap: 16px;
    .left {
      background-image: url(${frame});
      background-size: 100% 100%;
      width: 100%;
      max-width: 128px;
      img {
        width: 100%;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      .rarity {
        color: #fee250;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      .name {
        color: #fff;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 21px */
      }
      .line {
        width: 160px;
        height: 1px;
        flex-shrink: 0;
        background: #556680;
      }
      .exp {
        color: rgba(255, 255, 255, 0.7);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .price {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        .per-day {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        .value {
          display: flex;
          align-items: center;
          gap: 4px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          .val {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2px 32px;
            color: #fff;
            text-align: center;
            font-family: Quicksand;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%; /* 21px */
            background-image: url(${fishPriceBG});
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
  .nft-trade-history {
    width: 100%;
    .table {
      width: 100%;
      display: flex;
      flex-direction: column;
      .table-head {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 0px;
        border-top: 1px solid #556680;
        border-bottom: 1px solid #556680;
        color: rgba(255, 255, 255, 0.7);
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        .event {
          width: 30%;
        }
        .price {
          width: 10%;
        }
        .from {
          width: 20%;
        }
        .to {
          width: 20%;
        }
        .time {
          width: 20%;
          text-align: right;
        }
      }
      .table-row {
        color: #fff;
        padding: 16px 0px;
        text-align: left;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 21px */
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 0.3s;
        &:hover {
          background-color: #71b6a9;
        }
        .event {
          width: 30%;
        }
        .price {
          width: 10%;
        }
        .from {
          width: 20%;
        }
        .to {
          width: 20%;
        }
        .time {
          text-align: right;
          width: 20%;
        }
      }
    }
  }
  .line {
    background: #556680;
    width: 100%;
    height: 1px;
  }
  .nft-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: column;
      gap: 4px;
      span {
        color: rgba(255, 255, 255, 0.5);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      div {
        color: #fff;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 21px */
      }
    }
    .right {
      .btn-purchase {
        border-radius: 12px;
        border: 4px solid #71b6a9;
        background: #588d99;
        width: 80px;
        height: 28px;
        flex-shrink: 0;
        color: #fff;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.32px;
        &:hover {
          transition: all 0.3s;
          transform: scale(1.03);
        }
      }
    }
  }
`;
