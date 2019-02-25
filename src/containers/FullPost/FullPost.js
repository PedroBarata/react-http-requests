import React, { Component } from "react";

import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidUpdate() {
    if (this.props.selectedPostId) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== this.props.selectedPostId)
      ) {
        axios
          .get(
            "/posts/" +
              this.props.selectedPostId
          )
          .then(response => {
            this.setState({ loadedPost: response.data });
          });
      }
    }
  }

  deletePostHandler = () => {
    axios
      .delete(
        "/posts/" + this.state.loadedPost.id
      )
      .then(response => {
        console.log(response);
      });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.selectedPostId) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;