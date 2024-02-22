import { Contact, Hero, Parallax, Project1, Project2, Project3, Services } from "./pages";
import "./app.scss"

const App = () => {
  return (
    <div>
      <Hero />
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
