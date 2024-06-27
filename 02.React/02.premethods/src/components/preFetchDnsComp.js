import React from 'react'
import { preFetchDns } from 'react-dom'

export default function preFetchDnsComp() {
  //When render
  preFetchDns("https://www.example.com");

  //In event handler
  const handleClick = () => {
    preFetchDns("https://www.example.com");
  };
  return (
    <div>preFetchDns
      <button onClick={handleClick}>
        Get preFetchDns
      </button>
    </div>
  )
}
