import { useState } from 'react';
import './CheckBox.css';
import checkMark from './mark.svg';

type CheckBoxProps = {
  id: string;
  name: string;
  label: string;
  onClick: () => void;
};

function CheckBox({ id, name, label, onClick }: CheckBoxProps) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((prev) => !prev);
    onClick();
  };

  return (
    <div className='checkbox-wrapper mb-3 '>
      <input
        className='w-0 absolute'
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
