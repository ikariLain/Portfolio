import { useState } from 'react';
import Bars from '../../assets/BarsWhite.png';
import Xmark from '../../assets/XmarkWhite.png';

//import './Header.css'

export default function Header (){
    const [MenuOpen, SetMenuOpen] = useState(false);

    const MenuItems = [
        {id : 1, Name: 'About me', href: '#About'},
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

            {/* Dark/Light Mode Toggle placeholder */}
          <div className='hidden md:flex items-center gap-2 ml-auto '>
              <div className='w-4 h-4 bg-white rounded-full'></div>
              <div className='w-4 h-4 bg-black rounded-full'></div>
              <div className='w-6 h-3 bg-gray-500 rounded-full'></div>
          </div>

            {/* Hamburger  */}
        <button
        onClick={() => SetMenuOpen(true)}
        className="md:hidden">

        <img src={Bars} className='w-7 h-7' />
        </button>



           {/* Sidebar */}
            <div className={`
            fixed top-0 right-0 h-full w-64
            bg-black/70 backdrop-blur-xl
            border-l border-white/10
            p-6
            transform transition-transform duration-300

            ${MenuOpen ? 'translate-0' : 'translate-x-full' }`}
            >
                {/*  Close button */}
                <button onClick={() => SetMenuOpen(false)}>
                    <img
                        src={Xmark}
                        className="w-6 h-6"
                    />
                </button>
                {/*Menu Links */}
                <div className="mt-10 flex flex-col gap-6"
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

