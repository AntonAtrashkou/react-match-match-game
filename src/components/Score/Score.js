import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Score extends Component {
  static propTypes = {
    // saveUser: PropTypes.func,
    // history: PropTypes.object,
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="score">
        <h2>
          Top 10 players
        </h2>
        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Time
              </th>
              <th>
                Difficulty
              </th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>

    );
  }
}

export default Score;
