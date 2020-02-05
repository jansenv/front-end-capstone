import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import Capstone from './components/Capstone';

ReactDOM.render(
    <Router>
        <Capstone />
    </Router>, document.getElementById('root'));