import icon from '../../assets/icon.svg'

export const Logo = () => {
  return (
    <div className="flex gap-x-2.5 justify-center items-center">
      <img src={icon} alt="Macode" />
      <h1 className="text-xl font-bold text-black lg:hidden">mecode.</h1>
    </div>
  )
}

export const Toggle = () => {
  return (
    <div className="lg:hidden">
      <span className="bg-black w-6 h-0.5 block my-2 rounded-full"></span>
      <span className="bg-black w-6 h-0.5 block my-2 rounded-full"></span>
    </div>
  )
}

export const NavMenu = () => {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-8 font-inter">
      <a className="block" href="#">Tutorials</a>
      <a className="block" href="#">Case Studies</a>
      <a className="block" href="#">Resources</a>
    </div>
  )
}