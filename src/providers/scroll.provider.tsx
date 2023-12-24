import '@/constants/style/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';
import React from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export const ScrollProvider = () => {
  gsap.registerPlugin(ScrollTrigger);
  React.useEffect(() => {
    const scrollElement = document.querySelector('[data-scroll-container]') as HTMLElement;
    const loco: any = new LocomotiveScroll({
      el: scrollElement,
      smooth: true
    });
    loco.on('scroll', ScrollTrigger.update);
    ScrollTrigger.defaults({
      scroller: scrollElement
    });
    ScrollTrigger.scrollerProxy(scrollElement, {
      scrollTop(value: any) {
        if (loco) {
          return arguments.length
            ? loco?.scrollTo(value, { duration: 0, disableLerp: true })
            : loco?.scroll?.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: loco?.style?.transform ? 'transform' : 'fixed'
    });
    const update = () => {
      if (loco) {
        loco.update();
      }
    };
    ScrollTrigger.addEventListener('refresh', update);
    ScrollTrigger.refresh();
    return () => {
      loco.destroy();
      ScrollTrigger.removeEventListener('refresh', update);
    };
  }, []);
  return <></>;
};
