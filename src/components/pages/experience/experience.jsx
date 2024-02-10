import React from 'react';
import './experience.css';
import Ex1 from './ex1.jpg'
import Ex2 from './ex2.jpg'
import Ex3 from './ex3.jpg'
import Ex4 from './ex4.jpg'
import Ex5 from './ex5.jpg'
import Ex6 from './ex6.jpeg'

const images = [
  Ex1,
  Ex2,
  Ex3,
  Ex4,
  Ex5,
  Ex6,
];

const imageDetails = [
  {
    title: 'MULTIPLY YOUR POINTS',
  },
  {
    title: 'GET AWAY & SAVE MORE',
  },
  {
    title: 'EARN UP TO 130K POINTS',
  },
  {
    title: 'A NIGHT ON US',
  },
  {
    title: '3 NIGHTS UNDER $250',
  },
  {
    title: 'EARN UP TO 3X POINTS ON EVERY STAY',
  },
];

const experience = () => {
  return (
    <div className='exp'>
      <br />
      <h1>Experience Something New</h1>
      <p>Close to home or across the world,Leo is there for you with memorable offers and experiences.Check out what is new.</p>
    <div className="card-slider">
      {images.map((imageUrl, index) => (
        <div key={index} className="card">
          <img src={imageUrl} alt={`Image ${index + 1}`} />
          <div className="image-details">
            <h2>{imageDetails[index].title}</h2>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default experience;
