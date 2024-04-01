import React from 'react';
import { Wrapper } from './earning.styled';
import deposit from '@/assets/eanring/icon1.svg';
import withdraw from '@/assets/eanring/icon2.svg';
import coin from '@/assets/eanring/icon3.svg';

const CopyIconSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1562_18432)">
    <path d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z" stroke="#F2DE29" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.33301 10.0007H2.66634C2.31272 10.0007 1.97358 9.86018 1.72353 9.61013C1.47348 9.36008 1.33301 9.02094 1.33301 8.66732V2.66732C1.33301 2.3137 1.47348 1.97456 1.72353 1.72451C1.97358 1.47446 2.31272 1.33398 2.66634 1.33398H8.66634C9.01996 1.33398 9.3591 1.47446 9.60915 1.72451C9.8592 1.97456 9.99967 2.3137 9.99967 2.66732V3.33398" stroke="#F2DE29" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1562_18432">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
    

`;
export const Earning = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  return (
    <Wrapper>
      <div className='overlay'></div>
      <div className='earning-content'>
        <div className='content-wrapper'>
          <div className='top-bar'>
            <div className='title'>fsdfs</div>
            <div className='tabs'>
              {['Wallet', 'Earning'].map((item, key) => {
                return (
                  <div className={activeTab === key ? 'tab active' : 'tab '} onClick={() => setActiveTab(key)}>
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className='body'>
            <div className='left'>
              <div className='outer-1'>
                <div className='outer-2'>
                  <div className='outer-3'>
                    <div className='outer-4'>
                      <div className='outer-5'>
                        <div className='wallet-address'>
                          <div className='address'>
                            Wallet address
                            <span>
                              0x8fcff8e7b84f799a7cbdf5e5dcc42bbd181b282c
                              <div dangerouslySetInnerHTML={{ __html: CopyIconSVG }}></div>
                            </span>
                          </div>
                          <div className='btns'>
                            <div className='btn'>
                              <img src={deposit} alt='' />
                              Deposit
                            </div>
                            <div className='btn'>
                              <img src={withdraw} alt='' />
                              Withdraw
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
