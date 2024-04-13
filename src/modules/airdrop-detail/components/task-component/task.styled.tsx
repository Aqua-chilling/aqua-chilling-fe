import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
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
      flex: 1;
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
    }
    .quest-point {
      width: 15%;
      @media screen and (max-width: 600px) {
        width: 20%;
        text-align: start;
      }
    }
    .quest-status {
      width: 20%;
      display: flex;
      justify-content: end;
      @media screen and (max-width: 600px) {
        width: 30%;
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
        &:hover {
          transform: scale(1.01);
        }
      }
      .status-1 {
        color: #37ff7b;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      .connect-telegram {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 500;
        line-height: 20px;
        border-radius: 17px;
        background-color: #54a9eb;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 7px 16px 6px;
        margin: 0;
        border: none;
        color: #fff;
        cursor: pointer;
        gap: 8px;
        width: 100%;
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
      background: #0a1d3a;
      display: flex;
      padding: 8px 16px;
      align-items: center;
      gap: 16px;
      align-self: stretch;
      min-height: 56px;

      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 21px */
      @media screen and (max-width: 600px) {
        width: 170%;
      }
    }
  }
`;
