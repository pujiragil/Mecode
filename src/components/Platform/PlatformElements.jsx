import triangle from '../../assets/triangle.svg'
import coursera from '../../assets/coursera.svg'
import edx from '../../assets/edx.svg'
import udemy from '../../assets/udemy.svg'

export const Triangle = () => {
  return (
    <img className="absolute z-10 -top-12 right-9 w-24 md:w-40 md:absolute md:-top-[90px] lg:absolute lg:w-48 lg:-top-28" src={triangle} alt="triangle" />
  )
}

export const Edx = () => {
  return (
    <img className="relative h-8 md:h-auto lg:h-auto w-12 md:w-28 lg:w-36 object-fill" src={edx} alt="edx" />
  )
}

export const Coursera = () => {
  return (
    <img className="relative h-3 md:h-auto lg:h-auto w-20 lg:w-48 md:w-32 object-fill" src={coursera} alt="coursera" />
  )
}

export const Udemy = () => {
  return (
    <img className="relative h-8 md:h-auto lg:h-auto w-20 md:w-28 lg:w-44 object-fill" src={udemy} alt="udemy" />
  )
}