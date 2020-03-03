import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// actions
import { setOdds } from '../actions';
// components
import Bet from '../components/bet';

class BetList extends Component {

  componentDidMount() {
    // TODO: dispatch an action to load fixtures!
    this.props.setOdds(this.props.fixtureFromParams);
  }

  render () {
    return (
      <div>
        {this.props.odds.map((odd) =>
          {
            odd.values.map((bet) => {
              return(
                <Bet odd={odd} bet={bet} key={odd.label_id}/>
              )
            })
          }
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setOdds: setOdds },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    odds: state.odds
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BetList);
