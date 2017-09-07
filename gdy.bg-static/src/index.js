// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app';
import Home from './components/home';
import Signin from './components/signin';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = localStorage.getItem('user');

if (user) {
  //  update application state
  store.dispatch({ type: AUTH_USER, payload: user });
}

// put the most specific routes on top 
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="signin" component={Signin} />
        </Route>
      </div>
    </Router>
  </Provider>
  , document.getElementById('wrapper'));