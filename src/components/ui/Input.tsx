import { useEffect, useState } from 'react';
import { inputToMask } from '../../utils/helpers';

type InputProps = {
  value: string;
  onChange?: (value: string) => void;
};

const INPUT_MASK = '+7(___)___-__-__';

export function PhoneNumberInput({ value, onChange }: InputProps) {
  const [mask, setMask] = useState(INPUT_MASK);

  useEffect(() => {
    const updatedMask = inputToMask(value, INPUT_MASK);
    setMask(updatedMask);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let enteredNumber = e.target.value;
    console.log('INPUT: ', enteredNumber);
    const updatedMask = inputToMask(enteredNumber, INPUT_MASK);
    setMask(updatedMask);
    // onChange(enteredNumber);
  };

  console.log('INPUT-value: ', value);

  return (
    <div className='mb-2'>
      <h1 className='text-2xl mb-3'>Введите ваш номер мобильного телефона</h1>
      <p className='text-3xl font-bold tracking-wider mb-3'>{mask}</p>
      <p className='text-sm'>
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>

      <input
        id='phoneNumber'
        type='number'
        value={value}
        onChange={handleChange}
        style={{ width: '0', display: 'none' }}
      />
    </div>
  );
}
