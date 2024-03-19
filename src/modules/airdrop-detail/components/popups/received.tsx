import { Wrapper } from './received.styled';
import nft from '@/assets/airdrop-detail/nft.png';
import close from '@/assets/airdrop-detail/close.png';

export const Received = ({ setControl }: any) => {
  return (
    <Wrapper>
      <img src={nft} alt='' className='nft' />
      <img src={close} className='close-received' alt='' onClick={() => setControl(false)} />
    </Wrapper>
  );
};
