import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Header.css';
import './components/Navbar.css';
import './components/Home.css';
import './components/Fixtures.css';
import './components/DropDown.css';
import './components/LeagueTable.css';
import './containers/MapContainer.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
