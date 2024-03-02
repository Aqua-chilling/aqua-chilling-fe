import { Footer, Header, Loading } from '@/components';
import { AirDrop } from '@/modules/airdrop/airdrop';
import Home from '@/modules/home';
import { TermsOfService } from '@/modules/terms-of-service/terms-of-service';
import React, { PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const elements = [
  {
    Component: Home,
    path: '/'
  },
  {
    Component: AirDrop,
    path: '/airdrop'
  },
  {
    Component: TermsOfService,
    path: '/terms-of-service'
  }
];

export const RouterProvider = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <Routes>
        {elements.map(({ Component, path }, idx) => (
          <Route
            key={idx}
            element={
              <React.Suspense fallback={<Loading />}>
                <Component />
              </React.Suspense>
            }
            path={path}
          />
        ))}
      </Routes>
      {children}
    </BrowserRouter>
  );
};
