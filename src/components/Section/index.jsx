import React from 'react'
import { SectionImg, SectionOne, SectionTwo } from './SectionElements'

const Section = () => {
  return (
    <div className="flex flex-col px-5 pt-8 lg:mb-20">
      <SectionOne />
      <div className="lg:flex justify-between items-start">
        <SectionTwo />
        <SectionImg />
      </div>
    </div>
  )
}

export default Section