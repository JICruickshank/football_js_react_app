import React from "react";
import Home from "./Home";
import League from "./League";
import Fixtures from "./Fixtures";
import Favourites from "./Favourites";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render() {
    return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route className='nav1' exact path='/' component={Home} />
        <Route className='nav1' path='/league' component={League} />
        <Route className='nav2' path='/fixtures' component={Fixtures} />
        <Route className='nav2' path='/favourites' component={Favourites} />
      </React.Fragment>
    </Router>
    );
  }

}

export default Main;
