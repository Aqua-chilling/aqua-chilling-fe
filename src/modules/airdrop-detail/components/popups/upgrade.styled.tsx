import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  max-width: 80vw;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  .points {
    width: 400px;
    border-radius: 16px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: 8px solid #090910;
    background: #131b26;
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    span {
      color: #fff;
      font-weight: 700;
      font-size: 20px;
    }
    @media screen and (max-width: 768px) {
      padding: 12px;
    }
  }
  .btn {
    &.disabled {
      opacity: 0.4;
    }
  }
  .imgs {
    display: flex;
    gap: 24px;
    overflow-x: scroll;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
    .trivent {
      width: 300px;
      position: relative;
      @media screen and (max-width: 768px) {
        width: 200px;
      }

      img {
        width: 100%;
      }
      .mask {
        background: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        display: none;
      }
      &.disabled {
        .mask {
          display: flex;
        }
      }
    }
  }
  .custom-close {
    position: absolute;
    right: -10%;
    top: -10%;
  }
`;
