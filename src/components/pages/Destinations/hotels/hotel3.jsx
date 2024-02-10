import React from 'react';
import './hotel.css';
import HotelImg3 from './hotel3.jpg'

const Hotel3 = () => {
  return(
  <div className="container">
    
  <div className="image">
    <img src={HotelImg3} alt="Image" />
  </div>
  <div className="details">
    <h2>LEO Red Colombo</h2>
    <p>South Asia's first ever lean luxury hotel situated 
      right at the heart of Colombo. The vibrant rooftop 
      bar and serene infinity pool overlooking the Colombo 
      Skyline provides every sense of relaxation and rejuvenation for the adventurous traveller!
    </p>
    <div className="discover-button">
        <button>Discover More</button>
    </div>
  </div>
</div>
  );
};

export default Hotel3;