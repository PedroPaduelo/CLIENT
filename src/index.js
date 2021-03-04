import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ReactGA from 'react-ga';
ReactGA.initialize('G-BF0S8EBCT2',{debug : true });



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

