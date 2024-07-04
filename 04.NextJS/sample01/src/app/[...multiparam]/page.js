import React from 'react'

export default function page(props) {
    console.log("props: ", props);
  return (
    <div>
        <h1>Dynamic Route</h1>
        <h2>Multi Parameter Page</h2>
<h3>
    {props.params.multiparam.join("/")}
</h3>
    </div>
  )
}
