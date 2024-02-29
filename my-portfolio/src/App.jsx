import Navbar from './components/navbar/Navbar'
import { Contact, Education, Hero, Parallax, Portfolio } from "./pages";
import "./app.scss"
import Cursor from './components/cursor/Cursor';

const App = () => {
  return (
    <div>
      <Cursor />

      <section id='homepage'>
        <Navbar />
        <Hero />
      </section>

      {/* <section id='experience'>
        <Parallax type="experience" />
      </section> */}

      {/* <section id='education'>
        <Parallax type="education" />
      </section>
      <section>
        <Education />
      </section> */}

      {/* <Portfolio /> */}
      
      {/* <section id='contact'>
        <Contact />
      </section> */}

    </div >

  )
};

export default App;
