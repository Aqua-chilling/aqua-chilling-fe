import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section1.styled';
import txt from '@/assets/home/section1/txt.png';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import { Bubble } from '../bubbles/bubble';
import { Magnifier } from './components/magnifier';
import fish1 from '@/assets/home/fish1.png';
import fish2 from '@/assets/home/fish2.png';
import fish3 from '@/assets/home/fish3.png';
import fish4 from '@/assets/home/fish4.png';
import fish5 from '@/assets/home/fish5.png';
import fish6 from '@/assets/home/fish6.png';
import fish7 from '@/assets/home/fish7.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Section1 = () => {
  const ref = useRef<any>(null);
  const fish1Ref = useRef<any>(null);
  const fish2Ref = useRef<any>(null);
  const fish3Ref = useRef<any>(null);
  const fish4Ref = useRef<any>(null);
  const fish5Ref = useRef<any>(null);
  const fish6Ref = useRef<any>(null);
  const fish7Ref = useRef<any>(null);
  useGSAP(() => {
    const animFish1 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish1Ref.current, {
        x: Math.random() * 1000 + 200,
        y: Math.random() * 500 - 250,
        duration: 5
      })
        .to(fish1Ref.current, {
          rotateY: 180,
          duration: 0.3
        })
        .to(fish1Ref.current, {
          x: -Math.random() * 500,
          y: Math.random() * 500 - 250,
          duration: 7
        })
        .to(fish1Ref.current, {
          rotateY: 0,
          duration: 0.3
        });
    };
    animFish1();
    const timer1 = setInterval(() => {
      animFish1();
    }, 12600);
    const animFish2 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish2Ref.current, {
        x: Math.random() * 700 + 400,
        y: Math.random() * 500 - 250,
        duration: 12
      })
        .to(fish2Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish2Ref.current, {
          x: -Math.random() * 500,
          y: Math.random() * 500 - 250,
          duration: 6
        })
        .to(fish2Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish2();
    const timer2 = setInterval(() => {
      animFish2();
    }, 18600);
    const animFish3 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish3Ref.current, {
        x: Math.random() * 700 + 100,
        y: Math.random() * 700 - 250,
        duration: 30
      })
        .to(fish3Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish3Ref.current, {
          x: -Math.random() * 500,
          y: Math.random() * 500 - 250,
          duration: 30
        })
        .to(fish3Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish3();
    const timer3 = setInterval(() => {
      animFish3();
    }, 60600);
    const animFish4 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish4Ref.current, {
        x: Math.random() * 500 + 100,
        y: Math.random() * 100 - 50,
        duration: 11
      })
        .to(fish4Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish4Ref.current, {
          x: -Math.random() * 400,
          y: Math.random() * 500 - 250,
          duration: 10
        })
        .to(fish4Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish4();
    const timer4 = setInterval(() => {
      animFish4();
    }, 21600);
    const animFish5 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish5Ref.current, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 700 - 250,
        duration: 25
      })
        .to(fish5Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish5Ref.current, {
          x: Math.random() * 500,
          y: Math.random() * 900 - 250,
          duration: 15
        })
        .to(fish5Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish5();
    const timer5 = setInterval(() => {
      animFish5();
    }, 46600);
    const animFish6 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish6Ref.current, {
        x: Math.random() - 500,
        y: Math.random() * 100 - 50,
        duration: 9
      })
        .to(fish6Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish6Ref.current, {
          x: Math.random() * 500,
          y: Math.random() * 1200 - 250,
          duration: 7
        })
        .to(fish6Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish6();
    const timer6 = setInterval(() => {
      animFish6();
    }, 16600);
    const animFish7 = () => {
      const tl = gsap.timeline({ delay: 0 });
      tl.to(fish7Ref.current, {
        x: Math.random() - 800,
        y: Math.random() * 900 - 450,
        duration: 22
      })
        .to(fish7Ref.current, {
          rotateY: 180,
          duration: 0.4
        })
        .to(fish7Ref.current, {
          x: Math.random() * 500,
          y: Math.random() * 900 - 250,
          duration: 12
        })
        .to(fish7Ref.current, {
          rotateY: 0,
          duration: 0.2
        });
    };
    animFish7();
    const timer7 = setInterval(() => {
      animFish7();
    }, 34600);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
      clearInterval(timer5);
      clearInterval(timer6);
      clearInterval(timer7);
    };
  });

  return (
    <Wrapper>
      <img src={fish1} ref={fish1Ref} alt='' className='fish a' />
      <img src={fish2} ref={fish2Ref} alt='' className='fish b' />
      <img src={fish3} ref={fish3Ref} alt='' className='fish c' />
      <img src={fish4} ref={fish4Ref} alt='' className='fish d' />
      <img src={fish5} ref={fish5Ref} key={5} alt='' className='fish e' />
      <img src={fish6} ref={fish6Ref} key={5} alt='' className='fish f' />
      <img src={fish7} ref={fish7Ref} key={5} alt='' className='fish g' />
      <div className='bubbles-section1 left'>
        <Bubble />
      </div>
      <div className='bubbles-section1 right'>
        <Bubble />
      </div>
      <WrapperContent>
        <div className='section1'>
          <div className='logo' id='logo-section1'>
            <img src={txt} alt='' ref={ref} />
          </div>
          <div className='btns'>
            {/* <Magnifier /> */}
            <SecondaryButton w={220}>Documentation</SecondaryButton>
            <PrimaryButton w={220}>Dive to the deep now!</PrimaryButton>
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
