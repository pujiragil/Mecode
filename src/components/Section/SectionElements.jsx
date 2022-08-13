import code from '../../assets/code2.png'
import triangle from '../../assets/triangle.svg'
import university from '../../assets/university.svg'
import showcase from '../../assets/showcase.svg'
import { Button, Paragraph } from "../GlobalElements"
import { HeroTitle } from "../Hero/HeroElements"
import { BsArrowRight } from "react-icons/bs"

export const SectionOne = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <div className="mb-20">
        <HeroTitle text="The language for building web pages" style="w-full mb-5" />
        <Paragraph text="Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!" width="w-full" mb="mb-8" />
        <Button text="Try it Yourself" icon={<BsArrowRight className="text-2xl" />} style="flex justify-center items-center gap-x-4 bg-primary-button text-primary font-medium w-full py-5 text-lg font-inter" />
      </div>
      <div className="relative">
        <img className="w-full relative" src={code} alt="code" />
        <img className="absolute -bottom-4 right-0 rotate-12 w-28 object-cover" src={triangle} alt="triangle" />
      </div>
    </div>
  )
}

export const SectionTwo = () => {
  return (
    <div>
      <HeroTitle text="Get up and running fast together" style="w-full text-center mb-20"/>
      <div className="relative grid grid-cols-1 grid-rows-2 gap-y-28">
        <CardSection logo={university} alt="university" title="University" paragraph="Browse hundreds of in-depth videos, courses, and guides to get up and running fast"/>
        <span className="absolute w-full border-b-2 inset-y-1/2 border-main rounded-full"></span>
        <CardSection logo={showcase} alt="showcase" title="Showcase" paragraph="Get inspired by the incredible websites built by members of the community"/>
      </div>
    </div>
  )
}

const CardSection = ({logo, alt, title, paragraph}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img className="block w-10 mb-10" src={logo} alt={alt} />
      <h1 className="text-3xl font-inter font-bold mb-8">{title}</h1>
      <p className="w-3/4">{paragraph}</p>
    </div>
  )
}