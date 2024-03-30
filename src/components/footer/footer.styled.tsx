import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: #143464;
  position: relative;
  top: -40px;
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
      img {
        &:hover {
          transform: scale(1.2);
          transition: all 0.3s;
        }
      }
    }
    .navs {
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      span {
        transition: all 0.3s;
        &:hover {
          color: white;
        }
      }
    }
  }
`;
