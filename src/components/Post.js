import React, { Component } from "react";

import PostForm from "./PostForm";

class Post extends Component {

  toggleMoreText = (event) => {
    if (event) event.preventDefault();

    document.getElementById("morecontent").style.display = "inline";
    document.getElementById("moretext").style.display = "none";
  }

  render() {
    let options;

    // A user can see the edit and delete options only if they are the post creators
    if (this.props.username === localStorage.getItem("username")) {
      options = (
        <span>
          <span className="post-option" onClick={this.props.toggleEdit} data-id={this.props.post._id}>
            Edit
          </span>{" "}
          |{" "}
          <span className="post-option" onClick={this.props.deletePost} data-id={this.props.post._id}>
            Delete
          </span>
        </span>
      );
    } else {
      options = <span>Posted by {this.props.username}</span>;
    }

    let body;
    let showChar = 500;
    let ellipsestext = ". . .";
    let moretext = "more";

    if (this.props.body.length > showChar) {
      let shown = this.props.body.substr(0, showChar);
      let hidden = this.props.body.substr(
        showChar - 1,
        this.props.body.length - showChar
      );

      body = <p className="body-p more">
          {shown} <span className="moreellipses"> {ellipsestext} </span>
          <span className="morecontent" >
            <span id="morecontent">{hidden}</span>
            &nbsp;&nbsp;
            <a href="" className="morelink" onClick={this.toggleMoreText} id="moretext">
              {moretext}
            </a>
          </span>
        </p>;
    } else {
      body = <p className="body-p">{this.props.body}</p>;
    }

    return (
      <div>
        {this.props.editPostId === this.props.id ? (
          <PostForm
            id={this.props.id}
            title={this.props.title}
            body={this.props.body}
            updatePost={this.props.updatePost}
            cancelUpdate={this.props.cancelUpdate}
          />
        ) : (
          <div className="post">
            <h1>{this.props.post.title}</h1>
            {body}
            <p>
                {options} | <span className="post-option"data-id={this.props.id} onClick={this.props.showDetail}>More details</span>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Post;
