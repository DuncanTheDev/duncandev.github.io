import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skill from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}
