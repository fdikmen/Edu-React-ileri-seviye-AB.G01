import React from 'react'
import UseStateComp from './components/UseStateComp'
import UseEffectCompMain from './components/UseEffectCompMain'
import UseRefComp from './components/UseRefComp'
import UseMemoComp from './components/UseMemoComp'
import UseMemoComp02 from './components/UseMemoComp02'
import UseCallBackComp from './components/UseCallBackComp'
import UseIdComp from './components/UseIdComp'
import UseDeferredValueCompMain from './components/UseDeferredValueCompMain'
import UseTransitionComp from './components/UseTransitionComp'

export default function App() {
  return (
    <div>
      <h1>Main component</h1>
      {/* <UseStateComp /> */}
      {/* <UseEffectCompMain /> */}
      {/* <UseRefComp /> */}
      {/* <UseMemoComp /> */}
      {/* <UseMemoComp02 /> */}
      {/* <UseCallBackComp /> */}
      {/* <UseIdComp />
      <hr />
      <UseIdComp /> */}
      {/* <UseDeferredValueCompMain /> */}
      <UseTransitionComp />
    </div>
  )
}
