import Navbar from "./components/Navbar"
import { HeroImage, HeroText } from "./components/Hero"
import Platform from "./components/Platform"
import Slider from "./components/Slider"
import Section from "./components/Section"
import Card from "./components/Card"
import FAQ from "./components/faq"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className="bg-main">
        <div className="container mx-auto lg:grid lg:min-h-fit grid-cols-2 grid-rows-1">
          <div className="mb-20 px-4 pt-5">
            <Navbar />
            <HeroText />
          </div>
          <div className="relative flex justify-center items-center w-full lg:w-hero lg:h-full h-hero bg-black">
            <HeroImage />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto">
          <Platform/>
        </div>
      </div>
      <div className="bg-main">
        <div className="container mx-auto">
          <Slider/>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto">
          <Section/>
          <Card/>
          <FAQ/>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto">
          <Footer/>
        </div>
      </div>
    </>
  )
}


export default App
