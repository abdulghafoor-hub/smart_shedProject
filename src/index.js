import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "../src/Components/store/index";
import "../src/assets/sass/auth.scss"
import "../src/assets/sass/custom.scss"
import App from './App'; // Your root component
import "./index.css"
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
</Provider>
);