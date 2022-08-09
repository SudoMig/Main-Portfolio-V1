import "./App.css";
import Header from "./components/Header";
import NavBar from "./sections/navBar";
import AboutsUs from "./components/AboutsUs";
import Techonolgies from "./components/Techonolgies";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./sections/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  return (
    <div className="Montserrat scroll-smooth">
      <NavBar />
      <Header />
      <AboutsUs />
      <Techonolgies />
      <Services />
      <Workflow />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
