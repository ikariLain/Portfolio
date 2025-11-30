//import './Footer.css'
export default function Footer () {
  return (
      <div className='
      w-full mt-20 py-6
      flex flex-col items-center justify-center
      bg-black/20 backdrop-blur-xl
      border-t border-white/10
      text-white/70
      '>
        <p className="
        text-sm tracking-wide
        ">
          © {new Date().getFullYear()} Matheus Torrico. All rights reserved.
          </p>
      </div>
  )
}

