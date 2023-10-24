import QRCodeCTA from '../QRCodeCTA';
import { SplitScreen } from '../layout/SplitScreen';
import qrCodeImage from '../../assets/qr-code.png';
import Button from '../ui/Button';
import Form from '../Form';
import { useEffect, useRef, useState } from 'react';
import Counter from '../Counter';
const USER_INCATIVITY_LIMIT_ms = 1000000;
const COUNTER_INTERVAL_ms = 1000;
const CLOSE_TIMEOUT = USER_INCATIVITY_LIMIT_ms / COUNTER_INTERVAL_ms;

type CTAScreenProps = {
  onClose: () => void;
};

function CTAScreen({ onClose }: CTAScreenProps) {
  const [toggleCounter, setToggleCounter] = useState(false);
  const closeTimerRef = useRef<number | undefined>();

  const handleClose = () => {
    onClose();
  };

  const handleUserIsActive = () => {
    // TODO
    // if (closeTimerRef.current) {
    clearTimeout(closeTimerRef.current);

    setToggleCounter((prev) => !prev);
    closeTimerRef.current = setTimeout(handleClose, USER_INCATIVITY_LIMIT_ms);
    // }
  };

  useEffect(() => {
    closeTimerRef.current = setTimeout(handleClose, USER_INCATIVITY_LIMIT_ms);

    return () => {
      clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(
      'button, input[type="checkbox"]'
    );

    (elements[4] as HTMLElement).focus();

    console.log({ elements });

    const handleKeyDown = (event: KeyboardEvent) => {
      const currentElement = document.activeElement;
      const navItems = Array.from(elements);

      if (event.key === 'Enter') {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement.id === 'closeScreen') {
          handleClose();
        }
      }

      const currentIndex = navItems.indexOf(currentElement as HTMLElement);
      let nextIndex;

      switch (event.key) {
        case 'ArrowUp':
          if ([11, 12, 13].includes(currentIndex)) {
            nextIndex = currentIndex - 1;
          } else if (currentIndex === 10) {
            nextIndex = 8;
          } else {
            nextIndex = currentIndex - 3;
          }
          break;
        case 'ArrowDown':
          if ([6, 7].includes(currentIndex)) {
            nextIndex = 9;
          } else if (currentIndex === 8) {
            nextIndex = 10;
          } else if ([9, 10].includes(currentIndex)) {
            nextIndex = 11;
          } else if (currentIndex === 11) {
            nextIndex = 12;
          } else {
            nextIndex = currentIndex + 3;
          }
          break;
        case 'ArrowLeft':
          nextIndex = currentIndex - 1;
          break;
        case 'ArrowRight':
          nextIndex = currentIndex + 1;
          break;
        default:
          return;
      }

      if (nextIndex >= 0 && nextIndex < elements.length) {
        (elements[nextIndex] as HTMLElement).focus();
        event.preventDefault();
      }

      handleUserIsActive();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <SplitScreen fullHeight leftWeight={'380px'} leftHeight={'100%'}>
        <Form id='phoneNumberForm' onActive={handleUserIsActive} />
        <div className='hidden'></div>
      </SplitScreen>
      <QRCodeCTA
        text={'СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ'}
        bannerImgUrl={qrCodeImage}
      />
      <div className='absolute right-[20px] top-[20px]'>
        <Button buttonType='close' onClick={handleClose} id='closeScreen'>
          <span className='text-3xl'>&#10005;</span>
        </Button>
      </div>
      <Counter count={CLOSE_TIMEOUT} toggle={toggleCounter} />
    </>
  );
}
export default CTAScreen;
