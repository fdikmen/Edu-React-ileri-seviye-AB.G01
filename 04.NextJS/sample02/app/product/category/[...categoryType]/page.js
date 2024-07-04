import React from 'react'

export default function page({params}) {
  return (
    <div>
        <h1>Category Page</h1>
        <p>Category Type: {params.categoryType.join(", ")}</p>
    </div>
  )
}
