import styled from 'styled-components';
import bg from '@/assets/home/section1/bg.png';
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100vw;
  background-color: #422433;
  flex-direction: column;
  .header-text {
    font-size: 22px;
    font-weight: 600;
    color: white;
  }
  .highlight-text {
    font-size: 18px;
    font-weight: 700;
    color: white;
    opacity: 0.9;
  }
  ul {
    list-style-type: circle;
    list-style-position: inside;
  }
  .new-line {
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
  }

  .bubble {
    position: absolute;
    z-index: 1;
    right: 10%;
    top: 1%;
    &.left {
      left: 10%;
      top: 1%;
    }
  }
  .sand {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .terms-of-service {
    width: 80%;
    color: #f1c8dd;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    border-radius: 12px;
    position: relative;
    z-index: 2;
    padding: 12px;
    &::-webkit-scrollbar {
      display: none;
    }
    @media screen and (max-width: 768px) {
      width: 98%;
      font-size: 14px;
    }
    .important {
      color: red;
    }
    .upper {
      text-transform: capitalize;
    }
  }
`;
