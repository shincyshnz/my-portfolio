import Navbar from './components/navbar/Navbar'
import { Contact, Education, Hero, Parallax, Project1, Project2, Project3 } from "./pages";
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
      <section><Education /></section>

      <Project1 />
      <Project2 />
      <Project3 />
      <Contact />
    </div >

  )
};

export default App;
