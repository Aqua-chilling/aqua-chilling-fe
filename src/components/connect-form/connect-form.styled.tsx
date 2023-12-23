import { Modal } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled(Modal)`
  .ant-modal-content {
    padding: 16px;
  }
  .form {
    position: relative;
    overflow-y: scroll;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: flex-end;
      .close-button {
        padding: 4px;
        cursor: pointer;
        color: var(--neutral-800, #2c2c2c);
      }
    }
    .title {
      color: #2c2c2c;
      text-align: center;
      font-family: Lora;
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      margin-top: 16px;
    }
    .icon {
      color: white;
    }
    .subtitle {
      width: 100%;
      text-align: start;
      color: var(--neutral-800, #2c2c2c);
    }
    .button-connect {
      display: none !important;
      display: flex;
      padding: 16px !important;
      justify-content: center;
      align-items: center;
      gap: 16px;
      align-self: stretch;
      border-radius: 16px;
      border: 1px solid var(--neutral-300, #dedede);
      color: var(--neutral-800, #2c2c2c);
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px; /* 122.222% */
      text-transform: capitalize;
      line-height: 24px;
      letter-spacing: 0em;
      cursor: pointer;
      margin: 12px 0px;
    }
    .line {
      width: 100%;
      height: 1px;
      background: #dedede;
      margin: 24px 0px;
    }
    .label {
      align-self: stretch;
      color: var(--neutral-600, #6b6b6b);
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 133.333% */
    }
    .connectors {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
      margin: 12px 0px;
      .connector {
        height: 64px;
        display: flex;
        border-radius: 16px;
        gap: 16px;
        border: 1px solid var(--neutral-300, #dedede);
        cursor: pointer;
        align-items: center;
        justify-content: center;
        color: var(--neutral-800, #2c2c2c);
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px; /* 122.222% */
        text-transform: capitalize;
        img {
          width: 40px;
          height: 40px;
        }
        .connect {
        }
        &.active {
          border: 1px solid black;
        }
      }
    }
  }
`;
