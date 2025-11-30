import { useState, useEffect } from 'react';
import Bars from '../../assets/BarsWhite.png';
import Xmark from '../../assets/XmarkWhite.png';
import {  FaMoon} from 'react-icons/fa';
import { LuSun } from "react-icons/lu";
//import './Header.css'

export default function Header (){
    const [MenuOpen, SetMenuOpen] = useState(false);
    const [DarkMode, SetDarkMode] = useState(
        localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    useEffect(() => {
        if (DarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [DarkMode]);

    const toogleTheme = () => SetDarkMode(!DarkMode);

    const MenuItems = [
        {id : 1, Name: 'About', href: '#About'},
        {id : 2, Name: 'Skills', href: '#Skills'},
        {id : 3, Name: 'Experiences', href: '#EXP'},
        {id : 4, Name: 'Projects', href: '#Projects'},
        {id : 5, Name: 'Contact', href: '#Contact'}
    ]


    return (
      <header className='
        relative top-0 left-0 w-full
        flex justify-center items-center
        px-6 py-4 z-50
        '>

        {/* Desktop Navbar */}
        <nav className='
        hidden md:flex gap-8
        px-10 py-3
        rounded-full
        bg-black/40 backdrop-blur-xl
        border border-white/12
        shadow-lg
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translatey-y-1/2
        '>
            {MenuItems.map(item => (
                <a key={item.id}
                    href={item.href}
                    className='
                    text-white/80 hover:text-white font-medium
                    tracking-wide
                    '>
                    {item.Name}</a>
            ))}

                {/* Glow Effect */}
                <div className='
                absolute left-1/2 -translate-x-1/2
                top-full
                mt-2
                w-120 h-1
                bg-linear-to-b from-white/70 to-transparent
                blur-lg rounded-full
                '>

                </div>

            </nav>

            {/* Dark/Light Mode Toggle  */}
          <button
            onClick={toogleTheme}
            className='
            hidden md:flex items-center ml-auto mr-6
            text-white text-xl p-2
            rounded-full bg-black/30 border border-white/10
            hover:bg-black/ transition
             '>
                {DarkMode ? ( <LuSun  className='text-white transition'/>)
                : (
                    <FaMoon className='text-white transition'/>
                )}
          </button>

         {/* Hamburger  */}
        <button
        onClick={() => SetMenuOpen(true)}
        className="md:hidden fixed top-6 right-6 z-50">

        <img src={Bars} className='w-7 h-7' />
        </button>



           {/* Sidebar */}
            <div className={`
            fixed top-1/2 right-0 transform -translate-y-1/2
            w-40 p-10
            bg-black/30 backdrop-blur-xl
            border border-white/10
            rounded-full
            flex flex-col items-center gap-2
            transition-transform duration-300
            ${MenuOpen ? 'translate-x-0' : 'translate-x-full' }`}
            >
                {/*  Close button */}
                <button onClick={() => SetMenuOpen(false)}>
                    <img
                        src={Xmark}
                        className="w-10 h-10"
                    />
                </button>
                {/*Menu Links */}
                <div className="mt-10 flex flex-col items-center gap-8"
                >
                    {MenuItems.map(item => (
                        <a
                            className='
                            text-white/90 text-lg font-medium tracking-wide hover:text-white
                            '
                            key={item.id}
                            href={item.href}
                            onClick={()=> SetMenuOpen(false)}
                        >
                            {item.Name}
                        </a>
                    ))}
                </div>
            </div>
      </header>
   )
  }

