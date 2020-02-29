import React, { Component } from 'react';

class Bet extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <p>{this.props.bet.homeTeam.team_name} vs {this.props.bet.awayTeam.team_name}</p>
          </li>
        </ul>
      </div>
    );
  }
};

export default Bet;
