// import { FacebookFilled, InfoCircleFilled, TwitterOutlined, YoutubeFilled } from '@ant-design/icons';
// import FooterImage from '@/assets/components/footer.png';
import { Wrapper } from './footer.styled';
import x from '@/assets/footer/x.png';
import discord from '@/assets/footer/discord.png';
import useLocoScroll from '@/hooks/use-locomotive';
export const Footer = () => {
  return (
    <Wrapper id='footerere'>
      <div className='footer'>
        <div className='logos'>
          <img src={x} alt='' onClick={() => window.open('https://twitter.com/aquachilling')} />
          <img src={discord} alt='' onClick={() => window.open('https://discord.com/invite/3AFGvRmqRH')} />
        </div>
        <div className='navs'>
          <span
            onClick={() => {
              window.open('/privacy-policy', '_blank');
            }}
          >
            Privacy policy
          </span>{' '}
          -{' '}
          <span
            onClick={() => {
              window.open('/terms-of-service', '_blank');
            }}
          >
            {' '}
            Terms of service
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
