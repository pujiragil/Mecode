import React from 'react'
import { Logo, NavMenu, Toggle } from './NavbarElements'

const Navbar = () => {
  return (
    <div className="flex justify-between lg:justify-start lg:gap-x-20 items-center mb-14">
      <Logo/>
      <Toggle/>
      <NavMenu/>
    </div>
  )
}

export default Navbar