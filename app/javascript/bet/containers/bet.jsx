import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setLeagues } from '../actions';
import { setMatchs } from '../actions';
import { setBetsName } from '../actions';

class Bet extends Component {

  componentDidMount() {
    this.props.setLeagues();
    this.props.setMatchs(525);
    this.props.setBetsName(157691);
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
    const match_id = match_selected.value;
    this.props.setBetsName(match_id);
  }

  render() {
    let id = 0;
    return(
      <div>
        <div>
          <select className="custom-select" id="list-league" onChange={this.changeLeague} name="bet[league]" required>
            {
              this.props.leagues.map((league) => {
                return(
                  <option value={league.name} league_id={league.league_id} key={id += 1}>{league.name}</option>
                );
              })
            }
          </select>
        </div>

        <div>
          <select className="custom-select" id="list-match" name="bet[match]" onChange={this.changeMatch} required>
            {
              this.props.matchs.map((match) => {
                return(
                  <option value={match.fixture_id} key={id += 1}>{match.homeTeam.team_name} VS {match.awayTeam.team_name}</option>
                );
              })
            }
          </select>
        </div>

        <div>
          <select className="custom-select" name="bet[name]" required>
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
