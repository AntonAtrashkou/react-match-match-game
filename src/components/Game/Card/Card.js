import React, { Component } from 'react';

import './Card.scss';

class Card extends Component {

  handleClick = () => {
    const { side, onFlip, id } = this.props;
    onFlip(side, id);
    // const { isFlip } = this.state;
    // this.setState({ isFlip: !isFlip }, () => {
    //   onFlip(side, id);
    // });
  }

  render() {
    const { side, shirt, isFlip, condition } = this.props;

    // const { isFlip } = this.state;

    console.log(isFlip);
    console.log(condition);

    return (
      <div className="card-container">
        <div
          className={`card ${isFlip ? 'flip' : ''} ${condition ? 'none' : ''}`}
          onClick={this.handleClick}
          role="presentation"
        >
          <div className="side" style={{ backgroundImage: `url('${side}')` }} />
          <div className="shirt" style={{ backgroundImage: `url('${shirt}')` }} />
        </div>
      </div>
    );
  }
}

export default Card;
