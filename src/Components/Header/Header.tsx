import { useState } from 'react';
import Bars from '../../assets/BarsWhite.png';
import Xmark from '../../assets/XmarkWhite.png';

import './Header.css'

export default function Header  (){

    const [MenuOpen, SetMenuOpen] = useState(false);

    const ToggleMenu = () => {
        SetMenuOpen(!MenuOpen);
    }

    const CloseMenu = () => {
        SetMenuOpen(false);
    }

    const MenuItems = [
        {id : 1, Name: 'About me', href: '#About'},
        {id : 2, Name: 'Skills', href: '#Skills'},
        {id : 3, Name: 'Experiences', href: '#EXP'},
        {id : 4, Name: 'Projects', href: '#Projects'},
        {id : 5, Name: 'Contact', href: '#Contact'}
    ]


    return (
    <>
      <header className='Header-Container'>


          <nav className='Navbar'>
                {MenuItems.map(item => (
                    <a key={item.id} href={item.href} className='Item'>{item.Name}</a>
                ))}
            </nav>


          <div className='Dark-Or-Light-Mode-Container'>
              <div className='Light-Logo'></div>
              <div className='Dark-Logo'></div>
              <div className='Toggle-Symbol'></div>
          </div>

        <div className={`Hamburger-Menu ${MenuOpen ? 'hidden' : ''}`} onClick={ToggleMenu}>
                <img className='BarsImg' src={Bars} />
            </div>



           {/* Sidebar för mobil */}
            <div className={`Sidebar ${MenuOpen ? 'Open' : ''}`}>
                <div className="Sidebar-Header">
                    <img
                        src={Xmark}
                        className="Close-Icon"
                        onClick={CloseMenu}
                    />
                </div>
                <div className="Sidebar-Items">
                    {MenuItems.map(item => (
                        <a
                            key={item.id}
                            href={item.href}
                            className='Item'
                            onClick={CloseMenu}
                        >
                            {item.Name}
                        </a>
                    ))}
                </div>
            </div>

      </header>
    </>
   )
  }

