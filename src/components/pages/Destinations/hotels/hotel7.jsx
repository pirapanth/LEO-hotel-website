import React from 'react';
import './hotel.css';
import HotelImg7 from './hotel7.jpg'

const Hotel1 = () => {
  return(
  <div className="container">
    
  <div className="image">
    <img src={HotelImg7} alt="Image" />
  </div>
  <div className="details">
    <h2>Trinco Blu By Leo</h2>
    <p>How about waking up to a 
      deep blue sea whose crashing waves invite 
      you for a cup of tea or to watch the beautiful dolphins dive for breakfast?
    </p>
    <div className="discover-button">
        <button>Discover More</button>
    </div>
  </div>
</div>
  );
};

export default Hotel1;