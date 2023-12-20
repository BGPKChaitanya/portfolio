import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallex from "./Components/Parallex/Parallex";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";

import "./app.scss";

function App() {
  return (
    <div className="container">
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <Parallex type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallex type="portfolio" />
      </section>

      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
