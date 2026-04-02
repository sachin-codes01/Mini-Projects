import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ totalStars = 5, value, onChange }) => {
  const [hover, setHover] = useState(0);
  const [internalRating, setInternalRating] = useState(0);

  const rating = value !== undefined ? value : internalRating;

  const handleClick = (num) => {
    if (value === undefined) {
      setInternalRating(num);
    }
    if (onChange) {
      onChange(num);
    }
  };

  return (
    <div className="star-rating" onMouseLeave={() => setHover(0)}>
      {Array.from({ length: totalStars }).map((_, i) => {
        const num = i + 1;

        return (
          <span key={num} className="star" onClick={() => handleClick(num)}
            onMouseEnter={() => setHover(num)}
            style={{ color: num <= (hover || rating) ? "gold" : "gray", }}>★</span>
        );
      })}
    </div>
  );
};

export default StarRating;