import StartBanner from './StartBanner';
import bannerImage from '../assets/banner-start.png';
import { useEffect, useState } from 'react';
import { wait } from '../utils/helpers';
const DELAY_BEFORE_BANNER = 5000;

type StartPageProps = {
  videoTimetamp: number;
  onClick: () => void;
};

function StartPage({ videoTimetamp, onClick }: StartPageProps) {
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
        src={`https://www.youtube.com/embed/M7FIvfx5J10?autoplay=1&mute=1&start=${videoTimetamp}`}
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
export default StartPage;
