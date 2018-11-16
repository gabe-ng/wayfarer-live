import React, { Component } from "react";

class PostDetail extends Component {
    render() {
        let post = this.props.post;
        let date = post.dateCreated.slice(0,10);
        let date2 = new Date(date);
        let date3;
        
        if (!isNaN(date2.getTime())) {
            // Months use 0 index.
            date3 = date2.getMonth() + 1 + '/' + date2.getDate() + '/' + date2.getFullYear();
        }

        return (
            <div className="post-detail">
                <h3>Post: {post.title}</h3>
                <h6>City: {post.city}</h6>
                <p>Content: {post.body}</p>
                <p>Post Owner: {post.username}</p>
                <p>Posted on: {date3}</p>
                <p className="exit-detail-page"><span onClick={this.props.exitDetail}>&larr; Back to posts</span></p>
            </div>
        )
    }
}

export default PostDetail;