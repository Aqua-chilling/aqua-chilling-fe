import React from 'react';
import './magnifier.css';
import { Bubble } from '../../bubbles/bubble';
export const Magnifier = () => {
  React.useEffect(() => {
    let ele = document.querySelector('#magnifier') as HTMLElement;
    const moveMagnifier = (e: MouseEvent) => {
      //   cursor.style.visibility = 'hidden';
      ele.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        },
        {
          fill: 'forwards'
        }
      );
    };
    window.addEventListener('mousemove', moveMagnifier);
    return () => {
      window.removeEventListener('mousemove', moveMagnifier);
    };
  }, []);
  return (
    <div id='magnifier'>
      <Bubble style='onHover' />
    </div>
  );
};
