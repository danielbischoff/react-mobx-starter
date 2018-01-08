import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

if(module.hot) {
  module.hot.accept('./App', function() {
    const NewApp = require('./App').default;
    ReactDOM.render(<NewApp />, root);
  });
}
