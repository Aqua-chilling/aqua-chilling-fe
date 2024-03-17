import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { dispatch } from '@/app/store';
import { updateAccount } from '@/redux';
import React from 'react';

export const OauthDiscordSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const discord_code = searchParams.get('discord_code');
  const { addNotification } = useNotification();
  React.useEffect(() => {
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
  }, [discord_code]);
  return <></>;
};
