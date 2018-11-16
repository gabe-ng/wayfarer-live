import React, { Component } from "react";
import swal from "sweetalert2";

class PostForm extends Component {
  emptyField = (event) => {
    if (event) event.preventDefault();

    let message = document.createElement("h6");
    message.textContent = "*Please fill out all required fields.";
    let errorBox = document.getElementById("edit-post-error");
    errorBox.textContent = message.textContent;
  };

  handleUpdate = event => {
    let title = document.getElementById("edit-title").value;
    let body = document.getElementById("edit-body").value;

    if (title === "" || body === "") {
      this.emptyField(event);
      swal("Oops", "Please fill out all fields.", "error");
    } else {
      this.props.updatePost(event, this.props.id, title, body);
    }
  };

  render() {
    return (
      <div className="post">
        <form className="post-form">
          <input
            type="text"
            defaultValue={this.props.title}
            className="edit-post-title"
            id="edit-title"
          />
          <textarea
            type="text"
            defaultValue={this.props.body}
            className="edit-post-text"
            id="edit-body"
          />
          <h6 id="edit-post-error"> </h6>
          <button onClick={this.handleUpdate} className="edit-post-submit">
            Edit post
          </button>
          <button onClick={this.props.cancelUpdate} className="edit-post-cancel">Cancel</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
