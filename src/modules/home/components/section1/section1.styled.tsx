import styled from 'styled-components';
import bg from '@/assets/home/section1/bg.png';
export const Wrapper = styled.div`
  background-image: url(${bg});
  background-position: 100% 100%;
  width: 100%;
  min-height: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 165px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .logo {
      max-width: 706px;
      max-height: 412px;
      position: relative;
    }
    .btns {
      display: flex;
      gap: 16px;
      align-items: center;
    }
  }
`;
