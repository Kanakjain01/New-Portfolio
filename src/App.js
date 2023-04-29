
import "./App.css";
import Home from "./Components/Home/Home";
import What from "./Components/What I do/What";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <What />
      <About />
      <Project />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
