import styled from 'styled-components';
import bgwrapper from '@/assets/home/section3-2/bg-wrapper.png';
import bg from '@/assets/home/section3-2/bg.png';
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #143464;
  position: relative;
  background-image: url(${bgwrapper});
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100% 100%;
  .water {
    position: absolute;
    top: -5%;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .section3-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px;
    width: 100%;
    .section3 {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 16px;
      background: url(${bg});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      padding: 96px 120px;
      margin-top: 80px;
      .feat {
        display: flex;
        align-items: center;
        gap: 54px;
        .left {
          width: 55%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 100%;
            height: 100%;
            max-width: 640px;
            max-height: 600px;
          }
        }
        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          img {
            max-width: 111px;
            max-height: 108px;
          }
        }
      }
    }
  }
`;
