import React from 'react';

const Display = ({ balls, strikes }) => {
  return (
    <>
      <h3 data-testid="balls">Balls:{balls}</h3>
      <h3 data-testid="strikes">Strikes:{strikes}</h3>
    </>
  );
};

export default Display;
