import styled, { keyframes } from 'styled-components';
const animNotify = keyframes`
0%{
    transform: scale(0);
}
100%{
    transform: scale(1);
}

`;
const animNotifyDisapear = keyframes`
0%{
    transform: scale(1);
}
100%{
    transform: scale(0);
}

`;

export const Wrapper = styled.div`
  display: inline-flex;
  padding: 12px 52px 12px 12px;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid transparent;
  background: #253a5c;
  animation: ${animNotify} 0.3s forwards;
  &.disapear {
    animation: ${animNotifyDisapear} 0.3s forwards;
  }
  &.success {
    border: 1px solid #3bff37;
  }
  &.error {
    border: 1px solid #e33c47;
  }
  .message {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
