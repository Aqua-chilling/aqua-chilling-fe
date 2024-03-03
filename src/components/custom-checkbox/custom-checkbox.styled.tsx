import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  .checkbox {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    &:hover {
      box-shadow: rgba(114, 114, 248, 1) 0px 7px 29px 0px;
      background-color: transparent;
    }
    svg {
      path {
        &.red {
          fill: #e33c47;
          fill-opacity: 1;
        }
        &.orange {
          fill: #ff6a17;
          fill-opacity: 1;
        }
        &.yellow {
          fill: #fee250;
          fill-opacity: 1;
        }
        &.green {
          fill: #3ce342;
          fill-opacity: 1;
        }
        &.grey {
          fill: #20d6c7;
          fill-opacity: 1;
        }
        &.purple {
          fill: #2420d6;
          fill-opacity: 1;
        }
        &.blue {
          fill: #853ce3;
          fill-opacity: 1;
        }
        &.black {
          fill: #441e08;
          fill-opacity: 1;
        }
        &.white {
          fill: #ffffff;
          fill-opacity: 1;
        }
      }
    }
    .checked {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
