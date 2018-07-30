import React, { Component } from 'react';

import './Card.scss';

class Card extends Component {

  componentDidMount() {
    console.log(123);
  }

  handleClick = () => {
    const { side, onFlip, id } = this.props;
    onFlip(side, id);
    // const { isFlip } = this.state;
    // this.setState({ isFlip: !isFlip }, () => {
    //   onFlip(side, id);
    // });
  }

  render() {
    const { side, shirt, isFlip } = this.props;
    // const { isFlip } = this.state;
    console.log(isFlip);

    return (
      <div className="card-container">
        <div
          className={`card ${isFlip ? 'flip' : ''}`}
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
