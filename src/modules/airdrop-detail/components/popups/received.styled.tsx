import styled from 'styled-components';
import bg from '@/assets/airdrop-detail/bg_received.png';
export const Wrapper = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: 500px;
  height: 420px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .nft {
    width: 180px;
  }
  .close-received {
    position: absolute;
    top: -14px;
    right: -10px;
    z-index: 2;
  }
`;
