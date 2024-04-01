import { Footer, Header, Loading } from '@/components';
import { OauthSuccess } from '@/components/oauth-success/oauth-sucess';
import { AirdropDetail } from '@/modules/airdrop-detail/airdrop-detail';
import { AirDrop } from '@/modules/airdrop/airdrop';
import Home from '@/modules/home';
import { MarketPlace } from '@/modules/marketplace/marketplace';
import { NFTTermsOfService } from '@/modules/nft-terms-of-service/nft-terms-of-service';
import { PrivacyPolicy } from '@/modules/privacy-policy/privacy-policy';
import { TermsOfService } from '@/modules/terms-of-service/terms-of-service';
import { Packages } from '@/modules/packages/packages';
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
    Component: AirdropDetail,
    path: '/airdrop/detail'
  },
  {
    Component: MarketPlace,
    path: '/marketplace'
  },
  {
    Component: TermsOfService,
    path: '/terms-of-service'
  },
  {
    Component: NFTTermsOfService,
    path: '/nft-terms-of-service'
  },
  {
    Component: PrivacyPolicy,
    path: '/privacy-policy'
  },
  {
    Component: OauthSuccess,
    path: '/airdrop/oauth/success'
  },
  {
    Component: Packages,
    path: '/packages'
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
