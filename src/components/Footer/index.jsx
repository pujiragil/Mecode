import React from 'react'
import { FooterCard, FooterCopy, FooterLink, FooterMenu, FooterTitle } from './FooterElements'

const Footer = () => {
  return (
    <div className="px-8 py-12">
      <FooterCard />
      <div className="md:flex justify-between items-center md:mb-10">
        <FooterTitle />
        <FooterMenu />
      </div>
      <div className="md:flex md:pt-10 border-t border-icon justify-between items-center">
        <FooterLink />
        <FooterCopy />
      </div>
    </div>
  )
}

export default Footer