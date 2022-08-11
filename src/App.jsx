import Navbar from "./components/Navbar"
import { HeroImage, HeroText } from "./components/Hero"

function App() {
  return (
    <div className="bg-main">
      <div className="container mx-auto lg:grid grid-cols-2">
        <div className="mb-20 px-4 pt-5">
          <Navbar />
          <HeroText />
        </div>
        <div className="relative flex justify-center items-center w-full lg:w-hero h-hero bg-black">
          <HeroImage/>
        </div>
      </div>
    </div>
  )
}

export default App
