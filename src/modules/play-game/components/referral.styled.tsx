import styled from 'styled-components';
import infoBg from '@/assets/airdrop/info-bg.png';
import buttonBg from '@/assets/airdrop/button-bg.png';
import rank1 from '@/assets/game/rank-1.png';
import rank2 from '@/assets/game/rank-2.png';
import rank3 from '@/assets/game/rank-3.png';
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  @media screen and (max-width: 3000px) {
    flex-direction: column;
  }
  .title {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.48px;
  }
  .subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .leaderboard-info {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    position: relative;
    @media screen and (max-width: 3000px) {
      width: 100%;
      height: fit-content;
    }
    .graphic-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding-top: 40px;
      @media screen and (max-width: 3000px) {
        width: 100%;
      }
    }
    .graphic {
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: 0;
      img {
        width: 100%;
      }
    }
    .info-button {
      width: 180px;
      height: 64px;
      text-align: center;
      background: url(${buttonBg});
      background-size: 100% 100%;

      font-family: 'Fredoka';
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.02em;
      text-align: center;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.01);
        opacity: 0.9;
      }
    }
    .info-wrapper {
      background: url(${infoBg});
      background-size: 100% 100%;
      border-radius: 16px;
      overflow: hidden;
      padding: 16px;
      width: 90%;
      max-width: 300px;
      .info-border {
        width: 100%;
        height: 1px;
        background: #265389;
        margin: 12px 0px;
      }

      .info-card {
        display: flex;
        align-items: center;
        gap: 8px;
        > img {
          width: 40px;
        }
        .info-invite {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          > span {
            font-family: 'Fredoka';
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            text-align: left;
            color: #ffffff;
          }
          > div {
            display: flex;
            align-items: center;
            gap: 4px;
            img {
              width: 20px;
            }
            span {
              font-family: 'Fredoka';
              font-size: 14px;
              font-weight: 500;
              line-height: 20px;
              letter-spacing: -0.02em;
              text-align: left;
              color: #ffffff;
            }
          }
        }
      }
    }
    .info-title {
      font-family: 'Fredoka';
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: -0.02em;
      text-align: center;
      color: #ffffff;
      @media screen and (max-width: 3000px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  .table {
    width: 40%;
    background: #143464;
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 100%;
    flex: 1;
    overflow: scroll;
    border-radius: 12px;
    @media screen and (max-width: 3000px) {
      width: 100%;
      height: fit-content;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    .no-data {
      color: #ffffff;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .rank {
      width: 15%;
      display: flex;
      align-items: start;
      flex-direction: column;
      justify-content: center;
      > div {
        color: #ffffff;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &.rank-1 {
        > div {
          background: url(${rank1});
          background-size: cover;
          background-position: center center;
        }
      }
      &.rank-2 {
        > div {
          background: url(${rank2});
          background-size: cover;
          background-position: center center;
        }
      }
      &.rank-3 {
        > div {
          background: url(${rank3});
          background-size: cover;
          background-position: center center;
        }
      }
    }
    .table-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      .info-point {
        display: flex;
        gap: 4px;
        align-items: center;
      }
    }
    .address {
      flex: 1;
      text-align: start;
    }
    .point,
    .total-point {
      width: 20%;
      display: flex;
      justify-content: end;
      .status-0 {
        color: #fff;
        font-weight: 700;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        border: 4px solid #71b6a9;
        background: #588d99;
        padding: 0px 15px;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .table-head {
      display: flex;
      width: 100%;
      color: rgba(255, 255, 255, 0.7);
      text-align: right;
      font-size: 14px;
      font-weight: 500;
      gap: 12px;
      padding: 8px;
      border-bottom: 1px solid #556680;
      @media screen and (max-width: 600px) {
        width: 130%;
      }
    }
    .table-row {
      gap: 12px;
      display: flex;
      color: #fff;
      text-align: right;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      padding: 8px;
      transition: all 0.3s;
      border-radius: 4px;
      @media screen and (max-width: 600px) {
        width: 130%;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.121);
        transform: translateY(-4px);
        box-shadow: rgba(29, 218, 228, 0.35) 0px 5px 15px;
      }
    }
  }
`;
