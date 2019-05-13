import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MainRouter from './MainRouter';
import {Provider } from 'react-redux';
import store  from './store';

ReactDOM.render(
    <Provider store={store}>
    <MainRouter />
    </Provider>
    , document.getElementById('root') as HTMLElement);

serviceWorker.unregister();
