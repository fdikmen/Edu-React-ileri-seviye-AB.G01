// "use server";
// import React, { useState } from 'react'

import Link from "next/link";

export default function page(props) {
  console.log("Products Page props=>", props);
  // const [name, setName] = useState("Macbook Pro laptop")
  return (
    <div>
        <h1>Products Page</h1>
        <h2>Category : {props.params.category.join("/")}</h2>
        <Link href="/menu">Menu Page</Link>
    </div>
  )
}
