import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<App/> // -> by removing the StrictMode wrapper in React duplicate element is removed
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




