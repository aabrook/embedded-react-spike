import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SomeComponent } from './App';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.components = {}
window.components['embedded-component'] = { SomeComponent }

console.log('Loaded my component')