import code from '../../assets/code2.png'
import triangle from '../../assets/triangle.svg'
import university from '../../assets/university.svg'
import showcase from '../../assets/showcase.svg'
import tutors from '../../assets/tutors.png'
import { Button, Paragraph } from "../GlobalElements"
import { HeroTitle } from "../Hero/HeroElements"
import { BsArrowRight } from "react-icons/bs"

export const SectionOne = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <div className="mb-20">
        <HeroTitle text="The language for building web pages" style="w-full mb-5 md:w-3/5" />
        <Paragraph text="Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!" width="w-full md:w-3/5" mb="mb-8" />
        <Button text="Try it Yourself" icon={<BsArrowRight className="text-2xl" />} style="flex justify-center items-center gap-x-4 bg-primary-button text-primary font-medium w-full md:w-3/5 py-5 text-lg font-inter" />
      </div>
      <div className="relative">
        <img className="w-full md:w-max relative" src={code} alt="code" />
        <img className="absolute -bottom-4 right-0 rotate-12 w-28 md:w-44 object-cover" src={triangle} alt="triangle" />
      </div>
    </div>
  )
}

export const SectionTwo = () => {
  return (
    <div className="md:flex flex-col justify-center items-center mb-14">
      <HeroTitle text="Get up and running fast together" style="w-full text-center mb-20 md:w-1/2"/>
      <div className="relative grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-y-28">
        <CardSection logo={university} alt="university" title="University" paragraph="Browse hundreds of in-depth videos, courses, and guides to get up and running fast"/>
        <span className="md:hidden absolute w-full border-b-2 inset-y-1/2 border-main rounded-full"></span>
        <CardSection logo={showcase} alt="showcase" title="Showcase" paragraph="Get inspired by the incredible websites built by members of the community"/>
      </div>
    </div>
  )
}

const CardSection = ({logo, alt, title, paragraph}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center font-inter">
      <img className="block w-10 mb-10" src={logo} alt={alt} />
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <p className="w-3/4 text-lg">{paragraph}</p>
    </div>
  )
}

export const SectionImg = () => {
  return (
    <div className="bg-primary-button w-full h-80 rounded-lg p-4">
      <div className="relative bg-primary-card w-full h-[368px] rounded-lg p-4 font-inter">
        <h2 className="text-black text-2xl font-bold opacity-30">Tutors</h2>
        <h2 className="text-black text-3xl font-bold opacity-20">Manigga</h2>
        <img className="absolute bottom-0 right-0 w-auto h-[320px] object-cover rounded-lg" src={tutors} alt="Tutors" />
      </div>
    </div>
  )
}