import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  getTimeInSeconds() {
    const { time } = this.state;
    return Math.floor(time / 1000);
  }

  startTimer() {
    const start = Date.now();
    this.timer = setInterval(() => {
      const { gameStatus } = this.props;
      if (gameStatus) {
        this.stopTimer();
      }
      this.setState({ time: Date.now() - start });
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    const time = this.getTimeInSeconds();
    const { setPlayerTime } = this.props;
    setPlayerTime(time);
  }

  render() {
    const seconds = this.getTimeInSeconds();
    return (
      <div className="timer">
        {seconds}
      </div>
    );
  }
}

export default Timer;
