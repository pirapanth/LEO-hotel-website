import React from 'react';
import './hotel.css';
import HotelImg1 from './hotel1.jpg'

const Hotel1 = () => {
  return(
  <div className="container">
    
  <div className="image">
    <img src={HotelImg1} alt="Image" />
  </div>
  <div className="details">
    <h2>LEO Grand Colombo</h2>
    <p>Our 5-star hotel in the heart of 
        Colombo offers timeless elegance and grandeur.
         The perfect place to relish global cuisines 
         after a business conference or a memorable rendezvous!
    </p>
    <div className="discover-button">
        <button>Discover More</button>
    </div>
  </div>
</div>
  );
};

export default Hotel1;