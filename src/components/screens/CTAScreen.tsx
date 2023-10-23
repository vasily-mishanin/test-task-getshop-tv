import QRCodeCTA from '../QRCodeCTA';
import { SplitScreen } from '../layout/SplitScreen';
import qrCodeImage from '../../assets/qr-code.png';
import Button from '../ui/Button';
import Form from '../Form';
import { useEffect } from 'react';

type CTAScreenProps = {
  onClose: () => void;
};

function CTAScreen({ onClose }: CTAScreenProps) {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const elements = document.querySelectorAll(
      'button, input[type="checkbox"]'
    );
    (elements[4] as HTMLElement).focus();
    console.log({ elements });
    return () => {};
  }, []);

  return (
    <>
      <SplitScreen fullHeight leftWeight={'380px'} leftHeight={'100%'}>
        <Form id='phoneNumberForm' />
        <div className='hidden'></div>
      </SplitScreen>
      <QRCodeCTA
        text={'СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ'}
        bannerImgUrl={qrCodeImage}
      />
      <div className='absolute right-[20px] top-[20px]'>
        <Button buttonType='close' onClick={handleClose}>
          <span className='text-3xl'>&#10005;</span>
        </Button>
      </div>
    </>
  );
}
export default CTAScreen;
