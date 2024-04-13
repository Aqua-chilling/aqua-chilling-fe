import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import land from '@/assets/airdrop-detail/land.png';
import { useNavigate, useParams } from 'react-router';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { dispatch } from '@/app/store';
import { selectToken, updateAccount, updateDiscordId, updateTwitterId } from '@/redux';
import { Wrapper } from './oauth-success.styled';
import { useSelector } from 'react-redux';

export const OauthSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const google_code = searchParams.get('google_code');
  const twitter_code = searchParams.get('twitter_code');
  const discord_code = searchParams.get('discord_code');
  const telegram_id = searchParams.get('id');
  const { addNotification } = useNotification();
  const token = useSelector(selectToken);

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
          navigate('/airdrop');
        });
    }
    if (twitter_code) {
      if (token) {
        OauthRepository.linkXAccount(twitter_code)
          .then((rs) => {
            addNotification({
              message: 'Link X account successfully',
              type: NOTIFICATION_TYPE.SUCCESS,
              id: new Date().getTime()
            });
            dispatch(
              updateTwitterId({
                twitter: rs.id
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
            navigate('/airdrop');
          });
      } else {
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
    }
    if (discord_code) {
      if (token) {
        OauthRepository.linkDiscordAccount(discord_code)
          .then((rs) => {
            addNotification({
              message: 'Link Discord account successfully',
              type: NOTIFICATION_TYPE.SUCCESS,
              id: new Date().getTime()
            });
            dispatch(
              updateDiscordId({
                discord: rs.id
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
            navigate('/airdrop');
          });
      } else {
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
            navigate('/airdrop');
          });
      }
    }
  }, [google_code, twitter_code, discord_code]);
  return (
    <Wrapper>
      <>
        <img src={land} alt='' className='land' />
        <h1>Congratulation! Login successfull. </h1>
      </>
    </Wrapper>
  );
};
