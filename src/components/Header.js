import React from 'react'
import { FaBeer } from "react-icons/fa"

 function Header() {
  return (
      <header>
          <div>
              <span className='logo' >
                House staff  
        </span>
        <ul className='nav'>
          <li>О нас</li>
          <li>Контакты</li>
          <li>Личный кабинет</li>
          <FaBeer />
        </ul>
          </div>
      <div className='presentation'> </div >
    </header>
  )
}

export default Header
