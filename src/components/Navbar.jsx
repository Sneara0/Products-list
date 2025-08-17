import React from 'react'


import {Link} from 'react-router-dom';
export default function Navbar(){
    return (
        <nav className=' bg-gray-800 text-white p-4 flex gap-4'>
         <Link to='/'>Home</Link>
         <Link to='/about' >About</Link>
         <Link to='/contact'>Contact</Link>
         <Link to='/products'>Products</Link>

        </nav>
    )
}