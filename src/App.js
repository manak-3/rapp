import React from 'react';
import { hot } from 'react-hot-loader';
import Tweet from './todos/Tweet';
import './App.css';

const App = () => (
    <div className="App">
        <Tweet />
    </div>
);

export default hot(module)(App);