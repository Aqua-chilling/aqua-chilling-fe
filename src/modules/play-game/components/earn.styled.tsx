import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 16px;
  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
    padding: 24px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
  .leaderboard-wrapper {
    border: 1px solid #143464;
    background: #0a1d3a;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .leaderboard-value {
      font-family: 'Quicksand';
      font-size: 14px;
      font-weight: 700;
      line-height: 21px;
      text-align: left;
      color: #ffffff;
    }
    .leaderboard-label {
      font-family: 'Quicksand';
      font-size: 14px;
      font-weight: 500;
      line-height: 17.5px;
      text-align: right;
      color: #ffffffb2;
    }
    .text-left {
      text-align: start;
    }
    .text-right {
      text-align: end;
    }
    .leaderboard-top {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 16px;
      padding-bottom: 0px;
      .leaderboard-filter {
        display: flex;
        align-items: center;
        width: 44%;
        justify-content: space-between;
        background: #ffffff1a;
        padding: 3px 12px;
        border-radius: 12px;
        span {
          font-family: 'Quicksand';
          font-size: 14px;
          font-weight: 500;
          line-height: 17.5px;
          text-align: left;
          color: #ffffff80;
        }

        img {
          width: 24px;
        }
      }
    }
    .leaderboard-talbe {
      padding: 16px;
      padding-top: 0px;
      .table-row {
        width: 100%;
        display: grid;
        grid-template-columns: 3fr 1fr 2fr;
        margin-top: 16px;
      }
    }
    /* .table-data {
      max-height: calc(100% - 200px);
      overflow: auto;
    } */
    .table-border {
      width: 100%;
      height: 1px;
      background: #556680;
      margin-top: 8px;
      margin-bottom: 21px;
    }
  }
  .earn-wrapper {
    border-radius: 6px;
    outline: solid 4px #090910;
    border: solid 6px #285cc4;
    overflow: hidden;
    height: fit-content;
    > div {
      height: 100%;
      border-radius: 6px;
      border: solid 2px #143464;
      overflow: hidden;
      width: 100%;
      padding: 12px;
      background: #249fde;
    }
    .earn {
      height: 100%;
      border: 4px solid #090910;
      background: #143464;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .earn-border {
        width: 100%;
        height: 1px;
        background: #ffffff1a;
        margin: 8px 0px;
      }

      .earn-top {
        display: flex;
        width: 100%;
        padding: 18px;
        gap: 16px;
        justify-content: flex-start;
        align-items: center;
        .img-placeholder {
          width: 38px;
          height: 40px;
        }
        .btn-earn {
          background: #588d99;
          border: 4px solid #71b6a9;
          border-radius: 12px;
          font-family: 'Quicksand';
          font-size: 16px;
          font-weight: 700;
          line-height: 20px;
          letter-spacing: -0.02em;
          text-align: center;
          color: #ffffff;
          padding: 4px 25px;
        }
        img {
          width: 38px;
          height: auto;
        }
        .earn-top-label {
          font-family: 'Quicksand';
          font-size: 14px;
          font-weight: 500;
          line-height: 17.5px;
          text-align: left;
          color: #ffffffb2;
        }
        .earn-top-value {
          font-family: 'Quicksand';
          font-size: 24px;
          font-weight: 700;
          line-height: 30px;
          letter-spacing: -0.02em;
          text-align: left;
          color: #ffffff;
        }
        @media screen and (max-width: 1050px) {
          flex-direction: column;
          gap: 20px;
          .wallet-top-left {
            max-width: 100%;
            width: fit-content;
          }
          .wallet-label {
            font-size: 24px;
            line-height: 36px;
          }
        }
      }
    }
  }
`;
