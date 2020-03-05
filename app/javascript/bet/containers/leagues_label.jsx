import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Leagues from '../components/leagues';
import { setLeagues } from '../actions';

class LeaguesLabel extends Component {

  componentDidMount() {
    this.props.setLeagues();
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.props.leagues.map((league) => {
              return(
                  <li>
                    {league.name}
                  </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setLeagues: setLeagues },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    leagues: state.leagues
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeaguesLabel);
