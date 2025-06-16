import './Header.css'

export default function Header  (){
    return (
    <>
      <header className='Header-Container'>

          <div className='"Navbar'>
              <a href="#About;" className='Item'>About me</a>

              <a href="#Skills"className='Item'>Skills</a>
              <a href="#EXP" className='Item'>Experiences</a>
              <a href="#Projects" className='Item'>Projects</a>
              <a href="#Contact" className='Item'>Contact</a>
          </div>

          <div className='Dark-Or-Light-Mode-Container'>
              <div className='Light-Logo'></div>
              <div className='Dark-Logo'></div>
              <div className='Toggle-Symbol'></div>
          </div>

      </header>
    </>
   )
  }

