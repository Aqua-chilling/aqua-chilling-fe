import { useParams } from 'react-router';

export const OauthGoogleSuccess = () => {
  const { code } = useParams();
  console.log(code);
  return <></>;
};
