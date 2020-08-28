import React from 'react'
import ReactDOM from 'react-dom'

import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/custom.scss'

import App from '../src/components/App'
const container = document.getElementById('app') 
ReactDOM.render(  <App />,  container );