import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import Header from './components/header';
import SourceList from './containers/source_list';
import CompetitionList from './containers/competition_list';
import Login from './components/login';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <SourceList />
        <Route path="/" component={CompetitionList} />
        <Route path="/login" component={Login} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));