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
    let id = 0;
    return(
      <div>
        {
          this.props.odds.map((odd) => {
            return <Bet odd={odd} key={id += 1}/>
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    odds: state.odds
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setOdds }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BetList);
