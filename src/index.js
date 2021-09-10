import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
import { Router } from 'react-router-dom'
import history from "./utils/history";
import "antd/dist/antd.css";
import './index.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
