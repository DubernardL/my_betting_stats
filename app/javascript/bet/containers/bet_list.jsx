import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions
import { setFixtures } from '../actions';
import { setOdds } from '../actions';
// components
import Bet from '../components/bet';

class BetList extends Component {

  componentDidMount() {
    // TODO: dispatch an action to load fixtures!
    this.props.setFixtures();
  }

  render () {
    return (
      <div>
        {this.props.fixtures.map((fixture) =>
          {
            return(
              <Bet fixture={fixture} key={fixture.fixture_id}/>
            )
          }
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setFixtures: setFixtures
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    fixtures: state.fixtures
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BetList);
