import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './src/client/App';
import registerServiceWorker from './src/client/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
