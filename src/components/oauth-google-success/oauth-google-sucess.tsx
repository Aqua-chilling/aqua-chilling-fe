import { useParams } from 'react-router';

export const OauthGoogleSuccess = () => {
  const { google_code } = useParams();
  console.log(google_code);
  return <></>;
};
