import React, { Component } from 'react';
import { setOdds } from '../actions';

class Bet extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <p>{this.props.fixture.homeTeam.team_name} vs {this.props.fixture.awayTeam.team_name}</p>
          </li>
        </ul>
      </div>
    );
  }
};

export default Bet;
