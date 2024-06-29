import React,{useId} from 'react'

//useOpaqueIdentifierhook

export default function UseIdComp() {
    const id = useId()
    console.log('UseIdComp',id)
  return (
    <div>UseIdComp
        <label htmlFor={id}>Filed id: {id}</label><br />
        <input id={id} type="text" />
    </div>
  )
}
