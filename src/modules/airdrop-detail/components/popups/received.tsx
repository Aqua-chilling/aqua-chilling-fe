import { Wrapper } from './received.styled';
import nftLevel1 from '@/assets/airdrop-detail/nft-level-1.png';
import close from '@/assets/airdrop-detail/close.png';

export const Received = ({ setControl }: any) => {
  return (
    <Wrapper>
      <img src={nftLevel1} alt='' className='nft' />
      <img src={close} className='close-received' alt='' onClick={() => setControl(false)} />
    </Wrapper>
  );
};
