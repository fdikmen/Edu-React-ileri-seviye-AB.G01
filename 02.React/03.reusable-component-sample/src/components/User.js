import React, { Component } from "react";
import LoaderHoc from "./LoaderHoc";

class User extends Component {
  render() {
    console.log("PROPS IN USER: ", this.props);
    return (
      <div className="userList">
        USER COMPONENT
        {
        // this.props.loading ? (
        //   <h1>Loading...</h1>
        // ) : (
          this.props.users.map((user) => (
            <div key={user.id}>
              <h4>{user.id}-{user.name}</h4>
              <p>{user.email}</p>
            </div>
          ))
        // )
        }
      </div>
    );
  }
}

// export default User;
export default LoaderHoc(User,"users");
