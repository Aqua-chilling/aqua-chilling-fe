import { Loading } from '@/components';
import Home from '@/modules/home';
import React, { PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const elements = [
  {
    Component: Home,
    path: '/'
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
