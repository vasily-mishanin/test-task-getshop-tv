import { useState } from 'react';
import { PhoneNumberInput } from './ui/Input';
import Button from './ui/Button';
import CheckBox from './ui/CheckBox';

function Form() {
  const [enteredNumber, setEnteredNumber] = useState('');
  console.log({ enteredNumber });

  const handleInput = (value: string) => {
    setEnteredNumber(value);
  };

  const handleNumberButtonsClick = (value?: string) => {
    setEnteredNumber((prev) => prev + value);
  };

  const handleDeleteButtonClick = () => {};

  return (
    <form className='h-full px-12 py-[72px] text-center bg-primary_blue'>
      <PhoneNumberInput onChange={handleInput} value={enteredNumber} />
      <div className='flex flex-wrap gap-[10px] py-5 mb-2'>
        <Button
          buttonType='value'
          value='1'
          id='num1'
          onClick={handleNumberButtonsClick}
        >
          <span>1</span>
        </Button>
        <Button
          buttonType='value'
          value='2'
          id='num2'
          onClick={handleNumberButtonsClick}
        >
          <span>2</span>
        </Button>
        <Button
          buttonType='value'
          value='3'
          id='num3'
          onClick={handleNumberButtonsClick}
        >
          <span>3</span>
        </Button>
        <Button buttonType='value' value='4' onClick={handleNumberButtonsClick}>
          <span>4</span>
        </Button>
        <Button buttonType='value' value='5' onClick={handleNumberButtonsClick}>
          <span>5</span>
        </Button>
        <Button buttonType='value' value='6' onClick={handleNumberButtonsClick}>
          <span>6</span>
        </Button>
        <Button buttonType='value' value='7' onClick={handleNumberButtonsClick}>
          <span>7</span>
        </Button>
        <Button buttonType='value' value='8' onClick={handleNumberButtonsClick}>
          <span>8</span>
        </Button>
        <Button buttonType='value' value='9' onClick={handleNumberButtonsClick}>
          <span>9</span>
        </Button>
        <Button buttonType='delete' onClick={handleDeleteButtonClick}>
          <span>СТЕРЕТЬ</span>
        </Button>
        <Button buttonType='value' value='0' onClick={handleNumberButtonsClick}>
          <span>0</span>
        </Button>
      </div>
      <CheckBox
        id='personalDataAgree'
        name='pdAgree'
        label='Согласие на обработку персональных данных'
      />
      <Button buttonType='submit' disabled>
        <span>ПОДТВЕРДИТЬ НОМЕР</span>
      </Button>
    </form>
  );
}
export default Form;
