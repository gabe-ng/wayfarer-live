import React, { Component } from "react";

import Navbar from "./components/Navbar";
import MainContainer from "./containers/MainContainer";


class App extends Component {
  state = {
    userLoggedIn: localStorage.getItem("loggedIn"),
    currentUser: '',
  };

  handleUserLogin = () => {
    console.log("user logging in");
    this.setState({ 
      userLoggedIn: localStorage.getItem("loggedIn"),
      currentUser: localStorage.getItem("username"),
    })
  }

  handleUserLogout = () => {
    console.log("user logging out");
    this.setState({ 
      userLoggedIn: localStorage.getItem("loggedIn"),
      currentUser: localStorage.getItem("username"),
    })
  }

  render() {
    console.log(this.state.currentUser);
    
    return <div>
        <Navbar loggedIn={this.state.userLoggedIn} loginSuccess={this.handleUserLogin} logoutSuccess={this.handleUserLogout}/>
        <MainContainer loggedIn={this.state.userLoggedIn} currentUser={this.state.currentUser} />
      </div>;
  }
}

export default App;
