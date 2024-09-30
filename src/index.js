import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color='blue' onSetRating={setMovieRating} />
      <h3>This movie was rated {movieRating} stars</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating
      size={24}
      color='red'
      maxRating={10}
      className='test'
      defaultRating={3}
    />
    <StarRating />

    <Test />
  </React.StrictMode>
);
