import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import MainApp from './App';
import registerServiceWorker from './registerServiceWorker';
import ConfigureStore from './store/Store'


const store = ConfigureStore();

window.store = store;

console.log(store.getState())

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
