import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-3xl text-white font-round-bold">Welcome to the world of GTA and GSAP!</h1>
      </div>
    </main>
  )
}

export default App