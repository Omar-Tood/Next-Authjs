import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="border-b bg-background w-full flex items-center">
        <div className="flex w-full items-center justify-between my-4">
           <Link className="font-bold" href="/">
            Home
           </Link>
        </div>
        
        <div>
         <Link href="/middleware">Middleware</Link>
         <Link href="/server">Server</Link>
         
        </div>
       
    </nav>
  )
}

export default Navbar