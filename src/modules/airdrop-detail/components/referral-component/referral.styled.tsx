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
  .line {
    width: 100%;
    height: 1px;
    flex-shrink: 0;
    margin: 16px 0px;
  }
  span {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.32px;
  }
  .value {
    display: flex;
    gap: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    .ic {
      transition: all 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .referral-wrapper {
    width: 100%;
    display: flex;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      gap: 24px;
    }

    .referral-link {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: start;
      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
    .referral-code {
      gap: 8px;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }
  .ranking-wrapper {
    width: 100%;
    display: flex;
    .ranking {
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: start;
    }
    .total-ref {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: start;
    }
  }
  .table {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .rank {
      width: 15%;
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
      padding: 8px 0px;
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
      padding: 8px 0px;
      transition: all 0.3s;
      @media screen and (max-width: 600px) {
        width: 130%;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.7);
        transform: translateY(-4px);
        box-shadow: rgba(29, 218, 228, 0.35) 0px 5px 15px;
      }
    }
  }
`;
