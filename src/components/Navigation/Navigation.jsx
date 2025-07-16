import React from 'react'
import style from './Navigation.module.css'

function Navigation() {

  return (
    <nav className={`${style.navigation} container`}>
        <div>
            <img src="/images/logo.png" alt="logo" />
        </div>
        
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Github</li>
        </ul>
    </nav>
  )
}

export default Navigation