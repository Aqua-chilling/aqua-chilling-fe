import X from '@/assets/X.png';
import Discord from '@/assets/Discord.png';
import { GoogleLogin } from '@react-oauth/google';
import google from '@/assets/google.svg';
import show from '@/assets/show.png';
import hide from '@/assets/hide.png';
import { useNavigate } from 'react-router';
import { ENVS } from '@/config';
import { Wrapper } from './popup-login.styled';
import React from 'react';
import { toSafeInteger } from 'lodash';
import { useNotification } from '@/contexts/notification.context';
import { NOTIFICATION_TYPE } from '@/components/notification/notification';
import { OauthRepository } from '@/repositories/oauth/oauth.repository';
import { ILoginPayload } from '@/repositories/oauth/oauth.entity';
import { Spin, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { updateAccount } from '@/redux';
import { dispatch } from '@/app/store';

export const PopUpLogin = ({ setControl }: any) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const { addNotification } = useNotification();
  const navigate = useNavigate();

  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = () => {};
  return (
    <Wrapper>
      <div className='login-content'>
        <div className='steps'>
          <div className='title'>Login</div>
          <div className='step '>
            <div className='label'>Enter email</div>
            <div className='btns'>
              <input type='text' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className='step '>
            <div className='label'>Password</div>
            <div className='btns'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className='show-hide'
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <img src={hide} alt='' /> : <img src={show} alt='' />}
              </span>
            </div>
          </div>
          <span className='forgot'>Forgot password?</span>
          <div className='step '>
            <div className='btns'>
              <div
                className='btn'
                onClick={() => {
                  setIsLoading(true);
                  if (!email || !password) {
                    addNotification({
                      message: 'Please enter enough information!',
                      type: NOTIFICATION_TYPE.INFO,
                      id: new Date().getTime()
                    });
                    setIsLoading(false);
                    return;
                  } else {
                    const body: ILoginPayload = {
                      email: email,
                      password: password
                    };
                    OauthRepository.login(body)
                      .then((rs) => {
                        setIsLoading(false);
                        addNotification({
                          message: 'Login successfully',
                          type: NOTIFICATION_TYPE.SUCCESS,
                          id: new Date().getTime()
                        });
                        dispatch(
                          updateAccount({
                            email: rs.email,
                            address: rs.address,
                            token: rs.token,
                            id: rs.id,
                            name: rs.name
                          })
                        );
                        setControl(false);
                        console.log(rs);
                      })
                      .catch((err) => {
                        setIsLoading(false);
                        addNotification({
                          message: err,
                          type: NOTIFICATION_TYPE.ERROR,
                          id: new Date().getTime()
                        });
                      });
                  }
                }}
              >
                Login
                {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />} />}
              </div>
            </div>
          </div>
          <div className='divider'>
            <div className='line'></div>
            <span>Or</span>
            <div className='line'></div>
          </div>
          <div className='step nd'>
            <div className='btns'>
              <div className='btn google'>
                {/* <img src={google} alt='' /> */}
                {/* Sign in by Google */}

                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
              </div>
            </div>
          </div>

          <div className='step st'>
            <div className='btns'>
              <div
                className='btn'
                onClick={() => {
                  window.open(`${ENVS.VITE_BASE_GAME_API}/api/oauth/google`, '_blank');
                }}
              >
                <img src={X} alt='' />
                Sign in by X
              </div>
            </div>
          </div>
          <div className='step nd'>
            <div className='btns'>
              <div className='btn'>
                <img src={Discord} alt='' />
                Join Discord
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
