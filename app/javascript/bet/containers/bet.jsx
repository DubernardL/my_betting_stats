import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setLeagues } from '../actions';
import { setMatchs } from '../actions';
import { setBetsName } from '../actions';

class Bet extends Component {

  componentDidMount() {
    this.props.setLeagues();
  }

  changeLeague = (event) => {
    const class_selected = document.getElementById('list-league').options;
    const league_selected = class_selected[class_selected.selectedIndex];
    const league_id = league_selected.attributes.league_id.value;
    this.props.setMatchs(league_id);
  }

  changeMatch = (event) => {
    const class_selected = document.getElementById('list-match').options;
    const match_selected = class_selected[class_selected.selectedIndex];
    console.log(match_selected);
    const match_id = match_selected.attributes.fixture_id.value;
    this.props.setBetsName(match_id);
  }

  handleCombine = (event) => {
    const simple_bet = document.getElementById('simple-bet');
    simple_bet.classList.toggle("hidden");
    let value = document.getElementById('combine-switch').value
    if (value == "on") {
      document.getElementById('combine-switch').value = "combine";
    } else {
      document.getElementById('combine-switch').value = "on";
    }
  }

  render() {
    let id = 0;
    return(
      <div>
        <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input" id="combine-switch" onChange={this.handleCombine} name="bet[combine]"></input>
          <label className="custom-control-label" htmlFor="combine-switch"><p>Combined bets</p></label>
        </div>

        <div className="" id="simple-bet">
          <select className="custom-select" id="list-league" onChange={this.changeLeague} name="bet[league]" required>
            <option value="">-- Choose your league --</option>
            {
              this.props.leagues.map((league) => {
                return(
                  <option value={JSON.stringify(league)} league_id={league.league_id} key={id += 1}>{league.name}</option>
                );
              })
            }
          </select>

          <select className="custom-select" id="list-match" onChange={this.changeMatch} name="bet[match]" required>
            <option value="">-- Choose your match --</option>
            {
              this.props.matchs.map((match) => {
                return(
                  <option value={JSON.stringify(match)} fixture_id={match.fixture_id} key={id += 1}>{match.homeTeam.team_name} VS {match.awayTeam.team_name}</option>
                );
              })
            }
          </select>

          <select className="custom-select" name="bet[name]" required>
            <option value="">-- Choose your bet --</option>
            {
              this.props.bets_name.map((bet_name) => {
                return(
                  <option value={bet_name} key={id += 1}>{bet_name}</option>
                );
              })
            }
          </select>
        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setLeagues: setLeagues,
      setMatchs: setMatchs,
      setBetsName: setBetsName,
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    leagues: state.leagues,
    matchs: state.matchs,
    bets_name: state.bets_name
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bet);
