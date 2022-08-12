import line from '../../assets/line.svg'
import { HeroButton, HeroParagraph, HeroTitle, Person, ShapeYellow, Code } from "./HeroElements"

export const HeroText = () => {
  return (
    <div>
      <HeroTitle icon="true"/>
      <img className="mb-px lg:mb-4" src={line} alt="line" />
      <HeroParagraph/>
      <HeroButton/>
    </div>
  )
}

export const HeroImage = () => {
  return (
    <>
      <ShapeYellow/>
      <Person/>
      <Code/>
    </>
  )
}