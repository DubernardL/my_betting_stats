import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setLeagues } from '../actions';
import { setMatchs } from '../actions';
import { setBetsName } from '../actions';

class Bet extends Component {

  changeSport = (event) => {
    const class_selected = document.getElementById('list-sport').options;
    const sport_selected = class_selected[class_selected.selectedIndex].value;
    if(sport_selected === "football") {
      this.props.setLeagues();
    }
    this.props.setBetsName(sport_selected);
  }

  changeLeague = (event) => {
    const class_selected = document.getElementById('list-league').options;
    const league_selected = class_selected[class_selected.selectedIndex];
    const league_id = JSON.parse(league_selected.value).id;
    const match_day = JSON.parse(league_selected.value).currentSeason.currentMatchday;
    this.props.setMatchs(league_id, match_day);
  }

  handleCombine = (event) => {
    const simple_bet = document.getElementById('simple-bet');
    simple_bet.classList.toggle("hidden");

    document.getElementById('league-value').value = "No League";
    document.getElementById('match-value').value = "No Match";

    const list_sport = document.getElementById('list-sport');
    if(list_sport.innerHTML.includes('<option value="Multisports" id="multi-div">Multisports</option>')) {
      list_sport.removeChild(document.getElementById('multi-div'));
    } else {
      list_sport.insertAdjacentHTML('beforeend', '<option value="Multisports" id="multi-div">Multisports</option>');
    }

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

        <select className="custom-select" id="list-sport" onChange={this.changeSport} name="bet[sport]" required>
          <option id="sport-value" value="">-- Choose your sport --</option>
          <option value="football">Football</option>
        </select>

        <div className="" id="simple-bet">
          <select className="custom-select" id="list-league" onChange={this.changeLeague} name="bet[league]" required>
            <option id="league-value" value="">-- Choose your league --</option>
            {
              this.props.leagues.map((league) => {
                return(
                  <option value={JSON.stringify(league)} key={league.id}>{league.name}</option>
                );
              })
            }
          </select>

          <select className="custom-select" id="list-match" name="bet[match]" required>
            <option id="match-value" value="">-- Choose your match --</option>
            {
              this.props.matchs.map((match) => {
                return(
                  <option value={JSON.stringify(match)} key={match.id}>{match.homeTeam.name} VS {match.awayTeam.name}</option>
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
