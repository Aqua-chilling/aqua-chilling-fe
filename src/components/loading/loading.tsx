// import React, { memo } from 'react';
import { memo } from 'react';
import { Wrapper } from './loading.styled';
import Graphic1 from '@/assets/game/graphic-top.png';
import x from '@/assets/footer/x.png';
import tele from '@/assets/tele.png';
import gitbook from '@/assets/gitbook.png';
import Logo from '@/assets/game/logo.png';

const LoadingComponent = () => {
  return (
    <Wrapper id='loading'>
      <div className='loading-content relative flex flex-col items-center h-full justify-between'>
        <div className='w-full  min-w-[350px] absolute top-0 left-1/2 -translate-x-1/2 z-[1] '>
          <img src={Graphic1} className='w-full h-auto max-h-none' alt='' />
        </div>
        <div className='content-wrapper flex w-full flex-col items-center px-4 relative z-[2] mt-3'>
          <img src={Logo} className='w-full max-w-[240px]' alt='' />
        </div>
        <div className='content-wrapper flex w-full flex-col items-center px-4 relative z-[2]'>
          <div className='loading-spine'></div>
          <span className='font-secondary font-normal text-base mb-5 text-white'>Loading</span>
          <div className='loading-button rounded-xl outline-[3px] outline-[#090910] border-[3px] border-[#496AB1] w-full'>
            <div className='bg-[#143464] w-full flex flex-col items-center gap-[3px] pb-[3px] rounded-xl border-[3px] border-[#060608]'>
              <span className='font-secondary font-semibold text-[32px] text-[#FFFFFF]'>Aquachilling Token</span>
              <span className='font-secondary text-base font-normal tracking-[-2%] text-[#FFFFFF]'>
                will be launched
              </span>
            </div>
          </div>
          <div className='font-secondary font-black text-[64px] leading-[64px] mt-1 text-white with-shadow'>on TON</div>
          <div
            className='font-secondary font-semibold text-xs border-[1px] border-[#1D1D22] text-[#FFFFFF] px-3 py-1 bg-[#2EDBF3] rounded-lg cursor-pointer mt-4'
            onClick={() => {
              window.open('https://t.me/aquachillingbot/aquachillingapp', '_blank');
            }}
          >
            Play to Airdrop now
          </div>
        </div>
        <div className='content-wrapper flex w-full flex-col items-center px-4 relative z-[2] mb-6 mt-2'>
          <span className='font-secondary font-normal text-sm text-white'>More info in official channels</span>
          <div className='flex items-center gap-1'>
            <img
              src={x}
              alt=''
              className='w-16 cursor-pointer'
              onClick={() => window.open('https://twitter.com/aquachilling')}
            />
            <img
              src={tele}
              className='w-16 cursor-pointer'
              alt=''
              onClick={() => window.open('https://t.me/aquachilling')}
            />
            <img
              src={tele}
              className='w-16 cursor-pointer'
              alt=''
              onClick={() => window.open('https://t.me/aquachillingnews')}
            />
            <img
              src={gitbook}
              className='w-16 cursor-pointer'
              alt=''
              onClick={() => window.open('https://aquachilling.gitbook.io/aquachilling')}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const Loading = memo(LoadingComponent);
