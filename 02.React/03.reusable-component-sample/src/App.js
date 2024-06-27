import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state={
    users:[],loading:true,err:"",posts:[] 
  }

  componentDidMount(){
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response=>response.json())
    // .then(result=>this.setState({users:result,loading:false}))
    // .catch(err=>this.setState({err:err.message,loading:false}))

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response=>response.json())
    // .then(result=>this.setState({posts:result,loading:false}))
    // .catch(err=>this.setState({err:err.message,loading:false}))
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>this.setState({users:response.data,loading:false}))

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response=>this.setState({posts:response.data,loading:false})) 
  }

  render() {
    return (
      <div>App</div>
    )
  }
}
