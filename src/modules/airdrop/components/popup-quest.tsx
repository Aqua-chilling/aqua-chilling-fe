import { Wrapper } from './popup-quest.styled';
import X from '@/assets/X.png';
import Discord from '@/assets/Discord.png';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import { PrimaryButton } from '@/components/button/button.styled';
import { useNavigate } from 'react-router';

export const PopUpQuest = ({ setVisibility }: { setVisibility: (arg0: boolean) => void }) => {
  const navigate = useNavigate();
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
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <mask
              id='path-1-outside-1_1575_16853'
              maskUnits='userSpaceOnUse'
              x='2'
              y='3'
              width='20'
              height='19'
              fill='black'
            >
              <rect fill='white' x='2' y='3' width='20' height='19' />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M18.9305 5.8111C18.5031 5.3335 17.7695 5.29279 17.2919 5.72016L12.3855 10.1106L7.00474 5.29568C6.52714 4.86832 5.79353 4.90903 5.36616 5.38662L4.59234 6.25138C4.16497 6.72897 4.20569 7.46259 4.68328 7.88996L9.7752 12.4464L4.68329 17.0028C4.20569 17.4302 4.16498 18.1638 4.59235 18.6414L5.36617 19.5062C5.79353 19.9838 6.52715 20.0245 7.00474 19.5971L12.3855 14.7822L17.2919 19.1726C17.7695 19.6 18.5031 19.5593 18.9305 19.0817L19.7043 18.2169C20.1317 17.7394 20.091 17.0057 19.6134 16.5784L14.9958 12.4464L19.6134 8.31443C20.091 7.88706 20.1317 7.15345 19.7043 6.67585L18.9305 5.8111Z'
              />
            </mask>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M18.9305 5.8111C18.5031 5.3335 17.7695 5.29279 17.2919 5.72016L12.3855 10.1106L7.00474 5.29568C6.52714 4.86832 5.79353 4.90903 5.36616 5.38662L4.59234 6.25138C4.16497 6.72897 4.20569 7.46259 4.68328 7.88996L9.7752 12.4464L4.68329 17.0028C4.20569 17.4302 4.16498 18.1638 4.59235 18.6414L5.36617 19.5062C5.79353 19.9838 6.52715 20.0245 7.00474 19.5971L12.3855 14.7822L17.2919 19.1726C17.7695 19.6 18.5031 19.5593 18.9305 19.0817L19.7043 18.2169C20.1317 17.7394 20.091 17.0057 19.6134 16.5784L14.9958 12.4464L19.6134 8.31443C20.091 7.88706 20.1317 7.15345 19.7043 6.67585L18.9305 5.8111Z'
              fill='white'
            />
            <path
              d='M17.2919 5.72016L18.6256 7.21056L18.6256 7.21056L17.2919 5.72016ZM18.9305 5.8111L20.4209 4.47742L20.4209 4.47742L18.9305 5.8111ZM12.3855 10.1106L11.0518 11.601L12.3855 12.7944L13.7192 11.601L12.3855 10.1106ZM7.00474 5.29568L5.67106 6.78609L5.67106 6.78609L7.00474 5.29568ZM5.36616 5.38662L3.87575 4.05295L5.36616 5.38662ZM4.59234 6.25138L6.08275 7.58506L4.59234 6.25138ZM4.68328 7.88996L3.34961 9.38037L3.34961 9.38037L4.68328 7.88996ZM9.7752 12.4464L11.1089 13.9368L12.7744 12.4464L11.1089 10.956L9.7752 12.4464ZM4.68329 17.0028L3.34961 15.5124L3.34961 15.5124L4.68329 17.0028ZM4.59235 18.6414L3.10194 19.9751L3.10194 19.9751L4.59235 18.6414ZM5.36617 19.5062L3.87576 20.8398L5.36617 19.5062ZM7.00474 19.5971L5.67107 18.1067L7.00474 19.5971ZM12.3855 14.7822L13.7192 13.2918L12.3855 12.0984L11.0518 13.2918L12.3855 14.7822ZM17.2919 19.1726L18.6256 17.6822L18.6256 17.6822L17.2919 19.1726ZM18.9305 19.0817L17.4401 17.748L17.4401 17.748L18.9305 19.0817ZM19.7043 18.2169L18.2139 16.8833L18.2139 16.8833L19.7043 18.2169ZM19.6134 16.5784L20.947 15.088L20.947 15.088L19.6134 16.5784ZM14.9958 12.4464L13.6621 10.956L11.9966 12.4464L13.6621 13.9368L14.9958 12.4464ZM19.6134 8.31443L20.947 9.80484L20.947 9.80484L19.6134 8.31443ZM19.7043 6.67585L18.2139 8.00953L18.2139 8.00953L19.7043 6.67585ZM18.6256 7.21056C18.2801 7.51976 17.7493 7.4903 17.4401 7.14477L20.4209 4.47742C19.257 3.1767 17.259 3.06581 15.9582 4.22975L18.6256 7.21056ZM13.7192 11.601L18.6256 7.21056L15.9582 4.22975L11.0518 8.62019L13.7192 11.601ZM13.7192 8.62019L8.33841 3.80528L5.67106 6.78609L11.0518 11.601L13.7192 8.62019ZM8.33841 3.80528C7.03769 2.64134 5.03969 2.75223 3.87575 4.05295L6.85657 6.7203C6.54737 7.06583 6.0166 7.09529 5.67106 6.78609L8.33841 3.80528ZM3.87575 4.05295L3.10193 4.91771L6.08275 7.58506L6.85657 6.7203L3.87575 4.05295ZM3.10193 4.91771C1.938 6.21843 2.04889 8.21643 3.34961 9.38037L6.01695 6.39955C6.36249 6.70875 6.39195 7.23952 6.08275 7.58506L3.10193 4.91771ZM3.34961 9.38037L8.44153 13.9368L11.1089 10.956L6.01695 6.39955L3.34961 9.38037ZM6.01696 18.4932L11.1089 13.9368L8.44153 10.956L3.34961 15.5124L6.01696 18.4932ZM6.08276 17.3077C6.39195 17.6533 6.3625 18.184 6.01696 18.4932L3.34961 15.5124C2.04889 16.6764 1.938 18.6744 3.10194 19.9751L6.08276 17.3077ZM6.85657 18.1725L6.08276 17.3077L3.10194 19.9751L3.87576 20.8398L6.85657 18.1725ZM5.67107 18.1067C6.01661 17.7975 6.54738 17.827 6.85657 18.1725L3.87576 20.8398C5.03969 22.1406 7.03769 22.2515 8.33842 21.0875L5.67107 18.1067ZM11.0518 13.2918L5.67107 18.1067L8.33842 21.0875L13.7192 16.2726L11.0518 13.2918ZM11.0518 16.2726L15.9582 20.663L18.6256 17.6822L13.7192 13.2918L11.0518 16.2726ZM15.9582 20.663C17.259 21.827 19.257 21.7161 20.4209 20.4154L17.4401 17.748C17.7493 17.4025 18.2801 17.373 18.6256 17.6822L15.9582 20.663ZM20.4209 20.4154L21.1947 19.5506L18.2139 16.8833L17.4401 17.748L20.4209 20.4154ZM21.1947 19.5506C22.3587 18.2499 22.2478 16.2519 20.947 15.088L18.2797 18.0688C17.9342 17.7596 17.9047 17.2288 18.2139 16.8833L21.1947 19.5506ZM20.947 15.088L16.3295 10.956L13.6621 13.9368L18.2797 18.0688L20.947 15.088ZM18.2797 6.82402L13.6621 10.956L16.3295 13.9368L20.947 9.80484L18.2797 6.82402ZM18.2139 8.00953C17.9047 7.66399 17.9342 7.13322 18.2797 6.82402L20.947 9.80484C22.2478 8.6409 22.3587 6.6429 21.1947 5.34218L18.2139 8.00953ZM17.4401 7.14477L18.2139 8.00953L21.1947 5.34218L20.4209 4.47742L17.4401 7.14477Z'
              fill='#0D0F10'
              mask='url(#path-1-outside-1_1575_16853)'
            />
          </svg>
        </div>
        <div className='quest-content'>
          <div className='steps'>
            <div className='title'>Claim your first Aquachilling NFT now</div>
            <div className='step st'>
              <div className='label'>Step 1</div>
              <div className='btns'>
                <div className='btn'>
                  <img src={X} alt='' />
                  Follow us on X
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
              <PrimaryButton>Claim your NFT</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
