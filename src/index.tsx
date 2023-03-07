import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './index.css';

import App from './App';

const main = ReactDOM.createRoot(document.getElementById('main') as HTMLElement);

main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);