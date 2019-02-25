import React, { Component } from "react";
import Posts from '../Posts/Posts';
import { Route, Link } from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
import "./Blog.css";

class Blog extends Component {



  render() {

    return (
      <div className="Blog">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to={{
                pathname: "/new-post",
                hash: "#submit",
                search: "?query-params=true"
              }}>New Post</Link>
            </li>
          </ul>
        </nav>
        {/* <Route path="/" exact render={() => <h1>Home 1</h1>} />
        <Route path="/" exact render={() => <h1>Home 2</h1>} /> */}

        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
