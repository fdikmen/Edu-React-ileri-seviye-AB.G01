import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

export default function Counter() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Arttır</button>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <button onClick={() => dispatch(incrementByAmount(15))}>15 Arttır</button>
    </div>
  )
}
