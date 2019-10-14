import { useEffect, useState, useRef } from 'react';

const useResize = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (targetRef.current) {
        setDimensions({
          width: targetRef.current.offsetWidth,
          height: targetRef.current.offsetHeight,
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize); };
  }, []);

  return {
    dimensions,
    targetRef,
  };
};

export default useResize;
