import React from 'react'
import { FooterCard, FooterCopy, FooterLink, FooterMenu, FooterTitle } from './FooterElements'

const Footer = () => {
  return (
    <div className="px-8 py-12">
      <FooterCard/>
      <FooterTitle/>
      <FooterMenu/>
      <FooterLink/>
      <FooterCopy/>
    </div>
  )
}

export default Footer