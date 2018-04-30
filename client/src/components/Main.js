import React from "react";
import Home from "./Home";
import LeaguePage from "./LeaguePage";
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
        <Route exact path='/' component={Home} />
        <Route path='/league' component={LeaguePage} />
        <Route path='/fixtures' component={Fixtures} />
        <Route path='/favourites' component={Favourites} />
      </React.Fragment>
    </Router>
    );
  }

}

export default Main;
