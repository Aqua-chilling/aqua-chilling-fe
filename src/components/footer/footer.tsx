import { FacebookFilled, InfoCircleFilled, TwitterOutlined, YoutubeFilled } from '@ant-design/icons';
// import FooterImage from '@/assets/components/footer.png';
import { Wrapper } from './footer.styled';

export const Footer = () => {
  return (
    <Wrapper>
      <div className='content'>
        <div className='logo'>{/* <img src={FooterImage} alt='' /> */}</div>
        <div className='grids'>
          <div className='grid'>
            <div className='head'>About Artstocks</div>
            <div className='pseudo'></div>
            <div className='item'>About us</div>
            <div className='item'>Contact us</div>
            <div className='item'>National work</div>
            <div className='item'>International work</div>
          </div>
          <div className='grid'>
            <div className='head'>Visit Us Now</div>
            <div className='pseudo'></div>
            <div className='item'>
              <div className='ic'>
                <FacebookFilled />
              </div>
              <div> /artstock</div>
            </div>
            <div className='item'>
              <div className='item'>
                <div className='ic'>
                  <TwitterOutlined />
                </div>
                <div> /artstock</div>
              </div>
            </div>
            <div className='item'>
              <div className='item'>
                <div className='ic'>
                  <YoutubeFilled />
                </div>
                <div> /artstock-tv</div>
              </div>
            </div>
          </div>
          <div className='grid'>
            <div className='head'>Visit Us Now</div>
            <div className='pseudo'></div>
            <div className='item-col'>
              Cromwell Road New Town SW7 <span>Sai Gon - Viet Nam</span>
            </div>
            <div className='item'>
              <div className='ic'>
                <InfoCircleFilled />
              </div>
              <div> +84 382 68 68 68</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
