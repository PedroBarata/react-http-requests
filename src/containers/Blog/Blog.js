import React, { Component } from "react";

import "./Blog.css";
import axios from "../../axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Pedro"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        // console.log(error);
        this.setState({ error: true });
      });
  }

  selectedPostHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.selectedPostHandler(post.id)}
          />
        );
      });
    }
    return (
      <div className="Blog">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
              <a href="/new-post">New Post</a>
            </li>
          </ul>
        </nav>
        <section className="Posts">{posts}</section>
      </div>
    );
  }
}

export default Blog;
