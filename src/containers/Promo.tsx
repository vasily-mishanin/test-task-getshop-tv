import { useState } from 'react';
import StartScreen from '../components/screens/StartScreen';
import CTAScreen from '../components/screens/CTAScreen';

function Promo() {
  const [videoTimestamp, setVideoTimestamp] = useState(0);
  const [startTimestamp, setStartTimeStamp] = useState(Date.now);
  const [nextVideoTimestamp, setNextVideoTimestamp] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  console.log('nextVideoTimestamp ', nextVideoTimestamp);

  const handleBannerClick = () => {
    const clickTimestamp = Date.now();
    const nextVideoTimestamp = Math.floor(
      (clickTimestamp - startTimestamp) / 1000
    );
    console.log('nextVideoTimestamp ', nextVideoTimestamp);
    setNextVideoTimestamp(nextVideoTimestamp);
    setPageNumber(2);
  };

  const handleClose = () => {
    setPageNumber(1);
  };

  const backgroundImage = pageNumber > 1 ? ' bg-boy-with-dog ' : '';

  return (
    <div className={'relative w-[1280px] h-[720px]' + backgroundImage}>
      {pageNumber === 1 && (
        <StartScreen
          onClick={handleBannerClick}
          videoTimestamp={videoTimestamp || nextVideoTimestamp}
        />
      )}
      {pageNumber === 2 && <CTAScreen onClose={handleClose} />}
    </div>
  );
}
export default Promo;
