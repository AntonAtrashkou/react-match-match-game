import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Game.scss';
import Card from './Card';
import Timer from './Timer/Timer';
import ModalWindow from './ModalWindow/ModalWindow';

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
    setTime: PropTypes.func,
    userName: PropTypes.string,
    userEmail: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.rowKeys = ['key1', 'key2', 'key3'];
    this.cardsSideImages = [
      card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12,
    ];
    this.state = {
      cardPair: [],
      cardsRows: this.createCardsGame(),
      gameStatus: false,
      time: '',
    };
  }

  setTime = (gameTime) => {
    const { setTime } = this.props;
    this.setState({ time: gameTime });
    setTime(gameTime);
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
    const { cardPair } = this.state;
    if (cardPair.length < 2) {
      const cardInfo = {
        cardId: id,
        cardUrl: imgUrl,
      };
      this.setState(
        { cardPair: [...cardPair, cardInfo] },
        () => this.checkPairs(),
      );
    }
  }

  createCardsGame = () => {
    const { currentDifficulty } = this.props;
    const column = currentDifficulty[0];
    const row = currentDifficulty[1];
    let arr = this.cardsSideImages.slice(0, (column * row) / 2);
    arr = arr.concat(arr);
    arr = this.shuffleArray(arr);
    const rows = [];
    for (let i = 0; i < row; i++) {
      rows.push(arr.slice(i * column, column * (i + 1)));
    }
    return rows;
  }

  checkPairs = () => {
    const { cardPair, cardsRows } = this.state;
    if (cardPair.length === 2) {
      if (cardPair[0].cardUrl === cardPair[1].cardUrl) {
        const cleared = cardsRows.map(row => row.map(img => (img === cardPair[0].cardUrl ? null : img)));
        setTimeout(() => {
          this.setState(
            { cardPair: [], cardsRows: cleared },
            () => {
              let gameStatus = true;
              this.state.cardsRows.forEach((row) => {
                row.forEach((item) => {
                  if (item !== null) {
                    gameStatus = false;
                  }
                });
              });
              this.setState({ gameStatus });
            },
          );
        }, 1000);
      } else {
        setTimeout(() => { this.setState({ cardPair: [] }); }, 1000);
      }
    }
  }

  checkFlip = (cardPair, cardImg, cardId) => {
    for (let i = 0; i < cardPair.length; i++) {
      if (cardPair[i].cardUrl === cardImg && cardPair[i].cardId === cardId) {
        return true;
      }
    }
    return false;
  }

  render() {
    const { currentShirtUrl, userName, userEmail, postScore } = this.props;
    const { cardsRows, cardPair, gameStatus, time } = this.state;
    return (
      <div>
        <Timer gameStatus={gameStatus} setPlayerTime={this.setTime} />
        <ModalWindow gameStatus={gameStatus} gameTime={time} userName={userName} userEmail={userEmail} postScore={postScore} />
        {cardsRows.map((cardImgs, cardRow) => (
          <div className="cardsRow" key={this.rowKeys[cardRow]}>
            {cardImgs.map((cardImg, cardPlace) => (
              <Card
                id={`${cardRow}${cardPlace}`}
                key={`${this.rowKeys[cardRow] + cardRow + cardPlace}`}
                side={cardImg}
                shirt={currentShirtUrl}
                isFlip={this.checkFlip(cardPair, cardImg, `${cardRow}${cardPlace}`)}
                onFlip={this.handleFlip}
              />))
            }
          </div>
        ))}
      </div>
    );
  }
}

export default Game;
