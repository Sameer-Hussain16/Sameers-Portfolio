import "./app.scss"
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Images from "./components/imageSection/Images";
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects";


const App = () => {  
  return <div>
    <section id="Homepage">
    <Navbar />
      <Hero />
      <About />
      <Projects />
      <Images />
      <Footer />
    </section>
  </div>

};

export default App;
