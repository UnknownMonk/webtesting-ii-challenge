import React from 'react';

const Dashboard = props => {
  return (
    <div>
      <button data-testid="strike" onClick={props.strike}>
        Strike
      </button>
      <button data-testid="ball" onClick={props.ball}>
        Ball
      </button>
      <button data-testid="foul" onClick={props.foul}>
        Foul
      </button>
      <button data-testid="hit" onClick={props.hit}>
        Hit
      </button>
    </div>
  );
};

export default Dashboard;
