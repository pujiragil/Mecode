import React from 'react'
import { SectionOne, SectionTwo } from './SectionElements'

const Section = () => {
  return (
    <div className="flex flex-col px-5 pt-8">
      <SectionOne/>
      <SectionTwo/>
    </div>
  )
}

export default Section