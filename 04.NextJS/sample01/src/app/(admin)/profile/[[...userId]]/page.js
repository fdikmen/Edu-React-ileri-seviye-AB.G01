import React from 'react'

export default function page(props) {
  return (
    <div>
        <h1>Admin Profile Page</h1>
        <h2>User ID : {props.params.userId?.join("/")}</h2>
    </div>
  )
}


