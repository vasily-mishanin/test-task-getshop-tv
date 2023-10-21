import QRCodeCTA from '../QRCodeCTA';
import { SplitScreen } from '../layout/SplitScreen';
import qrCodeImage from '../../assets/qr-code.png';

function CTAPage() {
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
    </>
  );
}
export default CTAPage;
