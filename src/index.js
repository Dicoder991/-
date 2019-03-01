import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import MainAppContainer from './containers/MainAppContainer';
import createStore from './store';
const store = createStore();

ReactDOM.render(
    <Provider store = {store}>
        <MainAppContainer />
    </Provider>, document.getElementById('root'));







