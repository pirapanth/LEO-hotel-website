import React from 'react';
import './hotel.css';
import HotelImg9 from './hotel9.jpg'

const Hotel1 = () => {
  return(
  <div className="container">
    
  <div className="image">
    <img src={HotelImg9} alt="Image" />
  </div>
  <div className="details">
    <h2>Maldives Dhonveli By Leo</h2>
    <p>Feel an irrepressible wave of 
      excitement as you have the best 
      surfing experience, set to the 
      backdrop of serenity, and pristine blue waters.
    </p>
    <div className="discover-button">
        <button>Discover More</button>
    </div>
  </div>
</div>
  );
};

export default Hotel1;