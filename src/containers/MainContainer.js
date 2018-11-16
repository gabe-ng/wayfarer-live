import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "../components/Landing";
import CityContainer from "./CityContainer";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/wayfarer-live/homepage"
            render={props => (
              <CityContainer {...props} loggedIn={this.props.loggedIn} />
            )}
          />
          <Route
            path="/wayfarer-live"
            exact
            render={props => (
              <Landing {...props} loggedIn={this.props.loggedIn} currentUser={this.currentUser}/>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default MainContainer;
