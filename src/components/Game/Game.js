import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    currentDifficulty: PropTypes.object,
    currentShirtUrl: PropTypes.string,
  }

  createCardsGame() {
    const { currentDifficulty, currentShirt } = this.props;
    const cardsSides = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];
  }

  render() {
    return (
      <div>
        game
      </div>
    );
  }
}

export default Game;
