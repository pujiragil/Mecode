import yellow from '../../assets/yellow.svg'
import person from '../../assets/person.png'
import code from '../../assets/code.png'
import { BiCodeAlt } from 'react-icons/bi'
import { BsArrowUpRight } from 'react-icons/bs'

export const HeroTitle = ({ text, icon, style}) => {
  return (
    <>
      {icon === 'true' ? (
        <h1 className="text-4xl lg:text-5xl font-normal w-3/4 leading-title mb-7 lg:mb-14 font-roboto">Improve your skills by <BiCodeAlt className="text-white bg-black rounded-full w-10 h-10 p-2 text-2xl inline-block" /> study with coding</h1>
      ): (
        <h1 className={`text-4xl ${style} md:w-2/5 lg:w-3/4 lg:text-5xl font-medium leading-title font-roboto`}>{text}</h1>
      )}
    </>
  )
}

export const HeroParagraph = () => {
  return (
    <p className="text-xs font-normal tracking-hero leading-4 w-3/4 mb-6 lg:mb-12 font-inter">Create, launch, and iterate on new marketing campaigns without distracting your product team.</p>
  )
}

export const HeroButton = () => {
  return (
    <button className="text-white bg-black py-3 px-5 flex justify-center items-center gap-x-4 font-medium font-inter">
      Get Started <BsArrowUpRight className="inline-block font-medium"/>
    </button>
  )
}

export const ShapeYellow = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img className="absolute flex justify-center w-96 h-full left-9 lg:w-lg-yellow lg:h-lg-yellow lg:left-[73]" src={yellow} alt="shape" />
    </div>
  )
}

export const Person = () => {
  return (
    <div className="absolute w-full h-full overflow-hidden">
      <img className="absolute z-10 h-person w-person bottom-0 right-0 md:right-48 sm:right-36 lg:w-lg-person lg:h-lg-person object-cover lg:right-auto lg:left-60" src={person} alt="person" />
    </div>
  )
}

export const Code = () => {
  return (
    <img className="absolute h-code lg:h-lg-code md:h-80 sm:h-60 w-80 lg:w-lg-code md:w-3/4 sm:w-3/5 object-cover md:bottom-10 lg:-left-40 md:-left-4 -left-2 bottom-24" src={code} alt="code" />
  )
}