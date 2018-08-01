import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Menu.scss';

import Shirt from './Shirt';
import shirt1 from '../../assets/img/shirts/back-side1.png';
import shirt2 from '../../assets/img/shirts/back-side2.png';
import shirt3 from '../../assets/img/shirts/back-side3.png';


class Menu extends Component {
  static propTypes = {
    setDifficulty: PropTypes.func,
    setShirt: PropTypes.func,
    currentDifficulty: PropTypes.string,
  }

  componentDidMount() {
    const { setShirt } = this.props;
    setShirt(shirt1);
  }

  handleSetDiff = (diff) => {
    const { setDifficulty } = this.props;
    setDifficulty(diff);
  }

  render() {
    const { currentDifficulty } = this.props;

    return (
      <div className="menu">

        {/* <button type="button">Hihscore</button> */}

        <div className="allCardShirt">
          <h2>
            Choose a card shirt
          </h2>
          <div className="cardShirts">
            <Shirt shirt={shirt1} />
            <Shirt shirt={shirt2} />
            <Shirt shirt={shirt3} />
          </div>
        </div>

        <div>
          <h2>
            Select difficulty
          </h2>
          <h2>
            Current Difficulty -
            <span>
              {currentDifficulty}
            </span>
          </h2>
          <div className="difficulty">
            <button
              type="button"
              className="difficulty-item"
              onClick={() => this.handleSetDiff({ easy: [5, 2] })}
            >
              Easy
            </button>
            <button
              type="button"
              className="difficulty-item"
              onClick={() => this.handleSetDiff({ normal: [6, 3] })}
            >
              Normal
            </button>
            <button
              type="button"
              className="difficulty-item"
              onClick={() => this.handleSetDiff({ hard: [8, 3] })}
            >
              Hard
            </button>
          </div>
        </div>

        <Link to="/game">
          Start
        </Link>

        <Link to="/score">
          Score
        </Link>
      </div>
    );
  }
}

export default Menu;
