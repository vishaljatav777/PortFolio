import './App.css';
import Heder from './components/Heder';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skill from './pages/Skill';
import Project from './pages/Project';
// import Testimonials from './pages/Testimonials';
import Achievement from './pages/Achievement';
// import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './pages/ScrollToTopButton';

function App() {
  return (
    <>
      <Heder/>
      <Home/>
      <About/>
      <Education/>
      <Skill/>
      <Project/>
      {/* <Testimonials/> */}
      <Achievement/>
      {/* <Experience/> */}
      <Contact/>
      <Footer/>
      <ScrollToTopButton/>
    </>
  )
}

export default App
