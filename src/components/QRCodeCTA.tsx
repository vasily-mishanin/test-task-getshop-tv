type StartBannerProps = {
  bannerImgUrl: string;
  text: string;
};

function QRCodeCTA({ text, bannerImgUrl }: StartBannerProps) {
  return (
    <aside className='absolute w-[315px] h-[110px] flex items-center gap-[10px] bottom-[40px] right-[40px] cursor-pointer transition-opacity duration-300'>
      <p className='text-right text-primary_white'>{text}</p>
      <img src={bannerImgUrl} alt='Scan QR code for additional information' />
    </aside>
  );
}
export default QRCodeCTA;
