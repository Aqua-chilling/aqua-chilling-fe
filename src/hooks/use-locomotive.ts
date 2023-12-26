import { useLayoutEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';

const useLocoScroll = (start: boolean) => {
  useLayoutEffect(() => {
    const scrollEl = document.querySelector('#home') as HTMLElement;
    let locoScroll: any = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      getDirection: true,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true,
        breakpoint: 1
      }
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('#home', {
      scrollTop(value: any) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.y;
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
      pinType: scrollEl.style.transform ? 'transform' : 'fixed'
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };
    ScrollTrigger.defaults({
      scroller: scrollEl
    });

    ScrollTrigger.addEventListener('refresh', lsUpdate);
    ScrollTrigger.refresh();
    setTimeout(() => locoScroll.update(), 5000);
    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener('refresh', lsUpdate);
    };
  }, [start]);
};

export default useLocoScroll;
