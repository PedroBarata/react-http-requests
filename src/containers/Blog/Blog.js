import React, { Component } from "react";
import Posts from '../Posts/Posts';
import { Route } from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
import "./Blog.css";

class Blog extends Component {



  render() {

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
        {/* <Route path="/" exact render={() => <h1>Home 1</h1>} />
        <Route path="/" exact render={() => <h1>Home 2</h1>} /> */}

        {/* A aplicação fica dando reload, pois estamos usando o Anchor! */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
