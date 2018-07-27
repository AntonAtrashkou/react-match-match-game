import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { side, shirt } = this.props;

    return (
      <div className="card-container">
        <div className="card">
          <div className="shirt" style={{ backgroundImage: `url('${shirt}')` }} />
          <div className="side" style={{ backgroundImage: `url('${side}')` }} />
        </div>
      </div>
    );
  }
}

export default Card;
