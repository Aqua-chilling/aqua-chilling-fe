/* eslint-disable no-empty-pattern */
import React from 'react';
import { Wrapper } from './header.styled';
import { useNavigate } from 'react-router-dom';

import LogoImage from '@/assets/logo.png';
import { HeaderMobile } from './header-mobile';
import { WrapperContent } from '../wrapper-content/wrapper-content.styled';
interface IHeaderProps {}

const HeaderComponent = ({}: IHeaderProps) => {
  const navigate = useNavigate();
  const [isShowMenuMobile, setIsShowMenuMobile] = React.useState(false);

  return (
    <Wrapper>
      {isShowMenuMobile && <HeaderMobile setVisibility={setIsShowMenuMobile} />}
      <WrapperContent>
        <div className='header'>
          <div
            className='logo'
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={LogoImage} alt='Logo' />
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};

export const Header = React.memo(HeaderComponent);
