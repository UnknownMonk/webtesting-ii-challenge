import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import './App.css';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  ball = () => {
    if (this.state.balls < 4) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 };
      });
    } else if (this.state.balls === 4) {
      this.setState({
        balls: 0
      });
    }
  };

  strike = () => {
    if (this.state.strikes < 3) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    } else if (this.state.strikes === 3) {
      this.setState({ strikes: 0 });
    }
  };

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    } else if (this.state.strikes === 2) {
      this.setState({ strikes: 2 });
    }
  };

  hit = () => {
    this.setState({ balls: 0, strikes: 0 });
  };
  render() {
    return (
      <div className="App">
        <Dashboard
          strike={this.strike}
          ball={this.ball}
          hit={this.hit}
          foul={this.foul}
        />
        <Display balls={this.state.balls} strikes={this.state.strikes} />
      </div>
    );
  }
}

export default App;
