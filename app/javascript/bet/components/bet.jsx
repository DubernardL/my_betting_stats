import React, { Component } from 'react';
import { setOdds } from '../actions';
import BetList from '../containers/bet_list';

class Bet extends Component {
  render() {
    return (
      <div>
      <h1>yo</h1>
        <ul>
          <li>
            <div>
              {console.log(odd.label_name)}
            </div>
            <div className="d-flex m-2">
              {bet.value}
              <button>
                {bet.odd}
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
};

export default Bet;
