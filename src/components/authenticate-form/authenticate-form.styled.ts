import { Modal } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled(Modal)`
  .ant-modal-content {
    padding: 16px;
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
  .message {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    border-radius: 24px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%), #bd3d44;
    margin-top: 24px;
    .message-detail {
      color: #bd3d44;
      text-align: center;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
    }
  }
  .actions {
    display: flex;
    flex-direction: row;
    margin-top: 24px;
  }
`;

export const ButtonConfirm = styled.div`
  flex: 2;
`;

export const ButtonCancel = styled.div`
  flex: 1;
`;
