import React,{useState} from 'react'
import UseEffectComp from './UseEffectComp'

export default function App() {
  const [isShow, setIsShow] = useState(true)
  return (
    <div>
      {
        isShow && <UseEffectComp />
      }
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
    </div>
  )
}
