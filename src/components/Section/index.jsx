import React from 'react'
import { SectionImg, SectionOne, SectionTwo } from './SectionElements'

const Section = () => {
  return (
    <div className="flex flex-col px-5 pt-8">
      <SectionOne/>
      <SectionTwo/>
      <SectionImg/>
    </div>
  )
}

export default Section