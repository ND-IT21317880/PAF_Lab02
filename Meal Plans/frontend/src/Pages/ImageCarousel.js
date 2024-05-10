import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; // Import styles
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';


const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg'
  ];
  

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the image every 'interval' milliseconds
    const carouselInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    // Clear the interval when the component unmounts
    return () => clearInterval(carouselInterval);
  }, [images, interval]);

  return (
    <div className="image-carousel">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
    </div>
  );
};

export default ImageCarousel;
