import React, { Component } from "react";
import Posts from "../Posts/Posts";
import { Route, NavLink, Switch } from "react-router-dom";
import NewPost from "../NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/posts"
                exact
                activeClassName="my-active"
                activeStyle={{ color: "red" }}
              >
                Posts
              </NavLink>
              <NavLink
                to={{
                  pathname: "/new-post",
                  hash: "#submit",
                  search: "?query-params=true"
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <Route path="/" exact render={() => <h1>Home 1</h1>} />
        <Route path="/" exact render={() => <h1>Home 2</h1>} /> */}
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
