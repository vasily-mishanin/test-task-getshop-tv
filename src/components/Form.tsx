import { useEffect, useRef, useState } from 'react';
import { PhoneNumberInput } from './ui/Input';
import Button from './ui/Button';
import CheckBox from './ui/CheckBox/CheckBox';
import { wait } from '../utils/helpers';
import Keyboard from './Keyboard';
import { verifyNumber } from '../api/api-numverify';
const ALLOWED_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const NUMBER_LENGTH = 10;

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
    onActive();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const verifyResult = await verifyNumber({
      countryCode: 'RU',
      number: enteredNumber.value,
    });
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

  const formIsValid = enteredNumber.isValid && agree;

  return (
    <div className='h-full px-12 py-[72px] text-center bg-primary_blue flex flex-col items-center justify-center'>
      {isFormAccepted ? (
        <AppAcceptedMessage />
      ) : (
        <form
          id={id}
          ref={formRef}
          //className='h-full px-12 py-[72px] text-center bg-primary_blue'
          onSubmit={handleSubmit}
        >
          <PhoneNumberInput enteredNumber={enteredNumber} />
          <Keyboard
            onNumberButtonClick={handleNumberButtonsClick}
            onDeleteButtonClick={handleDeleteButtonClick}
          />

          {enteredNumber.isValid === false ? (
            <div className='w-[284px] h-[52px] text-accent_red font-bold'>
              НЕВЕРНО ВВЕДЕН НОМЕР
            </div>
          ) : (
            <CheckBox
              id='personalDataAgree'
              name='personalDataAgree'
              label='Согласие на обработку персональных данных'
              isChecked={agree}
              onClick={handleAgree}
            />
          )}
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
