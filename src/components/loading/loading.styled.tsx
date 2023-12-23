import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s;
  visibility: visible;
  opacity: 1;
  .loading-content {
    width: 300px;
    height: 300px;
  }
`;
