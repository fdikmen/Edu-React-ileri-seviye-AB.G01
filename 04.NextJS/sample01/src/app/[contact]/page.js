import React from 'react'

export default function page(props) {
    // console.log("props: ", props);
  return (
    <div>
        <h1>Contact Page</h1>
        <h2>Dynamic Route. Contact Parameter : {props.params.contact}</h2>
    </div>
  )
}
