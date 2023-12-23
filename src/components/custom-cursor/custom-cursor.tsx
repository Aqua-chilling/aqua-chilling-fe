import CustomCursorImg from '@/assets/custom-cursor.png';
import React from 'react';
import styled from 'styled-components';
const CustomCursorStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: rotate(-35deg);
  z-index: 9999999;
`;
export const CustomCurSor = () => {
  React.useEffect(() => {
    const cursor = document.querySelector('#custom-cursor') as HTMLElement;
    const handler = (e: MouseEvent) => {
      cursor?.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        },
        { duration: 300, fill: 'forwards' }
      );
    };
    window.addEventListener('mousemove', handler);
    return () => {
      window.removeEventListener('mousemove', handler);
    };
  }, []);
  return (
    <CustomCursorStyle id='custom-cursor'>
      <img src={CustomCursorImg} alt='' />
    </CustomCursorStyle>
  );
};
