import StartBanner from '../StartBanner';
import bannerImage from '../../assets/banner-start.png';
import { useEffect, useState } from 'react';
import { wait } from '../../utils/helpers';
const DELAY_BEFORE_BANNER = 5000;

type StartScreenProps = {
  videoTimestamp: number;
  onClick: () => void;
};

function StartScreen({ videoTimestamp, onClick }: StartScreenProps) {
  const [bannerIsShown, setBannerIsShown] = useState(false);

  useEffect(() => {
    wait(DELAY_BEFORE_BANNER).then(() => setBannerIsShown(true));
  }, []);

  return (
    <div className='relative w-full h-full bg-green-200'>
      <iframe
        className='w-full h-full'
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/M7FIvfx5J10?autoplay=1&mute=1&start=${videoTimestamp}`}
        title='YouTube video player'
        allow='accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      <StartBanner
        onClick={onClick}
        isVisible={bannerIsShown}
        bannerImgUrl={bannerImage}
      />
    </div>
  );
}
export default StartScreen;
