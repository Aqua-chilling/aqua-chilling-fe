import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { dispatch } from '@/app/store';
import { updateAccount } from '@/redux';

export const OauthXSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const twitter_code = searchParams.get('twitter_code');
  const { addNotification } = useNotification();
  React.useEffect(() => {
    if (twitter_code) {
      OauthRepository.loginByX(twitter_code)
        .then((rs) => {
          addNotification({
            message: 'Login successfully',
            type: NOTIFICATION_TYPE.SUCCESS,
            id: new Date().getTime()
          });
          dispatch(
            updateAccount({
              email: rs.email,
              token: rs.token,
              id: rs.id
            })
          );
          navigate('/airdrop');
        })
        .catch((err) => {
          addNotification({
            message: err,
            type: NOTIFICATION_TYPE.ERROR,
            id: new Date().getTime()
          });
        });
    } else {
      addNotification({
        message: 'Something went wrong',
        type: NOTIFICATION_TYPE.ERROR,
        id: new Date().getTime()
      });
      navigate('/airdrop');
    }
  }, [twitter_code]);
  return <></>;
};
