import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section1.styled';
import txt from '@/assets/home/section1/txt.png';

export const Section1 = () => {
  return (
    <Wrapper>
      <div className='content'>
        <img src={txt} alt='' className='logo' />
        <div className='btns'>
          <SecondaryButton w={220}>Documentation</SecondaryButton>
          <PrimaryButton w={220}>Dive to the deep now!</PrimaryButton>
        </div>
      </div>
    </Wrapper>
  );
};
