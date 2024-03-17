import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { useParams } from 'react-router';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const OauthGoogleSuccess = () => {
  const [searchParams] = useSearchParams();
  const google_code = searchParams.get('google_code');
  const { addNotification } = useNotification();
  React.useEffect(() => {
    if (google_code) {
      OauthRepository.loginByGoogle(google_code)
        .then((rs) => {
          console.log(rs);
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
