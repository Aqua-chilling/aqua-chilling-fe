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
          <img src={x} alt='' />
          <img src={discord} alt='' />
        </div>
        {/* <span>Made by Tevel team. All right reserved</span> */}
      </div>
    </Wrapper>
  );
};

export default Footer;
