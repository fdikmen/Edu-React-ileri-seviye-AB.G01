import React from "react";

export default function page(props) {
  return <div>
    <h1>Product Page</h1>
    <p>Product ID: {props.params.productId}</p>
  </div>;
}
