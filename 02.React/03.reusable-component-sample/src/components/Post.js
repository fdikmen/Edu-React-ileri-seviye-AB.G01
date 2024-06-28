import React, { Component } from "react";
import LoaderHoc from "./LoaderHoc";
class Post extends Component {
  render() {
    console.log("PROPS IN POST: ", this.props);
    return (
      <div className="userList">
        POST COMPONENT
        {
        // this.props.loading ? (
        //   <h1>Loading...</h1>
        // ) : (
          this.props.posts.map((post) => (
            <div key={post.id}>
              <h4>{post.id}-{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))
        // )
        }
      </div>
    );
  }
}


// export default (Post);
// export default LoaderHoc(Post);
export default LoaderHoc(Post,"posts");
