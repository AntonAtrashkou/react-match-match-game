import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Score.scss';

class Score extends Component {
  static propTypes = {
    // saveUser: PropTypes.func,
    // history: PropTypes.object,
  }

  componentDidMount() {
    const { getScore } = this.props;
    getScore();
  }

  scoreList(scoreList) {
    return(
      <ol>
      {
        scoreList.map(item => (
          <li key={item._id}>
            <div>
              <div>{item.username}</div>
              <div>{item.score}</div>
            </div>
          </li>
        ))
      }
    </ol>
    )
  }

  render() {
    const { score } = this.props;
    let scoreListHTML;
    if (score.result) {
      console.log(score);
      const scoreItems = score.result.filter(item => item.score <= 100).sort((a, b) => (b.score - a.score)).slice(0, 10);
      scoreListHTML = this.scoreList(scoreItems);
    }
    return (
      <div className="score">
        {scoreListHTML}
      </div>

    );
  }
}

export default Score;
