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
  top: -10px;
  .water {
    position: absolute;
    top: -3%;
    @media screen and (max-width: 1440px) {
      top: -5%;
    }
    width: 100%;
    background-color: #143464;
    @media screen and (max-width: 960px) {
      top: -6%;
      padding-bottom: 6%;
    }
    @media screen and (max-width: 680px) {
      top: -4%;
      padding-bottom: 8%;
    }
    @media screen and (max-width: 500px) {
      top: -4%;
      padding-bottom: 9%;
    }
    @media screen and (max-width: 350px) {
      top: -4%;
      padding-bottom: 13%;
    }
    img {
      width: 100%;
      position: relative;
      transform: translateY(-20%);
    }
  }
  .section3-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px;
    width: 100%;
    @media screen and (max-width: 900px) {
      padding: 32px;
    }
    @media screen and (max-width: 500px) {
      padding: 8px;
    }
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
      @media screen and (max-width: 900px) {
        padding: 32px;
        margin-top: 32px;
      }
      @media screen and (max-width: 768px) {
        background: none;
        gap: 32px;
      }
      @media screen and (max-width: 500px) {
        padding: 8px;
      }

      .feat {
        display: flex;
        align-items: center;
        gap: 54px;
        @media screen and (max-width: 768px) {
          gap: 14px;
        }
        &.middle {
          @media screen and (max-width: 768px) {
            flex-direction: column-reverse;
          }
        }
        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
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
          .title-mobile {
            @media screen and (max-width: 768px) {
              font-size: 24px;
            }
          }
          img {
            max-width: 111px;
            max-height: 108px;
            @media screen and (max-width: 768px) {
              display: none;
            }
          }
        }
      }
    }
  }
`;
