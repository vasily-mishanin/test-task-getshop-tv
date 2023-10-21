type StartBannerProps = {
  bannerImgUrl: string;
  isVisible: boolean;
  onClick: () => void;
};

function StartBanner({ bannerImgUrl, isVisible, onClick }: StartBannerProps) {
  return (
    <aside
      className={`absolute bottom-[145px] right-[10px] cursor-pointer transition-opacity duration-300 ${
        isVisible ? ' opacity-100' : ' opacity-0'
      } `}
      onClick={onClick}
    >
      <img src={bannerImgUrl} alt='Scan QR code or press OK' />
    </aside>
  );
}
export default StartBanner;
