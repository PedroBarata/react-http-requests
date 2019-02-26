import React, { Component } from "react";
import Posts from "../Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import NewPost from "../NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    auth: false
  }
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
          {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null }
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found!</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
