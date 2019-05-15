import React from 'react';
import ReactDOM from 'react-dom';
import './components/introduction/introduction';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';

injectTapEventPlugin();
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
