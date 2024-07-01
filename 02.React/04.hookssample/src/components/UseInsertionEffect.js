import React, { useEffect } from 'react'
import { useInsertionEffect } from 'react'

// useInsertionEffect(() => {}, []);

export default function UseInsertionEffect() {

    useInsertionEffect(() => {
        console.log('UseInsertionEffect Mounted');
        return () => {
            console.log('UseInsertionEffect cleanup - Unmounted');
        }
    }
    , []);

    useEffect(() => {
        console.log('UseEffect Mounted');
        return () => {
            console.log('UseEffect cleanup - Unmounted');
        }
    }
    , []);
   
  return (
    <div>UseInsertionEffect</div>
  )
}
