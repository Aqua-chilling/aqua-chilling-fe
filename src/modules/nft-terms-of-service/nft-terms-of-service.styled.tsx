import styled from 'styled-components';
import bg from '@/assets/home/section1/bg.png';
export const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: 100% 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  .terms-of-service {
    width: 80%;
    height: 80%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
