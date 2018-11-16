import React, { Component } from "react";
import swal from "sweetalert2";

import Posts from "../components/Posts";
import PostDetail from "../components/PostDetail";
import AddPostModal from "../components/PostModal";
import PostModel from "../models/Post";

class PostContainer extends Component {
  state = {
    showAddModal: false,
    postList: [],
    showingPost: false,
    showPost: null,
    editingPost: false,
    editingPostId: null
  };

  // Opens and closes modal for adding posts
  toggleModal = () => {
    this.setState({ showAddModal: !this.state.showAddModal });
  };

  // Fetches posts for a specific city
  fetchPosts = () => {
    PostModel.getPosts(this.props.city)
      .then(response => {
        this.setState({ postList: response.data });
      })
      .catch(error => {
        console.log("in get posts error, ", error);
      });
  };

  // Toggles editingPost state
  toggleEdit = event => {
    this.setState({
      editingPost: !this.state.editing,
      editingPostId: event.target.getAttribute("data-id")
    });
  };

  // Exit edit post state
  exitEdit = event => {
    if (event) event.preventDefault();
    
    this.setState({
      editingPost: false,
      editingPostId: null,
    })
  }

  updatePost = (event, id, title, body) => {
    console.log("in post container update post");

    if (event) event.preventDefault();

    PostModel.updatePost(id, title, body).then(response => {
      console.log(response);
      this.setState({
        editingPost: !this.state.editing,
        editingPostId: null
      });
      swal({
        title: "Updated",
        text: "Your post has been updated.",
        type: "info",
        confirmButtonColor: "rgb(240, 196, 116)"
      });
      this.fetchPosts();
    });
  };

  showPostDetail = (event) => {
    if (event) event.preventDefault();
    console.log("in show post detail");

    PostModel.showPost(event.target.getAttribute("data-id"))
      .then(response => {
        console.log(response);
        console.log(response.data);
        
        this.setState({ 
          showingPost: true,
          showPost: response.data 
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  exitDetailView = () => {
    this.setState({
      showingPost: false,
      showPost: {}
    })
  }

  // Deletes a post if post is owned by user
  deletePost = event => {
    let postId = event.target.getAttribute("data-id");
    let deletePost = false;
    swal({
      title: "Are you sure?",
      text:
        "Once deleted, nobody else can read your amazing post!",
      type: "warning",
      buttons: true,
      confirmButtonColor: "rgb(240, 196, 116)",
      dangerMode: true
    }).then((willDelete, id) => {
      if (willDelete) {
        deletePost = true;
      } else {
        swal({title: "Your post is safe!",
          confirmButtonColor: "rgb(240, 196, 116)"});
      }
      if (deletePost) {
      PostModel.deletePost(
        localStorage.getItem("username"),
        postId
      )
        .then(response => {
          console.log(response);
          this.fetchPosts();
        })
        .then(() => {
          swal({
            text: "Poof! Your post has been deleted!",
            type: "success",
            confirmButtonColor: "rgb(240, 196, 116)"
          });
        })
        .catch(error => {
          console.log("in delete posts error, ", error);
        });
      }
    });
  };

  componentDidMount = () => {
    this.fetchPosts();
  };

  componentDidUpdate = () => {
    console.log("in update");
    
    if (this.props.newCity) {
      this.fetchPosts();
      this.props.toggleCityUpdate();
    }
  };

  render() {
    console.log(this.state.showingPost);

    let render;
    if (this.state.showingPost) {
      render = <PostDetail 
        post={this.state.showPost}
        exitDetail={this.exitDetailView} />
    } else {
      render = 
      <div className="post-container">
        <section className="post-list-header">
          <AddPostModal
            isOpen={this.state.showAddModal}
            closeModal={this.toggleModal}
            currentCity={this.props.city}
            fetchPosts={this.fetchPosts}
          />
          <h1>Posts</h1>
          <button className="add-post" onClick={this.toggleModal}>
            Add Post
          </button>
        </section>
        <Posts
          posts={this.state.postList}
          showDetail={this.showPostDetail}
          editing={this.state.editingPost}
          editPostId={this.state.editingPostId}
          toggleEdit={this.toggleEdit}
          updatePost={this.updatePost}
          cancelUpdate={this.exitEdit}
          deletePost={this.deletePost}
        />
      </div>
    }
    return (
     render
    );
  }
}

export default PostContainer;
