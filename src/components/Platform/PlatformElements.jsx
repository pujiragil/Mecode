import triangle from '../../assets/triangle.svg'
import coursera from '../../assets/coursera.svg'
import edx from '../../assets/edx.svg'
import udemy from '../../assets/udemy.svg'

export const Triangle = () => {
  return (
    <img className="absolute z-10 -top-12 right-9 w-24 lg:w-48 lg:-top-28" src={triangle} alt="triangle" />
  )
}

export const Edx = () => {
  return (
    <img className="relative h-8 lg:h-auto w-12 lg:w-36 object-fill" src={edx} alt="edx" />
  )
}

export const Coursera = () => {
  return (
    <img className="relative h-3 lg:h-auto w-20 lg:w-48 object-fill" src={coursera} alt="coursera" />
  )
}

export const Udemy = () => {
  return (
    <img className="relative h-8 lg:h-auto w-20 lg:w-44 object-fill" src={udemy} alt="udemy" />
  )
}