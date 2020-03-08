import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setLeagues } from '../actions';
import { setMatchs } from '../actions';

class LeaguesLabel extends Component {

  componentDidMount() {
    this.props.setLeagues();
    this.props.setMatchs(525);
  }

  handleChange = (event) => {
    const class_selected = document.getElementById('list-league').options;
    const league_selected = class_selected[class_selected.selectedIndex]
    const league_id = league_selected.attributes.league_id.value
    this.props.setMatchs(league_id);
  }

  render() {
    let id = 0;
    return(
      <div>
        <div>
          <label>League : </label>
          <select id="list-league" onChange={this.handleChange} name="league" required>
            {
              this.props.leagues.map((league) => {
                return(
                  <option className="league-options" value={league.name} league_id={league.league_id} key={id += 1}>{league.name}</option>
                );
              })
            }
          </select>
        </div>

        <div>
          <label>Match : </label>
          <select name="match" id="match" required>
            {
              this.props.matchs.map((match) => {
                return(
                  <option value="{match}" key={id += 1}>{match}</option>
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
      setMatchs: setMatchs
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    leagues: state.leagues,
    matchs: state.matchs
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeaguesLabel);
