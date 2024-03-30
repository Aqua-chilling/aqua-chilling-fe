import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 6px solid #090910;
  @media screen and (max-width: 1024px) {
    background-size: cover;
  }
  @media screen and (max-width: 600px) {
    min-height: 1200px;
  }
  .land {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  h1 {
    transform: translateY(-120px);
    position: relative;
    color: #fff;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.48px;
    text-align: center;
    max-width: 40%;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;
