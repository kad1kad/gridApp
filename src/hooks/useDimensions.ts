import { useState, useEffect, RefObject } from "react";

const useDimensions = (ref: RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  }, [ref]);
  return dimensions;
};
export default useDimensions;
