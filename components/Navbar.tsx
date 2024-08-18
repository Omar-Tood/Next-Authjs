import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="border-g bg-background w-full flex items-center">
        <div>
           <Link className="font-bold" href="/">
            Home
           </Link>
        </div>
    </nav>
  )
}

export default Navbar