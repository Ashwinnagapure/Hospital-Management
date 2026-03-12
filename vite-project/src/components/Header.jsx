import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const originalItems = [
    { id: 1, image: assets.ban1 },
    { id: 2, image: assets.ban2 },
    { id: 3, image: assets.ban3 },
  ];

  const carouselItems = [
    originalItems[originalItems.length - 1],
    ...originalItems,
    originalItems[0],
  ];

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === carouselItems.length - 1) {
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setCurrentIndex(originalItems.length);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='w-full max-w-[95%] lg:max-w-[1505px] mx-auto'>
      <div className='relative overflow-hidden'>
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            isTransitioning ? '' : 'transition-none'
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className='w-full flex-shrink-0'>
              <img
                src={item.image}
                alt={`Slide ${item.id}`}
                className='w-full h-48 sm:h-60 md:h-72 lg:h-96 object-cover' // Responsive heights for different screen sizes
              />
            </div>
          ))}
        </div>

        {/* Previous and Next Icon Buttons */}
        <button
          onClick={handlePrev}
          className='absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 text-lg sm:text-xl'
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className='absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 text-lg sm:text-xl'
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Header;
