import { useState } from 'react';
import StartScreen from '../components/screens/StartScreen';
import CTAScreen from '../components/screens/CTAScreen';

function Promo() {
  const [nextVideoTimestamp, setNextVideoTimestamp] = useState(0);
  const [prevBannerClickTimestamp, setPrevBannerClickTimestamp] = useState(
    Date.now
  );
  const [timeSpentOnAnotherPage, setTimeSpentOnAnotherPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const handleBannerClick = () => {
    const bannerClickTime = Date.now();
    const nextVideoStartTime =
      nextVideoTimestamp +
      Math.floor((bannerClickTime - prevBannerClickTimestamp) / 1000) -
      timeSpentOnAnotherPage;
    setPrevBannerClickTimestamp(nextVideoStartTime);
    setNextVideoTimestamp(nextVideoStartTime);
    setPageNumber(2);
  };

  const handleClose = () => {
    setTimeSpentOnAnotherPage(
      Math.floor((Date.now() - prevBannerClickTimestamp) / 1000)
    );
    setPageNumber(1);
  };

  const backgroundImage = pageNumber > 1 ? ' bg-boy-with-dog ' : '';

  return (
    <div className={'relative w-[1280px] h-[720px]' + backgroundImage}>
      {pageNumber === 1 && (
        <StartScreen
          onClick={handleBannerClick}
          videoTimestamp={nextVideoTimestamp}
        />
      )}
      {pageNumber === 2 && <CTAScreen onClose={handleClose} />}
    </div>
  );
}
export default Promo;
