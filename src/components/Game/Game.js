import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Game.scss';
import Card from './Card';

import card1 from '../../assets/img/cards/01.png';
import card2 from '../../assets/img/cards/02.png';
import card3 from '../../assets/img/cards/03.png';
import card4 from '../../assets/img/cards/04.png';
import card5 from '../../assets/img/cards/05.png';
import card6 from '../../assets/img/cards/06.png';
import card7 from '../../assets/img/cards/07.png';
import card8 from '../../assets/img/cards/08.png';
import card9 from '../../assets/img/cards/09.png';
import card10 from '../../assets/img/cards/10.png';
import card11 from '../../assets/img/cards/11.png';
import card12 from '../../assets/img/cards/12.png';

class Game extends Component {
  static propTypes = {
    currentDifficulty: PropTypes.array,
    currentShirtUrl: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      cardsPair: [],
    };
    this.cardsSideImages = [
      card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12,
    ];
  }

  shuffleArray = (a) => {
    const items = a;
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }

  handleFlip = (imgUrl, id) => {
    const { cardsPair } = this.state;
    const cardInfo = {
      cardId: id,
      cardUrl: imgUrl,
    };
    this.setState({ cardsPair: [...cardsPair, cardInfo] });
  }

  createCardsGame = () => {
    const { currentDifficulty, currentShirtUrl } = this.props;
    const column = currentDifficulty[0];
    const row = currentDifficulty[1];
    let arr = this.cardsSideImages.slice(0, (column * row) / 2);
    arr = arr.concat(arr);
    arr = this.shuffleArray(arr);
    const rows = [];
    for (let i = 0; i < row; i++) {
      rows.push(arr.slice(i * column, column * (i + 1)));
    }
    return rows.map((cardImgs, cardRow) => (
      <div className="cardsRow" key={Math.random()}>
        {cardImgs.map((cardImg, cardPlace) => (
          <Card
            id={`${cardRow}${cardPlace}`}
            key={Math.random()}
            side={cardImg}
            shirt={currentShirtUrl}
            onFlip={this.handleFlip}
          />))
        }
      </div>
    ));
  }

  // checkPairs() {
  //   const { cardsPair } = this.state;
  //   if (cardsPair.length === 1) {
  //     if (cardsPair[0].id === cardsPair[1].id) {
  //       this.setState({ cardsPair: [cardsPair[0]] });

  //     }
  //   }else if(cardsPair[0].cardUrl === cardsPair[1].cardUrl) {

  //   }
  // }


  render() {
    return (
      <div>
        {this.createCardsGame()}
      </div>
    );
  }
}

export default Game;
