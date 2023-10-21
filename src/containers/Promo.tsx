import { useState } from 'react';
import StartPage from '../components/pages/StartPage';
import CTAPage from '../components/pages/CTAPage';

function Promo() {
  const [videoTimetamp, setVideoTimestamp] = useState(0);
  const [currentTimestamp, setCurrentTimeStamp] = useState(Date.now);
  const [nextVideoTimestamp, setNextVideoTimestamp] = useState(videoTimetamp);
  const [pageNumber, setPageNumber] = useState(1);

  const handleBannerClick = () => {
    const clickTimestamp = Date.now();
    const nextVideoTimestamp = (clickTimestamp - currentTimestamp) / 1000;
    console.log('nextVideoTimestamp ', nextVideoTimestamp);
    setNextVideoTimestamp(nextVideoTimestamp);
    setPageNumber(2);
  };

  const backgroundImage = pageNumber > 1 ? ' bg-boy-with-dog ' : '';

  return (
    <div className={'relative w-[1280px] h-[720px]' + backgroundImage}>
      {pageNumber === 1 && (
        <StartPage onClick={handleBannerClick} videoTimestamp={videoTimetamp} />
      )}
      {pageNumber === 2 && <CTAPage />}
    </div>
  );
}
export default Promo;
