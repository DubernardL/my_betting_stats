import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// actions
import { setLeagues } from '../actions';

import { League } from '../components/league';

class FormBet extends Component {

  componentDidMount() {
    this.props.setLeagues();
  }

  render() {
    let id = 0;
    return(
      <div>
        YO
        {console.log(this.props.leagues)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    leagues: state.leagues
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setLeagues }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FormBet);
