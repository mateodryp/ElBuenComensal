import React from 'react';
import ReactDOM from 'react-dom';
import './Statics/Normalize.css'
import './Statics/Style.css'
import reportWebVitals from './reportWebVitals';
import ListRoutes from './Router/Routes';

ReactDOM.render(
  <React.StrictMode>
    <ListRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
