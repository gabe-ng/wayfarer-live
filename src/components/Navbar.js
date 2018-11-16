import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";

class Navbar extends Component {
  state = {
    showSignUpModal: false,
    showSignInModal: false
  };

  handleOpenModal = option => {
    if (option === "sign up") {
      this.setState({ showSignUpModal: true });
    } else if (option === "sign in") {
      this.setState({ showSignInModal: true });
    }
  };

  handleCloseModal = () => {
    this.setState({ showSignUpModal: false, showSignInModal: false });
  };

  userLogOut = () => {
    localStorage.setItem("username", '');
    localStorage.setItem("loggedIn", false);
    this.props.logoutSuccess();
  }

  render() {
    let isLoggedIn = this.props.loggedIn;
    let menu;

    // false is a string here because local storage saves as a string
    if (isLoggedIn === "false") {
      menu = <ul>
          <li>
            <button onClick={() => this.handleOpenModal("sign in")} className="nav-button">
              Sign In
            </button>
          </li>
          <li>
          <button onClick={() => this.handleOpenModal("sign up")} className="nav-button">
              Sign Up
            </button>
          </li>
        </ul>;
    } else {
      menu = <ul>
          <li>
            <NavLink to="/wayfarer-live/homepage" activeClassName="active-nav" className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/wayfarer-live" exact activeClassName="active-nav" className="nav-item">
              Profile
            </NavLink>
          </li>
          <li onClick={this.userLogOut}>
            <NavLink to="/wayfarer-live" exact className="nav-logout">
              Logout
            </NavLink>
          </li>
        </ul>;
    }

    return (
      <div className="navbar">
        <Link to={"/wayfarer-live"} className="navbar-title">
          Wayfarer
        </Link>

        <SignUpModal
          isOpen={this.state.showSignUpModal}
          closeModal={this.handleCloseModal}
          loginSuccess={this.props.loginSuccess}
        />
        <SignInModal
          isOpen={this.state.showSignInModal}
          closeModal={this.handleCloseModal}
          loginSuccess={this.props.loginSuccess}
        />
        {menu}
      </div>
    );
  }
}

export default Navbar;
