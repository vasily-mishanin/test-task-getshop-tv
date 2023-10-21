import { useState } from 'react';
import StartPage from '../components/StartPage';

function Promo() {
  const [videoTimetamp, setVideoTimestamp] = useState(0);
  const [currentTimestamp, setCurrentTimeStamp] = useState(Date.now);

  const handleBannerClick = () => {
    const clickTimestamp = Date.now();
    const nextVideoTimestamp = (clickTimestamp - currentTimestamp) / 1000;
    console.log('nextVideoTimestamp ', nextVideoTimestamp);
  };

  return (
    <div className='w-[1280px] h-[720px]'>
      <StartPage onClick={handleBannerClick} videoTimetamp={videoTimetamp} />
    </div>
  );
}
export default Promo;
