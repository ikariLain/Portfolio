import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import './index.css';
import Skills from './Components/Skills/Skills';
function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>
      <Hero />
      <Skills />
      </main>
      <Footer />
    </div>
  )
}


export default App
