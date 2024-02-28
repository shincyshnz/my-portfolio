import Navbar from './components/navbar/Navbar'
import { Contact, Education, Hero, Parallax, Portfolio } from "./pages";
import "./app.scss"

const App = () => {
  return (
    <div>
      <section id='homepage'>
        <Navbar />
        <Hero />
      </section>

      <section id='experience'>
        <Parallax type="experience" />
      </section>

      <section id='education'>
        <Parallax type="education" />
      </section>
      <section>
        <Education />
      </section>

      <Portfolio />
      <section>
        <Contact />
      </section>
    </div >

  )
};

export default App;
