import React, { useState } from "react";
import { Loading } from "@/components";
import { useLocation } from "react-router";

export const LoadingProvider = ({ children }: any) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    const onHidePreLoading = () => {
      try {
        const element = document.querySelector("#loading") as HTMLElement;
        element.style.opacity = "0";
        element.style.visibility = "hidden";
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      } catch (err: any) {
        console.log;
      }
    };
    const timer1 = setTimeout(onHidePreLoading, 2500);
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
