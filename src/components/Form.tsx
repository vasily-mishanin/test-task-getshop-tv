import { useEffect, useState } from 'react';
import { PhoneNumberInput } from './ui/Input';
import Button from './ui/Button';
import CheckBox from './ui/CheckBox/CheckBox';
const ALLOWED_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

type InputState = {
  value: string;
  isValid?: boolean;
};

function Form() {
  const [enteredNumber, setEnteredNumber] = useState<InputState>({
    value: '',
    isValid: undefined,
  });
  const [agree, setAgree] = useState(false);

  console.log({ enteredNumber, agree });

  const handleAgree = () => {
    setAgree((prev) => !prev);
  };

  const handleNumberButtonsClick = (value?: string) => {
    if (enteredNumber.value.length < 10) {
      setEnteredNumber((prev) => ({ ...prev, value: prev.value + value }));
    }
  };

  const handleDeleteButtonClick = () => {
    setEnteredNumber((prev) => ({ ...prev, value: prev.value.slice(0, -1) }));
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const pressedKey = event.key;
    if (ALLOWED_KEYS.includes(pressedKey)) {
      console.log(`Key pressed: ${event.key}`);
      handleNumberButtonsClick(pressedKey);
    }
    if (pressedKey === 'Backspace') {
      handleDeleteButtonClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <form className='h-full px-12 py-[72px] text-center bg-primary_blue'>
      <PhoneNumberInput value={enteredNumber.value} />
      <div className='flex flex-wrap gap-[10px] py-5 mb-2'>
        <Button buttonType='value' value='1' onClick={handleNumberButtonsClick}>
          <span>1</span>
        </Button>
        <Button buttonType='value' value='2' onClick={handleNumberButtonsClick}>
          <span>2</span>
        </Button>
        <Button buttonType='value' value='3' onClick={handleNumberButtonsClick}>
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
        name='personalDataAgree'
        label='Согласие на обработку персональных данных'
        onClick={handleAgree}
      />
      <Button buttonType='submit' disabled={!enteredNumber.isValid && agree}>
        <span>ПОДТВЕРДИТЬ НОМЕР</span>
      </Button>
    </form>
  );
}
export default Form;
