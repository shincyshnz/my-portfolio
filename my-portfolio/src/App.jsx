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
      <Parallax />
      <Services />
      <Parallax />
      <Project1 />
      <Project2 />
      <Project3 />
      <Contact />
    </div>

  )
};

export default App;
