import React, { Component } from "react";
import swal from "sweetalert2";

import Modal from "react-modal";
import PostModel from "../models/Post";

class AddPostModal extends Component {
    emptyField = () => {
        let message = document.createElement("h6");
        message.textContent = "*Please fill out all fields.";
        let errorBox = document.getElementById("error");
        errorBox.textContent = message.textContent;
    }

    createNewPost = (event) => {
        if (event) event.preventDefault();

        let title = document.getElementById("new-post-title").value;
        let body = document.getElementById("new-post-body").value;

        if (title === "" || body === "") {
            this.emptyField();
            swal({
              title: "Oops",
              text: "Please fill out all fields.",
              type: "error",
              confirmButtonColor: "rgb(240, 196, 116)"
            });

        } else {
            PostModel.addPost(title, body, this.props.currentCity, localStorage.getItem("username"))
                .then(response => {
                    console.log(response);
                    this.props.closeModal();
                    swal({
                      title: "Added",
                      text: "Your post has been shared.",
                      type: "success",
                      confirmButtonColor:
                        "rgb(240, 196, 116)"
                    });
                    this.props.fetchPosts();
                })
                .catch(error => {
                    console.log("Error creating new post, ", error);
                    swal({
                      title: "Uh Oh",
                      text:
                        "There was an error on our part. Please try again.",
                      type: "error",
                      confirmButtonColor:
                        "rgb(240, 196, 116)"
                    });
                })
        }
    }

    render() {
        return(
            <Modal isOpen={this.props.isOpen} contentLabel="Add Post Modal" className="Modal add-post" ariaHideApp={false}>
                <section className="modal-content">
                    <h1>Add a Post to {this.props.currentCity}</h1>
                    <form className="modal-form">
                        <input type="text" placeholder="Title*" name="new-post-title" id="new-post-title" />
                        <textarea className="new-post-text" id="new-post-body" placeholder="Content*"></textarea>
                        <h6 id="error"> </h6>
                        <button className="add-post-button" onClick={this.createNewPost}>
                            Add Post
                        </button>
                    </form>
                    <button className="close-add-post" onClick={this.props.closeModal}>
                        Exit
                    </button>
                </section>
            </Modal>
        )
    }
}

export default AddPostModal;