import React, { useState, useEffect } from 'react';
import './slider.css';
import Image1 from './image1.jpg'
import Image2 from './image2.jpg'
import Image3 from './image3.jpg'
import Image4 from './image4.jpg'

const images = [
Image1, 
Image2, 
Image3, 
Image4,  
];

const Slideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="image-slideshow">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`image-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="slide-content">
            <h1>LEO</h1><p>Hotels & Resorts</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
