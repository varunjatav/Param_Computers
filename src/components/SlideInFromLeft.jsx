import React, { useEffect, useRef, useState } from "react";

const SlideInFromLeft = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load in case already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
        <div
        ref={ref}
        className={`transform transition-transform ${
          isVisible ? 'animate-slideInFromLeft' : 'opacity-0'
        }`}
        >
          {children}
        </div>
    )   
};

export default SlideInFromLeft;