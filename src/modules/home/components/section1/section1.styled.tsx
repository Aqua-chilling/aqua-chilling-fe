import styled from 'styled-components';
import bg from '@/assets/home/section1/bg.png';
export const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .section1 {
    margin-top: 165px;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 960px;
    @media screen and (max-width: 768px) {
      min-height: 640px;
    }
    .logo {
      max-width: 706px;
      max-height: 412px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .btns {
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
      display: flex;
      gap: 16px;
      align-items: center;
    }
  }
`;
