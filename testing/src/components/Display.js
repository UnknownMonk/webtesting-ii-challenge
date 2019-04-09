import React from 'react';

const Display = props => {
  return (
    <>
      <h3>Balls:{props.balls}</h3>
      <h3>Strikes:{props.strikes}</h3>
    </>
  );
};

export default Display;
