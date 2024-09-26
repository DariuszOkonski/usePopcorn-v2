import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={7} />
    <StarRating maxRating={10} />
    <StarRating />
  </React.StrictMode>
);
