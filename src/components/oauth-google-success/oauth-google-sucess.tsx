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
  }, [google_code]);
  console.log(google_code);
  return <></>;
};
