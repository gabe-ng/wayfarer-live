import React, { Component } from "react";
import swal from "sweetalert2";

import Modal from "react-modal";
import UserModel from "../models/User";

class SignUpModal extends Component {

  passwordsDoNotMatch = () => {
    let message = document.createElement("h6");
    message.textContent = "*Passwords do not match.";
    let errorBox = document.getElementById("error");
    errorBox.textContent = message.textContent;
  }

  takenUsername = () => {
    let message = document.createElement("h6");
    message.textContent = "*Username already taken.";
    let errorBox = document.getElementById("error");
    errorBox.textContent = message.textContent;
  }

  emptyField = () => {
    let message = document.createElement("h6");
    message.textContent = "*Please fill out all required fields.";
    let errorBox = document.getElementById("error");
    errorBox.textContent = message.textContent;
  }

  signUp = event => {
    if (event) event.preventDefault();

    let name = document.getElementById("signup-name").value; 
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;
    let confirmationPassword = document.getElementById("signup-password-confirmation").value;
    let currentCity = document.getElementById("signup-currentCity").value;

    if (password !== confirmationPassword){
      this.passwordsDoNotMatch();
      swal({
        title: "Oops",
        text:
          "The passwords don't match.",
        type: "error",
        confirmButtonColor:
          "rgb(240, 196, 116)"
      });
    } else if (name === "" || username === "" || password === "" || confirmationPassword === "") {
      this.emptyField();
      swal({
        title: "Oops",
        text: "Please fill out all the required fields.",
        type: "error",
        confirmButtonColor: "rgb(240, 196, 116)"
      });
    } else {
      UserModel.signUp(name, username, password, currentCity)
        .then(response => {
          console.log(response.data);
          if (response.data === "user successfully created") {
            localStorage.setItem("username", username);
            localStorage.setItem("loggedIn", true);
            swal({
              text:
                `Welcome to Wayfarer ${localStorage.getItem("username")}!`,
              type: "success",
              confirmButtonColor:
                "rgb(240, 196, 116)"
            });
            this.props.closeModal(); 
            this.props.loginSuccess();
          }  
        })
        .catch(error => {
          console.log("Error from catch", error); 
          swal({
            title: "Oops",
            text: "That username is already taken",
            type: "error",
            confirmButtonColor: "rgb(240, 196, 116)"
          });
          this.takenUsername();
        })
    }
  }
  

  render() {
    return <Modal isOpen={this.props.isOpen} contentLabel="Sign Up Modal" className="Modal signup" ariaHideApp={false}>
        <section className="modal-content">
          <h1>Sign Up</h1>
          <form className="modal-form">
            <input type="text" placeholder="Full Name*" name="fullName" id="signup-name" />
            <input type="text" placeholder="Username*" name="username" id="signup-username" />
            <input type="password" placeholder="Password*" name="signup-password" id="signup-password" />
            <input type="password" placeholder="Confirm Password*" name="signup-password-confirmation" id="signup-password-confirmation" />
            <input type="text" placeholder="Current City" name="currentCity" id="signup-currentCity" />
            <h6 id="error"> </h6>
            <button className="login-button" onClick={this.signUp}>
              Sign Up
            </button>
          </form>
          <button className="close-signup" onClick={this.props.closeModal}>
            Exit
          </button>
        </section>
      </Modal>;
  }
}

export default SignUpModal;
