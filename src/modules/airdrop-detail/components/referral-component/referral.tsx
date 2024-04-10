import { OnboardingRepository } from '@/repositories/onboarding/onboarding.repository';
import { Wrapper } from './referral.styled';
import React from 'react';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useNotification } from '@/contexts/notification.context';
import { formatAddressToHuman } from '@/utilities/format.utils';
export const copyICONSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1797_24170)">
    <path d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z" stroke="#F2DE29" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.33398 9.9987H2.66732C2.3137 9.9987 1.97456 9.85822 1.72451 9.60817C1.47446 9.35813 1.33398 9.01899 1.33398 8.66536V2.66536C1.33398 2.31174 1.47446 1.9726 1.72451 1.72256C1.97456 1.47251 2.3137 1.33203 2.66732 1.33203H8.66732C9.02094 1.33203 9.36008 1.47251 9.61013 1.72256C9.86018 1.9726 10.0007 2.31174 10.0007 2.66536V3.33203" stroke="#F2DE29" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1797_24170">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
  
`;

export const Referral = ({ data }: any) => {
  const { addNotification } = useNotification();
  const [refHistory, setRefHistory] = React.useState<any>();
  console.log(data);

  React.useEffect(() => {
    OnboardingRepository.RetrieveReferralsHistory()
      .then((rs) => {
        setRefHistory(rs);
      })
      .catch((err) => {
        console.log(err);
        addNotification({
          message: err,
          type: NOTIFICATION_TYPE.ERROR,
          id: new Date().getTime()
        });
      });
  }, []);
  const copy = () => {
    addNotification({
      message: 'Copied',
      type: NOTIFICATION_TYPE.SUCCESS,
      id: new Date().getTime()
    });
    navigator.clipboard.writeText(data?.referral_code || '');
  };
  const copyLink = () => {
    addNotification({
      message: 'Copied',
      type: NOTIFICATION_TYPE.SUCCESS,
      id: new Date().getTime()
    });
    navigator.clipboard.writeText(`https://test.aquachilling.com/airdrop?ref=${data?.referral_code}` || '');
  };
  return (
    <Wrapper>
      <div className='referral-wrapper'>
        <div className='referral-link'>
          <span>Referral link</span>
          <div className='value'>
            https://test.aquachilling.com/airdrop?ref={data?.referral_code}
            <div className='ic' dangerouslySetInnerHTML={{ __html: copyICONSVG }} onClick={() => copyLink()}></div>
          </div>
        </div>
        <div className='referral-code'>
          <span>Referral link</span>
          <div className='value'>
            {data?.referral_code}
            <div className='ic' dangerouslySetInnerHTML={{ __html: copyICONSVG }} onClick={() => copy()}></div>
          </div>
        </div>
      </div>
      <div className='link'></div>
      <div className='ranking-wrapper'>
        <div className='ranking'>
          <span>Ranking</span>
          <div className='value'>{refHistory?.rank}</div>
        </div>
        <div className='total-ref'>
          <span>Total Referrals</span>
          <div className='value'>{refHistory?.total_referral}</div>
        </div>
      </div>
      <div className='link'></div>
      <div className='table'>
        <div className='table-head'>
          <div className='email'>Your referrals</div>
          <div className='date'></div>
        </div>
        {refHistory?.referrals?.length > 0 ? (
          refHistory?.referrals?.map((item: any, key: number) => {
            return (
              <div className='table-row' key={key}>
                <div className='email'>{item?.email}</div>
                <div className='date'>
                  {new Date(item?.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className='table-row'>
            <div className='address'>No data</div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
