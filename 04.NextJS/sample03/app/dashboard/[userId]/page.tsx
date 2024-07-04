import React from 'react'

export default function page(props:any) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>User ID: {props.params.userId}</p>
    </div>
  )
}
