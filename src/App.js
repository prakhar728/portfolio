import Navbar from './components/NavBar'; 
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/HOME/Home';
import styles from './app.module.css'
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className={styles.mainContainer}>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Footer />
    </div>
  );
}

export default App;
