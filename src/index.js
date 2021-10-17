import React from 'react';
import ReactDOM from 'react-dom';
import s from './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App className={s} />
  </React.StrictMode>,
  document.getElementById('root')
);
