import React from 'react';
import ReactDOM from 'react-dom';
/* import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { rootReducer } from './components/redux/rootReducer'; */
/* import { Provider } from 'react-redux'; */
import App from './components/app';


/* const store=createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)) */ 
 
// редакс для лакйков

// пришлось убрать редакс так как не работает vercel с ним

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);