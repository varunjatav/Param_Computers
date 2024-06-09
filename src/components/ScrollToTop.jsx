import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
   // Extracts pathname property(key) from an object
   const { pathname } = useLocation();
   console.log(!pathname.includes("/syllabus"));

   // Automatically scrolls to top whenever pathname changes
  
    useEffect(() => {
    if(!pathname.includes("/syllabus") && !pathname.includes("/instructor")){
      window.scrollTo(0, 0);
    }
    
   
    }, [pathname]);
   
  return null;
}

export default ScrollToTop;