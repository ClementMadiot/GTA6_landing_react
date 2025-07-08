import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Components
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import FirstVideo from "./components/FirstVideo";
import Jason from "./components/Jason";
import Lucia from "./components/Lucia";
import SecondVideo from "./components/SecondVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />

      <FirstVideo />
      <Jason />
      
      <SecondVideo />
      <Lucia />
    </main>
  )
}

export default App