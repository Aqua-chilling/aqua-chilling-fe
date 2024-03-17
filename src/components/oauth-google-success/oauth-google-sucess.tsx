import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { useParams } from 'react-router';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';

export const OauthGoogleSuccess = () => {
  const { google_code } = useParams();
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
