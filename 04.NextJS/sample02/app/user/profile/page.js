import { notFound } from 'next/navigation'
import React from 'react'


async function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}


export async function generateMetadata({params,searchParams}) {
  return {
    title: 'User Profile for :  ' + searchParams.username,
    description: 'User Profile Page',
    keywords: 'User Profile',
}
}

export default async function page({params,searchParams}) {
    
    console.log('user profile page')
    // const [first, setFirst] = useState(123)
    console.log("User Profile Page Params=>", params,searchParams)
    
    await delay(3000)

    if (searchParams.username === 'error') {
        throw new Error('User not found')
    }
    if (searchParams.username === '404') {
        throw notFound()
    }

    
  return (
    <div>page
        <h1>User Profile Page</h1>
        <p>Username: {searchParams.username}</p>
    </div>
  )
}
