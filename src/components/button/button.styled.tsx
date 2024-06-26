import styled from 'styled-components';

export const PrimaryButton = ({ children, w }: { children: any; w?: number }) => {
  return (
    <PrimaryBtn w={w}>
      <div className='layer1'>
        <div className='layer2'>
          <div className='layer3'>{children}</div>
        </div>
      </div>
    </PrimaryBtn>
  );
};
export const SecondaryButton = ({ children, w }: { children: any; w?: number }) => {
  return (
    <SecondButton w={w}>
      <div className='layer1'>
        <div className='layer2'>
          <div className='layer3'>{children}</div>
        </div>
      </div>
    </SecondButton>
  );
};
export const PrimaryBtn = styled.div<{ w?: any }>`
  width: ${(props) => (props.w ? `${props.w}px` : '100%')};
  height: 48px;
  border-radius: 6px;
  background: #090910;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  .layer1 {
    border-radius: 6px;
    background: #ffcf27;
    padding: 2px;
    width: 100%;
    height: 100%;
    .layer2 {
      border-radius: 4px;
      background: #fffd8a;
      padding: 4px;
      width: 100%;
      height: 100%;
      .layer3 {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background: #f2de29;
        color: #4b1606;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.32px;
      }
    }
  }
`;

export const SecondButton = styled.div<{ w: any }>`
  width: ${(props) => (props.w ? `${props.w}px` : ' auto')};
  height: 48px;
  border-radius: 6px;
  background: #090910;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  .layer1 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 97%;
    z-index: 1;
    border-radius: 6px;
    background: #0a80b8;
    .layer2 {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 97%;
      height: 97%;
      z-index: 2;
      border-radius: 4px;
      background: #60bfec;
      color: #4b1606;
      .layer3 {
        border-radius: 4px;
        background: #0a80b8;
        position: relative;
        z-index: 3;
        width: 96%;
        height: 95%;

        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;

        /* B16 */
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.32px;
      }
    }
  }
`;
