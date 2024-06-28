import React from 'react'
import {useEffect} from 'react'

export default function UseEffectComp() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('')

    // useEffect(function(),array[]);
//Component did mount
    useEffect(() => {
        console.log('Component did mount')
        return () => {
            console.log('Component will unmount')
        }
    }, [count, name])

//Component did mount & update
    // useEffect(() => {
    //     console.log('Component did mount & update')
    //     // console.log("Count : ",count,
    //     //     "Name : ",name)
    // }, [count, name])
//Component Unmount + Component did mount
    // useEffect(() => {
    //     console.log('Component did mount')
    //     return () => {
    //         console.log('Component will unmount')
    //     }
    // }, [])

  return (
    <div>Use Effect Comp
        <p>
            {count}
            <button style={{marginLeft:20}} onClick={() => setCount(count + 1)}> + </button>
        </p>
        <p>
            {name} <br/>
            <input type='text' value={name} 
            onChange={(e) => setName(e.target.value)} />   
        </p>

    </div>
  )
}
