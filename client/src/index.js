import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Header.css';
import './components/Navbar.css';
import './components/LeagueTable.css'; 
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
