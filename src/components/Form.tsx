import { useEffect, useRef, useState } from 'react';
import { PhoneNumberInput } from './ui/Input';
import Button from './ui/Button';
import CheckBox from './ui/CheckBox/CheckBox';
import { wait } from '../utils/helpers';
import Keyboard from './Keyboard';
import {
  NETLIFY_FN_URL,
  NumveifyResult,
  verifyNumber,
} from '../api/api-numverify';
import ErrorMessage from './ui/ErrorMessage';
const ALLOWED_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const NUMBER_LENGTH = 15;

export type InputState = {
  value: string;
  isValid?: boolean;
};

type FormProps = {
  id: string;
  onActive: () => void;
};

function Form({ id, onActive }: FormProps) {
  const [enteredNumber, setEnteredNumber] = useState<InputState>({
    value: '',
    isValid: undefined,
  });
  const [agree, setAgree] = useState(false);
  const [isFormAccepted, setIsFormAccepted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleAgree = () => {
    onActive();
    setAgree((prev) => !prev);
  };

  const handleNumberButtonsClick = (value?: string) => {
    onActive();
    if (enteredNumber.value.length === NUMBER_LENGTH - 1) {
      setEnteredNumber((prev) => ({
        value: prev.value + value,
        isValid: true,
      }));
    } else if (enteredNumber.value.length < NUMBER_LENGTH) {
      setEnteredNumber((prev) => ({
        value: prev.value + value,
        isValid: undefined,
      }));
    }
  };

  const handleDeleteButtonClick = () => {
    onActive();
    setEnteredNumber((prev) => ({
      value: prev.value.slice(0, -1),
      isValid: undefined,
    }));
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    //onActive();
    const form = formRef.current as HTMLFormElement;
    const activeElement = document.activeElement as HTMLElement;
    const pressedKey = event.key;

    if (pressedKey === 'Enter' && activeElement.id !== 'submitBtn') {
      event.preventDefault();
    }

    if (ALLOWED_KEYS.includes(pressedKey)) {
      const key = form.querySelector('#num' + pressedKey) as HTMLElement;
      key.focus();
      wait(50).then(() => key.blur());
      handleNumberButtonsClick(pressedKey);
    }

    if (pressedKey === 'Backspace') {
      const key = form.querySelector('#backspace') as HTMLElement;
      key.focus();
      wait(100).then(() => key.blur());
      handleDeleteButtonClick();
    }

    if (pressedKey === 'Enter') {
      const value = activeElement.id.slice(-1);

      if (activeElement.id === 'backspace') {
        handleDeleteButtonClick();
      }

      if (activeElement.id === 'personalDataAgree') {
        handleAgree();
      }

      if (ALLOWED_KEYS.includes(value)) {
        handleNumberButtonsClick(value);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const countryCode = 'RU';
    const number = enteredNumber.value;

    if (window.location.hostname.includes('netlify.app')) {
      console.log('Running on Netlify.');

      const response = await fetch(NETLIFY_FN_URL, {
        method: 'POST',
        body: JSON.stringify({ number, countryCode }),
      });
      const result = await response.json();
      handleResult(result.verificationResult as NumveifyResult);
    } else {
      console.log('Running Locally.');
      const verifyResult = await verifyNumber({ countryCode, number });

      handleResult(verifyResult as NumveifyResult);
    }
  };

  const handleResult = (verifyResult: NumveifyResult) => {
    if (verifyResult?.valid) {
      setIsFormAccepted(true);
    } else {
      setEnteredNumber((prev) => ({ ...prev, isValid: false }));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    if (isFormAccepted) {
      (document.querySelector('#closeScreen') as HTMLElement).focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isFormAccepted]);

  const formIsValid = enteredNumber.isValid !== false && agree;

  return (
    <div className='h-full px-12 py-[72px] text-center bg-primary_blue flex flex-col items-center justify-center'>
      {isFormAccepted ? (
        <AppAcceptedMessage />
      ) : (
        <form id={id} ref={formRef} onSubmit={handleSubmit}>
          <PhoneNumberInput enteredNumber={enteredNumber} />
          <Keyboard
            onNumberButtonClick={handleNumberButtonsClick}
            onDeleteButtonClick={handleDeleteButtonClick}
          />

          <CheckBox
            id='personalDataAgree'
            name='personalDataAgree'
            label='Согласие на обработку персональных данных'
            isChecked={agree}
            isHidden={enteredNumber.isValid === false}
            onClick={handleAgree}
          />

          <ErrorMessage
            text='НЕВЕРНО ВВЕДЕН НОМЕР'
            isHidden={enteredNumber.isValid !== false}
          />

          <Button buttonType='submit' disabled={!formIsValid} id='submitBtn'>
            <span>ПОДТВЕРДИТЬ НОМЕР</span>
          </Button>
        </form>
      )}
    </div>
  );
}

export default Form;

const AppAcceptedMessage = () => {
  return (
    <div className='p-4'>
      <h1 className='text-[32px] font-bold leading-9 mb-4'>ЗАЯВКА ПРИНЯТА</h1>
      <p className='text-sm'>
        Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.
      </p>
    </div>
  );
};
