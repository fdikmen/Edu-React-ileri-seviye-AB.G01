import React, { Component } from "react";
import axios from "axios";
import Post from "./components/Post";
import "./App.css";
import User from "./components/User";

export default class App extends Component {
  state = {
    users: [],
    loading: true,
    err: "",
    posts: [],
  };

  componentWillMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response=>response.json())
    // .then(result=>this.setState({users:result,loading:false}))
    // .catch(err=>this.setState({err:err.message,loading:false}))

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response=>response.json())
    // .then(result=>this.setState({posts:result,loading:false}))
    // .catch(err=>this.setState({err:err.message,loading:false}))

    // axios.get("https://jsonplaceholder.typicode.com/users")
    // .then(response=>console.log(response.data))
    this.setState({ loading: true });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        this.setState({ users: response.data,posts:this.state.posts, loading: false })
      );

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) =>
       {
        setTimeout(() => {
          this.setState({ posts: response.data,users:this.state.users, loading: false })
        }, 3000);
       }
      );
  }

  render() {
    return <div>
      <Post {...this.state}></Post>
      <User {...this.state}></User>
    </div>;
  }
}
