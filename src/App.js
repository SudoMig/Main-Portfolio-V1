import "./App.css";
import NavBar from "./sections/navBar";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import AboutsUs from "./components/AboutsUs";
import Techonolgies from "./components/Techonolgies";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./sections/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()


function App() {
  return (
    <div className="Montserrat scroll-smooth">
      <NavBar />
      <BackToTop />
      <Header />
      <AboutsUs />
      <Techonolgies />
      <Services />
      <Workflow />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
