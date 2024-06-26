import styled from 'styled-components';
export const Title = styled.div`
  color: #fff;
  font-family: Quicksand;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
export const Description = styled.div`
  color: #f1c8dd;
  text-align: center;
  /* R16 */
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
