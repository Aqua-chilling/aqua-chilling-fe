import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: #143464;
  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 40px;
    .logos {
      display: flex;
      gap: 24px;
    }
    span {
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }
  }
`;
