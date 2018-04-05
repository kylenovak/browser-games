import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import pong from 'pong-browser-game';
document.body.onload = pong;

ReactDOM.render(
  <h1>Novak Games</h1>,
  document.getElementById('root')
);

registerServiceWorker();
