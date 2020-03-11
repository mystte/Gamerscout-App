import { useMediaQuery } from 'react-responsive';

const UseMediaQueries = () => {
  const isDesktop = useMediaQuery({ minWidth: 700 });

  const getResponsiveStyle = styleName => {
    if (isDesktop) return styleName;
    return `mb${styleName.substr(0, 1).toUpperCase()}${styleName.substr(1)}`;
  };

  return {
    isDesktop,
    getResponsiveStyle,
  };
};

export default UseMediaQueries;
