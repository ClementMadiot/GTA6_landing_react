import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Components
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import FirstVideo from "./components/FirstVideo";
import Jason from "./components/Jason";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />

      <FirstVideo />
      <Jason />
    </main>
  )
}

export default App