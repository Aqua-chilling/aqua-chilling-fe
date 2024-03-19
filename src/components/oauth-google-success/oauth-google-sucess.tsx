import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { useNavigate, useParams } from 'react-router';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { dispatch } from '@/app/store';
import { updateAccount } from '@/redux';

export const OauthGoogleSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const google_code = searchParams.get('google_code');
  const twitter_code = searchParams.get('twitter_code');
  const discord_code = searchParams.get('discord_code');
  const { addNotification } = useNotification();
  React.useEffect(() => {
    if (google_code) {
      OauthRepository.loginByGoogle(google_code)
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
    }
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
    }
    if (discord_code) {
      OauthRepository.loginByDiscord(discord_code)
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
    }
  }, [google_code, twitter_code, discord_code]);
  return <></>;
};
