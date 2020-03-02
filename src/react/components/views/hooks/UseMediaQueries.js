import { useMediaQuery } from 'react-responsive';

const UseMediaQueries = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({
    query: '(min-device-width: 1824px)',
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobileDevice,
    isPortrait,
    isRetina,
  };
};

export default UseMediaQueries;
