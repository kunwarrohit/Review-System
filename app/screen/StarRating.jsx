"use client";
import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (newRating) => {
    setHoverRating(newRating);
  };

  const handleMouseOut = () => {
    setHoverRating(0);
  };

  const handleClick = (newRating) => {
    setRating(newRating);
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        onMouseOver={() => handleMouseOver(i)}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick(i)}
        style={{
          cursor: "pointer",
          color: i <= (hoverRating || rating) ? "yellow" : "gray",
        }}
      >
        ★
      </span>
    );
  }

  return <div>{stars}</div>;
}

export default StarRating;
