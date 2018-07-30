import React, { Component } from 'react';

import './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlip: false,
    };
  }

  handleClick = () => {
    const { side, onFlip, id } = this.props;
    onFlip(side, id);
    const { isFlip } = this.state;
    this.setState({ isFlip: !isFlip });
  }

  render() {
    const { side, shirt, id } = this.props;
    const { isFlip } = this.state;

    return (
      <div className="card-container">
        <div
          className={`card ${isFlip ? 'flip' : ''}`}
          onClick={this.handleClick}
          role="presentation"
        >
          <div id={id} className="side" style={{ backgroundImage: `url('${side}')` }} />
          <div className="shirt" style={{ backgroundImage: `url('${shirt}')` }} />
        </div>
      </div>
    );
  }
}

export default Card;
