import React, { Children } from 'react';
import { Wrapper } from './modal.styled';
import { CloseIconSVG } from '@/modules/marketplace/hard';

export interface IModal {
  children: any;
  control: boolean;
  setControl: any;
}
export const Modal = ({ children, control, setControl }: IModal) => {
  const closeModal = () => {
    const modal = document.querySelector('#modal') as HTMLElement;
    const modalContent = document.querySelector('#modal-content') as HTMLElement;
    modal && modal.classList.add('disapear');
    modalContent && modalContent.classList.add('disapear');
    const timer = setTimeout(() => {
      modal && modal.classList.remove('disapear');
      modalContent && modalContent.classList.remove('disapear');
      setControl(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  };
  return control ? (
    <Wrapper id='modal'>
      <div
        className='overlay'
        onClick={() => {
          closeModal();
        }}
      ></div>
      <div id='modal-content'>
        <div
          className='close'
          onClick={() => {
            closeModal();
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: CloseIconSVG }}></div>
        </div>
        {React.cloneElement(children, { setControl })}
      </div>
    </Wrapper>
  ) : null;
};
