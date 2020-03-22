import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// reducers
import leaguesReducer from './reducers/leagues_reducer';
import matchsReducer from './reducers/matchs_reducer';
import betsNameReducer from './reducers/bets_name_reducer';
// components
import App from './components/app';

const reducers = combineReducers({
  leagues: leaguesReducer,
  matchs: matchsReducer,
  bets_name: betsNameReducer
});

// Middleware
const middlewares = applyMiddleware(promiseMiddleware, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/bets/new" exact component={App} />
        <Redirect from="/bets/new" to={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('new-bet')
);
