import QRCodeCTA from '../QRCodeCTA';
import { SplitScreen } from '../layout/SplitScreen';
import qrCodeImage from '../../assets/qr-code.png';
import Button from '../ui/Button';

type CTAPageProps = {
  onClose: () => void;
};

function CTAPage({ onClose }: CTAPageProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <SplitScreen leftWeight={'380px'}>
        <h1 className='bg-primary_blue'>Left</h1>
        <h1 className='hidden'>Rigt</h1>
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
export default CTAPage;
