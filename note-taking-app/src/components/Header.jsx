import React from 'react'
import Logo from '../logo.svg'

function Header() {
  return (
    <div className='container header'>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <h1>Note Taking</h1>
        </div>
        <div>
            <ul className='navbar-menus'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header