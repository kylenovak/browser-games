import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Game from 'pong-browser-game';
import 'pong-browser-game/public/bundle.css';

ReactDOM.render(
  <Game width="640" height="480" />,
  document.getElementById('root')
);

registerServiceWorker();
