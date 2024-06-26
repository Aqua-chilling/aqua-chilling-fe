import React, { useState } from 'react';
import { Loading } from '@/components';
import { useLocation } from 'react-router';

export const LoadingProvider = ({ children }: any) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    const onHidePreLoading = () => {
      try {
        const element = document.querySelector('#loading') as HTMLElement;
        element.style.opacity = '0';
        element.style.visibility = 'hidden';
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      } catch (err: any) {
        console.log(err);
        setIsLoading(false);
      }
    };
    const isAtHome = location.pathname.length <= 1;
    const timer1 = setTimeout(onHidePreLoading, isAtHome ? 0 : 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, [location?.pathname]);
  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
};
