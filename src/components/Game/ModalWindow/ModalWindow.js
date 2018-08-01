import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ModalWindow.scss';

class ModalWindow extends Component {


  render() {
    const { gameStatus, gameTime, userName, userEmail, postScore } = this.props;
    if (gameTime && userName && gameStatus && userEmail) {
      const params = {
        username: userName,
        email: userEmail,
        score: gameTime,
      };
      postScore(params);
    }
    return (
      <div>
        {gameStatus && (
        <div className="victory">
          <h2>
            Congrats!
          </h2>
          <p>
            { userName } , you are the winer! Your time: { gameTime }
          </p>
          <Link to="/menu">
            Menu
          </Link>
        </div>
        )}
      </div>
    );
  }
}

export default ModalWindow;
