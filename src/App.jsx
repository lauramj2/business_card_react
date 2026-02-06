import About from "./Components/About.jsx"
import Footer from "./Components/Footer.jsx"
import Info from "./Components/Info.jsx"
import Interests from "./Components/Interests.jsx"

export default function App() {
  return (
    <div id="card">
        <Info />
        <About />
        <Interests  header ="Interests" hobbies="Reading, playing video games, hiking" />
        <Footer />
    </div>
  )
}


