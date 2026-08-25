import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import About from './Components/About-Me/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Experiences from './Components/Experiences/Experiences';
import Contact from './Components/Contact/Contact';
import useLanguage from './useLanguage';
import './index.css';

function App() {
  const { copy } = useLanguage();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{copy.meta.skipLink}</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
