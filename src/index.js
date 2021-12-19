import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter basedname='/#/'>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

