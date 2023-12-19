import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallex from "./Components/Parallex/Parallex";

import "./app.scss";

function App() {
  return (
    <div className="container">
      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <Parallex type="services" />
      </section>
      <section id="Portfolio">
        <Parallex type="portfolio" />
      </section>
      <section id="Contact">Contact</section>
      <section id="About">About</section>
      <section>Parallax2</section>
      <section>Parallax3</section>
    </div>
  );
}

export default App;
