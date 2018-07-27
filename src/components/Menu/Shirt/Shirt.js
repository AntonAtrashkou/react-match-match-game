import React, { Component } from 'react';

class Shirt extends Component {

  handleSetShirt = () => {
    const { shirt, setShirt } = this.props;
    setShirt(shirt);
  }

  render() {
    const { shirt } = this.props;
    return (
      <div
        className="cardShirt"
        role="presentation"
        onClick={this.handleSetShirt}
      >
        <img src={shirt} alt="1" />
      </div>
    );
  }
}

export default Shirt;
