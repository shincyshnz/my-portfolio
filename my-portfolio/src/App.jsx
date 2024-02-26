import Navbar from './components/navbar/Navbar'
import { Contact, Hero, Parallax, Project1, Project2, Project3, Services } from "./pages";
import "./app.scss"

const App = () => {
  return (
    <div>
      <section id='homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='services'>
        <Parallax type="services" />
      </section>
      <Services />
      <section id='portfolio'>
        <Parallax type="portfolio" />
      </section>
      <Services />
      <Project1 />
      <Project2 />
      <Project3 />
      <Contact />
    </div>

  )
};

export default App;
