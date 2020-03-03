import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// reducers
import oddsReducer from './reducers/odds_reducer';

// containers
import BetList from './containers/bet_list';

// components
import App from './components/app';

const reducers = combineReducers({
  odds: oddsReducer
});

// middleware
const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:fixture" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('bet-list')
);
