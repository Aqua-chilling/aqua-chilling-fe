import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 8px;
  border: 1px solid #143464;
  background: #0a1d3a;
  padding: 16px;
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
  .nft {
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
    border-radius: 20px;
    background: #143464;
    max-height: 200px;
    @media screen and (max-width: 680px) {
      flex-direction: column;
      .upgrade-btn-below {
        display: none !important;
      }
    }
    .left {
      height: 100%;
      img {
        max-height: 180px;

        @media screen and (max-width: 500px) {
          max-width: 80px;
        }
      }
      @media screen and (max-width: 680px) {
        width: 100%;
        justify-content: space-between;
        gap: 32px;
        .upgrade-btn {
          display: flex !important;
          margin-top: 16px;
        }
      }
      @media screen and (max-width: 500px) {
        align-items: start;
        gap: 12px;
      }
      color: rgba(255, 255, 255, 0.7);
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 12px;
      span {
        color: #fff;
        font-size: 24px;
        font-weight: 700;
      }
    }
  }
  p {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    margin: 0 auto;
    @media screen and (max-width: 600px) {
      display: none;
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
      gap: 12px;
      display: flex;
      color: #fff;
      text-align: right;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      @media screen and (max-width: 600px) {
        width: 170%;
      }
    }
  }
`;
