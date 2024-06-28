import React from 'react'
import UseStateComp from './components/UseStateComp'
import UseEffectCompMain from './components/UseEffectCompMain'
import UseRefComp from './components/UseRefComp'

export default function App() {
  return (
    <div>
      <h1>Main component</h1>
      {/* <UseStateComp /> */}
      {/* <UseEffectCompMain /> */}
      <UseRefComp />
    </div>
  )
}
