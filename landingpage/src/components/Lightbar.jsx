import React from "react";
import { useEffect, useState } from "react";

function Lightbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = currentScrollPos < prevScrollPos;
  
        setPrevScrollPos(currentScrollPos);
  
        if (currentScrollPos === 0) {
          setIsVisible(true);
        } else if (isScrollingUp) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);
  
    return (
      <div className={`w-full my-auto ${prevScrollPos === 0 ? "h-16" : "h-16 top-0"} flex flex-row bg-gray-100 ${isVisible ? 'opacity-80' : 'opacity-0'} fixed transition-opacity duration-50 z-10`}>
        <ul className="flex flex-row space-x-8 my-auto font-bold text-sm mx-8 hover:cursor-pointer">
          <li className="text-red-300">About</li>
          <li>Learn</li>
          <li>Jobs</li>
        </ul>
      </div>
    );
  }

export default Lightbar;