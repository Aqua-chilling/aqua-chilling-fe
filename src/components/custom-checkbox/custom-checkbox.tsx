import { useRef } from 'react';
import { Wrapper } from './custom-checkbox.styled';

export const CustomCheckbox = ({
  isChecked,
  setIsChecked,
  label
}: {
  label: string;
  isChecked: any;
  setIsChecked: (arg0: any) => void;
}) => {
  const ref = useRef<any>(null);
  const handleChanged = () => {
    if (ref.current) {
      ref.current.click();
    }
  };
  return (
    <Wrapper>
      <input
        type='checkbox'
        name=''
        id=''
        style={{ display: 'none' }}
        ref={ref}
        onChange={() => {
          const newIsChecked = { ...isChecked, [label]: { ...isChecked[label], checked: !isChecked[label].checked } };
          console.log(newIsChecked);
          setIsChecked(newIsChecked);
        }}
      />
      <div
        className='checkbox'
        onClick={() => {
          handleChanged();
        }}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M3 6.83658C3 5.24438 4.24384 3.92952 5.83359 3.8412L16.9973 3.22099C18.655 3.12889 20.0723 4.40072 20.1596 6.05869L20.7798 17.8423C20.8701 19.5588 19.5027 21 17.7839 21H6C4.34315 21 3 19.6569 3 18V6.83658Z'
            fill='white'
            fill-opacity='0.1'
            stroke='#0D0F10'
            stroke-width='2'
            className={label}
          />
        </svg>
        {isChecked[label].checked ? (
          <svg
            width='14'
            height='13'
            viewBox='0 0 14 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='checked'
          >
            <mask
              id='path-1-outside-1_3511_10134'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='14'
              height='13'
              fill='black'
            >
              <rect fill='white' width='14' height='13' />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M11.4994 3.0695C11.977 3.49687 12.0177 4.23049 11.5903 4.70808L6.85258 10.0026C6.42521 10.4802 5.6916 10.5209 5.214 10.0935L5.07167 9.96617C4.93899 9.90211 4.81638 9.81154 4.71203 9.69493L4.48493 9.44114L4.34924 9.31972C4.25134 9.23211 4.17179 9.13163 4.11087 9.02312L2.29568 6.99461C1.86832 6.51702 1.90903 5.7834 2.38662 5.35604L3.25138 4.58222C3.72898 4.15485 4.46259 4.19556 4.88996 4.67316L5.91996 5.82421L8.99604 2.38662C9.42341 1.90903 10.157 1.86832 10.6346 2.29568L11.4994 3.0695Z'
              />
            </mask>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M11.4994 3.0695C11.977 3.49687 12.0177 4.23049 11.5903 4.70808L6.85258 10.0026C6.42521 10.4802 5.6916 10.5209 5.214 10.0935L5.07167 9.96617C4.93899 9.90211 4.81638 9.81154 4.71203 9.69493L4.48493 9.44114L4.34924 9.31972C4.25134 9.23211 4.17179 9.13163 4.11087 9.02312L2.29568 6.99461C1.86832 6.51702 1.90903 5.7834 2.38662 5.35604L3.25138 4.58222C3.72898 4.15485 4.46259 4.19556 4.88996 4.67316L5.91996 5.82421L8.99604 2.38662C9.42341 1.90903 10.157 1.86832 10.6346 2.29568L11.4994 3.0695Z'
              fill='white'
            />
            <path
              d='M11.5903 4.70808L13.0807 6.04175L13.0807 6.04175L11.5903 4.70808ZM11.4994 3.0695L10.1657 4.55991L10.1657 4.55991L11.4994 3.0695ZM6.85258 10.0026L8.34299 11.3363H8.34299L6.85258 10.0026ZM5.214 10.0935L3.88033 11.5839L3.88033 11.5839L5.214 10.0935ZM5.07167 9.96617L6.40534 8.47577L6.19523 8.28775L5.94132 8.16514L5.07167 9.96617ZM4.71203 9.69493L6.20244 8.36126L6.20244 8.36125L4.71203 9.69493ZM4.48493 9.44114L5.97534 8.10747L5.90132 8.02475L5.8186 7.95073L4.48493 9.44114ZM4.34924 9.31972L5.68292 7.82932L5.68292 7.82931L4.34924 9.31972ZM4.11087 9.02312L5.85483 8.04403L5.74749 7.85284L5.60128 7.68945L4.11087 9.02312ZM2.29568 6.99461L0.805276 8.32828L0.805277 8.32829L2.29568 6.99461ZM2.38662 5.35604L3.7203 6.84644L3.7203 6.84644L2.38662 5.35604ZM3.25138 4.58222L1.91771 3.09181L3.25138 4.58222ZM4.88996 4.67316L6.38037 3.33948L6.38037 3.33948L4.88996 4.67316ZM5.91996 5.82421L4.42956 7.15788L5.91996 8.82344L7.41037 7.15788L5.91996 5.82421ZM8.99604 2.38662L7.50564 1.05295V1.05295L8.99604 2.38662ZM10.6346 2.29568L9.30095 3.78609L9.30095 3.78609L10.6346 2.29568ZM13.0807 6.04175C14.2447 4.74103 14.1338 2.74303 12.8331 1.57909L10.1657 4.55991C9.82017 4.25071 9.79071 3.71994 10.0999 3.37441L13.0807 6.04175ZM8.34299 11.3363L13.0807 6.04175L10.0999 3.37441L5.36217 8.66893L8.34299 11.3363ZM3.88033 11.5839C5.18105 12.7479 7.17905 12.637 8.34299 11.3363L5.36217 8.66893C5.67137 8.32339 6.20214 8.29394 6.54768 8.60313L3.88033 11.5839ZM3.73799 11.4566L3.88033 11.5839L6.54768 8.60313L6.40534 8.47577L3.73799 11.4566ZM5.94132 8.16514C6.04001 8.2128 6.1294 8.27963 6.20244 8.36126L3.22162 11.0286C3.50336 11.3435 3.83796 11.5914 4.20202 11.7672L5.94132 8.16514ZM6.20244 8.36125L5.97534 8.10747L2.99452 10.7748L3.22162 11.0286L6.20244 8.36125ZM3.01557 10.8101L3.15126 10.9315L5.8186 7.95073L5.68292 7.82932L3.01557 10.8101ZM2.36691 10.0022C2.53411 10.3 2.75155 10.5739 3.01557 10.8101L5.68292 7.82931C5.75112 7.89035 5.80947 7.96323 5.85483 8.04403L2.36691 10.0022ZM5.60128 7.68945L3.78609 5.66094L0.805277 8.32829L2.62046 10.3568L5.60128 7.68945ZM3.78609 5.66094C4.09529 6.00648 4.06583 6.53724 3.7203 6.84644L1.05295 3.86563C-0.247771 5.02956 -0.358659 7.02756 0.805276 8.32828L3.78609 5.66094ZM3.7203 6.84644L4.58506 6.07263L1.91771 3.09181L1.05295 3.86563L3.7203 6.84644ZM4.58506 6.07263C4.23952 6.38182 3.70875 6.35237 3.39955 6.00683L6.38037 3.33948C5.21643 2.03876 3.21843 1.92788 1.91771 3.09181L4.58506 6.07263ZM3.39955 6.00683L4.42956 7.15788L7.41037 4.49053L6.38037 3.33948L3.39955 6.00683ZM7.50564 1.05295L4.42956 4.49053L7.41037 7.15788L10.4865 3.7203L7.50564 1.05295ZM11.9683 0.805277C10.6676 -0.358658 8.66957 -0.247773 7.50564 1.05295L10.4865 3.7203C10.1773 4.06584 9.64648 4.09529 9.30095 3.78609L11.9683 0.805277ZM12.8331 1.5791L11.9683 0.805277L9.30095 3.78609L10.1657 4.55991L12.8331 1.5791Z'
              fill='#0D0F10'
              mask='url(#path-1-outside-1_3511_10134)'
            />
          </svg>
        ) : null}
      </div>
    </Wrapper>
  );
};
