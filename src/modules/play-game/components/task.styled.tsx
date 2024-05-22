import styled from 'styled-components';
import RewardBg from '@/assets/airdrop/btn-bg.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  @media screen and (max-width: 768px) {
    gap: 32px;
  }
  .titles {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #fff;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.48px;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      display: flex;
      gap: 6px;
      .point {
        color: #fff;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }
  .table {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .quest-name {
      width: 40%;
      display: flex;
      align-items: start;
      flex-direction: column;
      span {
        color: rgba(255, 255, 255, 0.7);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
    .quest-point {
      width: 15%;
      font-weight: 500;
      white-space: nowrap;

      @media screen and (max-width: 600px) {
        width: 20%;
        text-align: start;
      }
    }
    .quest-status {
      flex: 1;
      display: flex;
      justify-content: end;
      @media screen and (max-width: 600px) {
        width: 50%;
      }
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
        padding: 4px 15px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        img {
          width: 24px;
        }
        &:hover {
          transform: scale(1.01);
        }
      }
      .status-1 {
        font-family: 'Fredoka';
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        text-align: center;
        color: #ffffff;
      }
      .connect-telegram {
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

      @media screen and (max-width: 600px) {
        width: 170%;
      }
    }
    .table-row {
      border-radius: 16px;
      background: #143464;
      display: flex;
      padding: 8px 16px;
      align-items: flex-start;
      gap: 16px;
      align-self: stretch;

      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 21px */
      .reward-card {
        border-radius: 16px;
        position: relative;
        padding: 6px 20px;
        background: url(${RewardBg});
        background-size: 100% 100%;
      }
      /* @media screen and (max-width: 600px) {
        flex-wrap: wrap;
        min-height: unset;
      } */
    }
  }
`;
