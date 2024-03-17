import { Wrapper } from './popup-quest.styled';
import X from '@/assets/X.png';
import Discord from '@/assets/Discord.png';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import { PrimaryButton } from '@/components/button/button.styled';
import { useNavigate } from 'react-router';
import { CloseIconSVG } from '../hard';
import { ENVS } from '@/config';
import React from 'react';
import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import { useSelector } from 'react-redux';
import { selectId } from '@/redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const PopUpQuest = ({ setVisibility }: { setVisibility: (arg0: boolean) => void }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const userId = useSelector(selectId);
  React.useEffect(() => {
    setIsLoading(true);
    OnboardingRepository.RetrieveTaskOfTwitter(userId).then((rs) => {
      console.log(rs);
      setIsLoading(false);
    });
  }, []);
  return (
    <Wrapper>
      <div
        className='overlay'
        onClick={() => {
          setVisibility(false);
        }}
      ></div>
      <div className='popup-quest'>
        <div
          className='close'
          onClick={() => {
            setVisibility(false);
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: CloseIconSVG }}></div>
        </div>
        <div className='quest-content'>
          <div className='steps'>
            <div className='title'>Claim your first Aquachilling NFT now</div>
            <div className='step st'>
              <div className='label'>Step 1</div>
              <div className='btns'>
                <div
                  className='btn'
                  onClick={() => {
                    console.log(ENVS.VITE_BASE_BC_API);
                    window.open(`${ENVS.VITE_BASE_BC_API}/api/oauth/google`, '_blank');
                  }}
                >
                  {/* <img src={X} alt='' /> */}
                  {/* Follow us on X {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />} */}
                </div>
              </div>
            </div>
            <div className='step nd'>
              <div className='label'>Step 2</div>
              <div className='btns'>
                <div className='btn'>
                  <img src={Discord} alt='' />
                  Join Discord
                </div>
              </div>
            </div>
            <div className='step rd'>
              <div className='label'>Step 3</div>
              <div className='btns'>
                <input type='text' placeholder='Enter invitation code' />
                <div className='btn'>Submit</div>
              </div>
              <span>Join Discord to receive your invitation code</span>
            </div>
            <div className='step completed th'>
              <div className='label'>Step 4</div>
              <div className='btns'>
                <div className='btn'>Share a tweet</div>
              </div>
            </div>
          </div>
          <div className='nft'>
            <div className='title'>Claim your first Aquachilling NFT now</div>
            <div className='nft-img'>
              {/* <img src={new URL(`/src/assets/home/section4/card${1}.png`, import.meta.url).href} alt='' /> */}
              <img src={nft1} alt='' />
              <span>Trident Lv.1 </span>
            </div>
            <div
              onClick={() => {
                navigate('/airdrop/detail');
              }}
            >
              <PrimaryButton w={160}>Claim your NFT</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
