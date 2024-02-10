import React from 'react';
import './hotel.css';
import HotelImg8 from './hotel8.jpg'

const Hotel1 = () => {
  return(
  <div className="container">
    
  <div className="image">
    <img src={HotelImg8} alt="Image" />
  </div>
  <div className="details">
    <h2>Ellaidhoo Maldives By Leo</h2>
    <p>Dive into the most candid 
      experience with the ocean at 
      our house reef with an awe-inspiring 
      diversity of underwater life.
    </p>
    <div className="discover-button">
        <button>Discover More</button>
    </div>
  </div>
</div>
  );
};

export default Hotel1;