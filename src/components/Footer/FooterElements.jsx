import icon from '../../assets/icon2.svg'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa'

export const FooterCard = () => {
  return (
    <div className="bg-primary-card p-7 flex flex-col justify-center items-center rounded-lg drop-shadow-footer mb-12">
      <h1 className="font-extrabold text-2xl font-roboto text-center mb-4">Start upgrading your skills free for this month</h1>
      <p className="font-inter font-extralight text-center w-10/12 mb-4">Build your site for free and take as long as you need</p>
      <button className="block rounded bg-[#00000040] w-full mb-4 py-2.5 text-white">Try Yourself</button>
      <button className="block rounded bg-black w-full py-2.5 text-white">Get Started</button>
    </div>
  )
}

export const FooterTitle = () => {
  return (
    <div className="flex justify-center items-center text-white gap-x-2 mb-12">
      <img src={icon} alt="icon" />
      <h1 className="text-3xl font-bold">mecode</h1>
    </div>
  )
}

export const FooterMenu = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 text-white h-40 text-center text-xl font-inter font-extralight items-center mb-12">
      <p>Tutorials</p>
      <p>Resources</p>
      <p>Case Studies</p>
    </div>
  )
}

export const FooterLink = () => {
  return (
    <div className="flex justify-between items-center text-icon py-8 px-4 border-y border-icon text-2xl mb-10">
      <FaFacebook/>
      <FaInstagram/>
      <FaLinkedin/>
      <FaGithub/>
      <FaTelegram/>
    </div>
  )
}

export const FooterCopy = () => {
  return (
    <h1 className="text-xl font-extralight text-white text-center">© 2021 Copyright. <span className="text-primary font-medium">mecode</span></h1>
  )
}