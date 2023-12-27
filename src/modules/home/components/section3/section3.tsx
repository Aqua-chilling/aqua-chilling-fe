import { Wrapper } from './section3.styled';
import { Description, Title } from '@/components/text/text.styled';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import feat1 from '@/assets/home/section3-2/feat1.png';
import feat2 from '@/assets/home/section3-2/feat2.png';
import feat3 from '@/assets/home/section3-2/feat3.png';
import ic1 from '@/assets/home/section3-2/ic1.png';
import ic2 from '@/assets/home/section3-2/ic2.png';
import ic3 from '@/assets/home/section3-2/ic3.png';
import water from '@/assets/home/water.png';
export const Section3 = () => {
  return (
    <Wrapper>
      <div className='water'>
        <img src={water} alt='' />
      </div>
      <WrapperContent>
        <div className='section3-wrapper'>
          <div className='section3'>
            <div className='feat'>
              <div className='left'>
                <img src={feat1} alt='' />
              </div>
              <div className='right'>
                <img src={ic1} alt='' />
                <Title>Play & Explore </Title>
                <Description style={{ textAlign: 'left' }}>
                  Embark on a captivating underwater odyssey in AQUACHILLING, where you play and explore, building your
                  own majestic aquatic kingdom, feeding and caring for your fish, and uncovering endless aquatic
                  adventures!
                </Description>
              </div>
            </div>
            <div className='feat'>
              <div className='right'>
                <img src={ic2} alt='' />
                <Title>Play & Earn </Title>
                <Description style={{ textAlign: 'left' }}>
                  Cultivate your fish to adulthood and reap the rewards by selling them in a dynamic market, or choose
                  to keep them and enjoy a steady stream of daily income.
                </Description>
              </div>
              <div className='left'>
                <img src={feat2} alt='' />
              </div>
            </div>
            <div className='feat'>
              <div className='left'>
                <img src={feat3} alt='' />
              </div>
              <div className='right'>
                <img src={ic3} alt='' />
                <Title>Build your own underwater kingdom </Title>
                <Description style={{ textAlign: 'left' }}>
                  Collect majestic fish species to create and reign over your own magnificent marine realm!
                </Description>
              </div>
            </div>
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
