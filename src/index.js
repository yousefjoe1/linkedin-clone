import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';


ReactDOM.render(<React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,document.getElementById('root')
);
