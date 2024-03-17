import styled, { keyframes } from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #131b26;
  position: relative;
  gap: 24px;
  border-radius: 16px;
  min-width: 360px;

  @media screen and (max-width: 900px) {
    max-height: 90vh;
    overflow-y: scroll;
  }
  @media screen and (max-width: 600px) {
    max-width: 90vw;
  }
  @media screen and (max-width: 400px) {
  }

  .login-content {
    display: flex;
    width: 100%;
    gap: 24px;
    border-radius: 16px;
    border: 8px solid #090910;
    background: #131b26;
    .title {
      margin: 0 auto;
      color: #fff;
      text-align: center;
      font-size: 32px;
      font-weight: 700;
      width: 100%;
      @media screen and (max-width: 600px) {
        font-size: 22px;
      }
    }

    .steps {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 24px 12px;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      .forgot {
        color: #f2de29;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: 100%;
        display: flex;
        justify-content: end;
        transition: all 0.3s;
        &:hover {
          text-decoration: underline;
        }
      }
      .divider {
        width: 100%;
        display: flex;
        align-items: center;
        .line {
          width: 40%;
          height: 1px;
          background: #556680;
        }
        span {
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          flex: 1;
        }
      }
      .step {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        &.completed {
          color: #37ff7b;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        &.nd {
          .btns {
            .btn {
              background: #4a57b5;
            }
          }
        }
        .label {
          color: #fff;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        .btns {
          padding: 8px 0px 0px 0px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          position: relative;
          @media screen and (max-width: 1140px) {
            flex-direction: column;
          }
          .show-hide {
            fill: white;
            position: absolute;
            top: 55%;
            transform: translateY(-50%);
            right: 12px;
            img {
              width: 20px;
            }
          }

          .btn {
            @media screen and (max-width: 1140px) {
              width: 100%;
            }
            color: #fff;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
            border-radius: 12px;
            padding: 8px 0px;
            background: #0a80b8;
            border: 3px solid #090910;
            &.google {
              border-radius: 12px;
              background: #fff;
              span {
                color: #090910;
              }
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              &:hover {
                color: #000000;
                background: #faf5ec;
                border: 3px solid #ad9696;
              }
            }
            img {
              width: 24px;
              height: 24px;
            }
            transition: all 0.3s;
            &:hover {
              background: #78b8fc;
              border: 3px solid #0a80b8;
            }
          }
          input {
            width: 100%;
            flex: 1;
            border-radius: 12px;
            padding: 9px 12px;
            margin-bottom: 8px;
            background: rgba(255, 255, 255, 0.1);
            outline: none;
            border: none;

            &::-moz-placeholder {
              color: rgba(255, 255, 255, 0.5);
            }
            color: white;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            &::-webkit-input-placeholder {
            }
          }
        }
        span {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }
    }
  }
`;
