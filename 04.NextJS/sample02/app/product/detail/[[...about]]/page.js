import React from 'react'

export default function page(props) {
  return (
    <div>
        <h1>Product Detail Page</h1>
        <p>About: {props.params.about}</p>
    </div>
  )
}
