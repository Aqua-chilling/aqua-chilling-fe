import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f6f4;
  width: 100vw !important;
  font-family: Montserrat;

  ${(props) => props.theme.mediaWidth.upToLarge1`
  padding: 80px 48px 0px 48px;

 `}
  ${(props) => props.theme.mediaWidth.upToSmall`
  padding: 80px 32px 0px 32px;

`}
  .content {
    margin: 80px 0px 200px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 1320px;
    gap: 16px;
    justify-content: center;
    align-items: flex-start;
    .grids {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      ${(props) => props.theme.mediaWidth.upToSmall`
      grid-template-columns:  1fr;
      row-gap: 56px;

      `}
      .grid {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        .head {
          color: #212529;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 36px; /* 150% */
        }
        .pseudo {
          width: 70px;
          height: 2px;
          background: var(--neutral-800, #2c2c2c);
        }
        .item {
          color: var(--neutral-700, #4e4e4e);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 150% */
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .item-col {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 6px;
          color: var(--neutral-700, #4e4e4e);

          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 150% */
          span {
            color: var(--neutral-700, #4e4e4e);

            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px; /* 150% */
          }
        }
      }
    }
  }
`;
