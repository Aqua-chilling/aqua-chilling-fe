import { ENVS } from '@/config';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { useNotification } from '@/contexts/notification.context';
import WebApp from '@twa-dev/sdk';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { setAccessGameToken } from '@/utilities/http-game.utils';
import { setAccessToken } from '@/utilities';
import { updateTelegramId } from '@/redux/telegram-id';
import { useDispatch } from 'react-redux';
import { updateAccount, updateDiscordId, updateReferral, updateTwitterId } from '@/redux';
export const useLoginWithTelegram = () => {
  const dispatch = useDispatch();
  const { addNotification } = useNotification();
  const handleLogin = async () => {
    const tonOauthResponse = await OauthRepository.loginWithTelegram(
      WebApp.initData ||
        'query_id=AAEATshbAgAAAABOyFvxq8MG&user=%7B%22id%22%3A5834821120%2C%22first_name%22%3A%22Giang%22%2C%22last_name%22%3A%22Nguyen%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1718763446&hash=7ae5afd8e2a085ce488fb17b2927302de67c578d646f66bab99a171ae314cbb9'
    );
    if (tonOauthResponse?.token) {
      setAccessGameToken(tonOauthResponse?.token);
      setAccessToken(tonOauthResponse?.token);
      dispatch(
        updateAccount({
          email: tonOauthResponse?.email,
          address: tonOauthResponse?.address,
          token: tonOauthResponse?.token,
          id: tonOauthResponse?.id,
          name: tonOauthResponse?.name
        })
      );
      dispatch(
        updateDiscordId({
          discord: tonOauthResponse?.discord
        })
      );
      dispatch(
        updateTwitterId({
          twitter: tonOauthResponse?.twitter
        })
      );
      dispatch(
        updateReferral({
          referral_code: tonOauthResponse?.referral_code,
          refreferral_code_status: tonOauthResponse?.referral_code_status
        })
      );
      dispatch(
        updateTelegramId({
          telegram: tonOauthResponse?.telegram
        })
      );
    } else {
      addNotification({
        message: 'Something went wrong!',
        type: NOTIFICATION_TYPE.ERROR,
        id: new Date().getTime()
      });
    }
  };
  return {
    handleLogin
  };
};
