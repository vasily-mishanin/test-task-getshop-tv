import { useState } from 'react';

type CheckBoxProps = {
  id: string;
  name: string;
  label: string;
  onClick: () => void;
};

const checkMark = (
  <svg
    width='24'
    height='20'
    viewBox='0 0 24 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <line
      x1='1.06066'
      y1='11.5659'
      x2='8.06066'
      y2='18.5659'
      stroke='black'
      stroke-width='3'
    />
    <line
      x1='6.2953'
      y1='18.5659'
      x2='22.9218'
      y2='1.9394'
      stroke='black'
      stroke-width='3'
    />
  </svg>
);

function CheckBox({ id, name, label, onClick }: CheckBoxProps) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((prev) => !prev);
    onClick();
  };

  return (
    <div className='mb-3'>
      <input
        className='hidden w-0'
        name={name}
        id={id}
        type='checkbox'
        onChange={handleCheck}
      />
      <label
        className='flex gap-5 text-sm py-[6px] px-[10px] hover:cursor-pointer'
        htmlFor={id}
      >
        <div className='shrink-0 w-[40px] h-[40px] flex items-center justify-center border-primary_black border-2'>
          {checked && checkMark}
        </div>
        <span className='text-left text-primary_gray hover:text-primary_black'>
          {label}
        </span>
      </label>
    </div>
  );
}

export default CheckBox;
