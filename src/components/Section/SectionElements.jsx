import code from '../../assets/code2.png'
import triangle from '../../assets/triangle.svg'
import { Button, Paragraph } from "../GlobalElements"
import { HeroTitle } from "../Hero/HeroElements"
import { BsArrowRight } from "react-icons/bs"

export const SectionOne = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <HeroTitle text="The language for building web pages" width="w-full" />
        <Paragraph text="Go live on a fast, reliable, and hassle-free hosting network that scales with your business with one click and go code!" width="w-full" mb="mb-8" />
        <Button text="Try it Yourself" icon={<BsArrowRight className="text-2xl" />} style="flex justify-center items-center gap-x-4 bg-primary-button text-primary font-medium w-full py-5 text-lg font-inter mb-20" />
      </div>
      <div className="relative">
        <img className="w-full relative" src={code} alt="code" />
        <img className="absolute bottom-0 right-0 rotate-12 w-28 object-cover" src={triangle} alt="triangle" />
      </div>
    </div>
  )
}