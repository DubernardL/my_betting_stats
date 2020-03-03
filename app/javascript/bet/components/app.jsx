import React, { Component } from 'react';
import BetList from '../containers/bet_list';

const App = (props) => {
  return (
    <div>
      <BetList fixtureFromParams={ props.match.params.fixture } />
    </div>
  );
};

export default App;
