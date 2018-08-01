import React, { Component } from 'react';

import './Card.scss';

class Card extends Component {
  handleClick = () => {
    const { side, onFlip, id, isFlip } = this.props;
    if (!isFlip) {
      onFlip(side, id);
    }
  }

  render() {
    const { side, shirt, isFlip } = this.props;

    return (
      <div className="card-container">
        {side && (
          <div
            className={`card ${isFlip ? 'flip' : ''}`}
            onClick={this.handleClick}
            role="presentation"
          >
            <div className="side" style={{ backgroundImage: `url('${side}')` }} />
            <div className="shirt" style={{ backgroundImage: `url('${shirt}')` }} />
          </div>
        )}

      </div>
    );
  }
}

export default Card;
