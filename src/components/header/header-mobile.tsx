import React, { useRef } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import gsap from 'gsap';

export const HeaderMobile = ({ setVisibility }: any) => {
  const ref = useRef<any>(null);
  const reficon = useRef<any>(null);
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(ref.current, {
        x: '100%',
        duration: 0.5
      }).from(reficon.current, {
        scale: '0',
        duration: 0.5
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className='header-mobile' ref={ref}>
      <div className='close' onClick={() => setVisibility(false)} ref={reficon}>
        <CloseOutlined className='ic' />
      </div>
      <div className='header-mobile-content'>{}</div>
    </div>
  );
};
