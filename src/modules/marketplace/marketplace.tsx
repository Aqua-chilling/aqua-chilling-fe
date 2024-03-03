import { Wrapper } from './marketplace.styled';
import nft1 from '@/assets/airdrop/triden 1.jpg';
import nft2 from '@/assets/airdrop/triden 2.jpg';
import nft3 from '@/assets/airdrop/triden 3.jpg';
import nft4 from '@/assets/airdrop/triden 4.jpg';

import { PrimaryButton } from '@/components/button/button.styled';
import { CustomCheckbox } from '@/components/custom-checkbox/custom-checkbox';
import React from 'react';
import { ArrowDownSVG, SearchIconSVG, defaultColors, defaultRarities } from './hard';
import { FallOutlined, RiseOutlined } from '@ant-design/icons';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';

export const MarketPlace = () => {
  const [raritiesState, setRaritiesState] = React.useState<any>(defaultRarities);
  const [colorsState, setColorsState] = React.useState<any>(defaultColors);
  const { addNotification } = useNotification();
  React.useEffect(() => {
    addNotification({ message: 'hello', id: new Date().getTime(), type: NOTIFICATION_TYPE.SUCCESS });
    addNotification({
      message: 'Buy failed , something went wrong',
      id: new Date().getTime(),
      type: NOTIFICATION_TYPE.ERROR
    });
  }, []);
  return (
    <Wrapper>
      <div className='marketplace'>
        {/* --------------------------------------top-bar------------------------------- */}
        <div className='top-bar'>
          <div className='title'>Marketplace</div>
          <div className='tabs'>
            <div className='tab active'>Buy</div>
            <div className='tab'>Inventory</div>
          </div>
          <div className='btn-sell'>Sell a fish</div>
        </div>
        {/* --------------------------------------left-bar------------------------------- */}
        <div className='left-bar'>
          <div className='rarities'>
            <span>Rarity</span>
            {Object.keys(raritiesState).map((key: string) => {
              return (
                <div className='rarity'>
                  <span className={raritiesState[key].label}>
                    {raritiesState[key].label.charAt(0).toUpperCase().concat(raritiesState[key].label.slice(1))}
                  </span>
                  <CustomCheckbox
                    isChecked={raritiesState}
                    setIsChecked={setRaritiesState}
                    label={raritiesState[key].label}
                  />
                </div>
              );
            })}
          </div>
          <div className='line'></div>
          <div className='colors-wrapper'>
            <span>Color</span>
            <div className='colors'>
              {Object.keys(colorsState).map((key) => {
                return (
                  <div className='color'>
                    <CustomCheckbox
                      isChecked={colorsState}
                      setIsChecked={setColorsState}
                      label={colorsState[key].label}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='line'></div>
          <div className='sort-by-wrapper'>
            <span>Sort by</span>
            <div className='sort-by'>
              <div className='dropdown-wrapper'>
                <div className='dropdown-header'>
                  <span>Earn rate: low to hight </span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <mask
                      id='path-1-outside-1_1689_7728'
                      maskUnits='userSpaceOnUse'
                      x='5.37451'
                      y='7.17529'
                      width='15'
                      height='12'
                      fill='black'
                    >
                      <rect fill='white' x='5.37451' y='7.17529' width='15' height='12' />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M17.135 10.2448C17.6126 10.6722 17.6533 11.4058 17.2259 11.8834L13.3793 16.1821C13.0687 16.5292 12.5964 16.6455 12.1781 16.5192C11.9177 16.4817 11.6685 16.3559 11.4793 16.1445L11.0061 15.6157L10.8759 15.4992C10.779 15.4125 10.7001 15.3132 10.6394 15.2059L7.6702 11.8878C7.24283 11.4102 7.28354 10.6765 7.76114 10.2492L8.62589 9.47536C9.10349 9.04799 9.8371 9.08871 10.2645 9.5663L12.4461 12.0043L14.6317 9.56192C15.059 9.08432 15.7926 9.04361 16.2702 9.47098L17.135 10.2448Z'
                      />
                    </mask>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M17.135 10.2448C17.6126 10.6722 17.6533 11.4058 17.2259 11.8834L13.3793 16.1821C13.0687 16.5292 12.5964 16.6455 12.1781 16.5192C11.9177 16.4817 11.6685 16.3559 11.4793 16.1445L11.0061 15.6157L10.8759 15.4992C10.779 15.4125 10.7001 15.3132 10.6394 15.2059L7.6702 11.8878C7.24283 11.4102 7.28354 10.6765 7.76114 10.2492L8.62589 9.47536C9.10349 9.04799 9.8371 9.08871 10.2645 9.5663L12.4461 12.0043L14.6317 9.56192C15.059 9.08432 15.7926 9.04361 16.2702 9.47098L17.135 10.2448Z'
                      fill='white'
                    />
                    <path
                      d='M17.2259 11.8834L18.7163 13.217V13.217L17.2259 11.8834ZM17.135 10.2448L15.8013 11.7352L15.8013 11.7352L17.135 10.2448ZM13.3793 16.1821L11.8889 14.8484V14.8484L13.3793 16.1821ZM12.1781 16.5192L12.7565 14.6046L12.6122 14.561L12.463 14.5396L12.1781 16.5192ZM11.4793 16.1445L12.9697 14.8108L11.4793 16.1445ZM11.0061 15.6157L12.4965 14.2821L12.4225 14.1994L12.3398 14.1253L11.0061 15.6157ZM10.8759 15.4992L12.2096 14.0088L12.2096 14.0088L10.8759 15.4992ZM10.6394 15.2059L12.3801 14.2211L12.2738 14.0332L12.1298 13.8722L10.6394 15.2059ZM7.6702 11.8878L6.17979 13.2214L6.17979 13.2214L7.6702 11.8878ZM7.76114 10.2492L6.42746 8.75877L6.42746 8.75877L7.76114 10.2492ZM8.62589 9.47536L9.95957 10.9658L9.95957 10.9658L8.62589 9.47536ZM10.2645 9.5663L11.7549 8.23262V8.23262L10.2645 9.5663ZM12.4461 12.0043L10.9557 13.338L12.4461 15.0036L13.9365 13.338L12.4461 12.0043ZM14.6317 9.56192L13.1413 8.22824V8.22824L14.6317 9.56192ZM16.2702 9.47098L14.9366 10.9614L14.9366 10.9614L16.2702 9.47098ZM18.7163 13.217C19.8803 11.9163 19.7694 9.91832 18.4687 8.75439L15.8013 11.7352C15.4558 11.426 15.4263 10.8952 15.7355 10.5497L18.7163 13.217ZM14.8697 17.5158L18.7163 13.217L15.7355 10.5497L11.8889 14.8484L14.8697 17.5158ZM11.5997 18.4337C12.734 18.7764 14.0218 18.4633 14.8697 17.5158L11.8889 14.8484C12.1156 14.5951 12.4587 14.5147 12.7565 14.6046L11.5997 18.4337ZM12.463 14.5396C12.6504 14.5665 12.8339 14.6591 12.9697 14.8108L9.98885 17.4781C10.503 18.0527 11.1849 18.3969 11.8932 18.4988L12.463 14.5396ZM12.9697 14.8108L12.4965 14.2821L9.51573 16.9494L9.98885 17.4781L12.9697 14.8108ZM9.54226 16.9896L9.67247 17.1061L12.3398 14.1253L12.2096 14.0088L9.54226 16.9896ZM8.89868 16.1907C9.06521 16.4851 9.28093 16.7558 9.54226 16.9896L12.2096 14.0088C12.2771 14.0692 12.335 14.1412 12.3801 14.2211L8.89868 16.1907ZM12.1298 13.8722L9.1606 10.5541L6.17979 13.2214L9.14901 16.5396L12.1298 13.8722ZM9.1606 10.5541C9.4698 10.8996 9.44035 11.4304 9.09481 11.7396L6.42746 8.75877C5.12674 9.9227 5.01585 11.9207 6.17979 13.2214L9.1606 10.5541ZM9.09481 11.7396L9.95957 10.9658L7.29222 7.98495L6.42746 8.75877L9.09481 11.7396ZM9.95957 10.9658C9.61403 11.275 9.08326 11.2455 8.77406 10.9L11.7549 8.23262C10.5909 6.9319 8.59294 6.82102 7.29222 7.98495L9.95957 10.9658ZM8.77406 10.9L10.9557 13.338L13.9365 10.6706L11.7549 8.23262L8.77406 10.9ZM13.1413 8.22824L10.9557 10.6706L13.9365 13.338L16.1221 10.8956L13.1413 8.22824ZM17.6039 7.98057C16.3032 6.81664 14.3052 6.92752 13.1413 8.22824L16.1221 10.8956C15.8129 11.2411 15.2821 11.2706 14.9366 10.9614L17.6039 7.98057ZM18.4687 8.75439L17.6039 7.98057L14.9366 10.9614L15.8013 11.7352L18.4687 8.75439Z'
                      fill='#0D0F10'
                      mask='url(#path-1-outside-1_1689_7728)'
                    />
                  </svg>
                </div>
                <div className='dropdown-content'>
                  <div className='option'>
                    Low to high <RiseOutlined />
                  </div>
                  <div className='option'>
                    High to low
                    <FallOutlined />
                  </div>
                  <div className='option'>Random</div>
                </div>
              </div>
              <div className='dropdown-wrapper'>
                <div className='dropdown-header'>
                  <span>Price: low to hight </span>
                  <div dangerouslySetInnerHTML={{ __html: ArrowDownSVG }}></div>
                </div>
                <div className='dropdown-content'>
                  <div className='option'>
                    Low to high <RiseOutlined />
                  </div>
                  <div className='option'>
                    High to low
                    <FallOutlined />
                  </div>
                  <div className='option'>Random</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------- main-content -------------------------------------------- */}
        <div className='marketplace-content'>
          <div className='search-wrapper'>
            <input type='text' placeholder='Search by fish name' />
            <div dangerouslySetInnerHTML={{ __html: SearchIconSVG }}></div>
          </div>
          <div className='fish-list'>
            {Array.from(Array(10).keys()).map((item, key) => {
              return (
                <div className='fish'>
                  <div className='top'>
                    <img
                      key={key}
                      className=''
                      src={new URL(`/src/assets/home/section4/card${item + 1}.png`, import.meta.url).href}
                      alt=''
                    />
                  </div>
                  <div className='bottom'>
                    <div className='rarity'>Common</div>
                    <div className='name'>Bluefin Travelly</div>
                    <div className='xp'>150XP - $99.00/day</div>
                    <div className='price'>$1,200.00</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
