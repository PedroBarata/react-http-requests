import React, { Component } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import { Link } from "react-router-dom";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: []
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
        console.log(error);
        //this.setState({ error: true });
      });
  }

  selectedPostHandler = id => {
   // this.setState({ selectedPostId: id });
   //this.props.history.push({pathname: '/' + id});
   this.props.history.push('/' + id);
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          //<Link to={'/' + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.selectedPostHandler(post.id)}
          />
          //</Link>
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
