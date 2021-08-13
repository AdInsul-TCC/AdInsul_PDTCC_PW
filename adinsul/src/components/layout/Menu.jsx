import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className='Menu'>
        <nav className="nav">
      <label class="logo">AdInsul</label>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/sobre">Sobre</Link>
        </li>
        <li>
        <a>Saiba mais</a>
        </li>
      </ul>
    </nav>

    </aside>
)
export default Menu