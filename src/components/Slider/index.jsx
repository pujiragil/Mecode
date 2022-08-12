import React from 'react'

import { Paragraph } from '../GlobalElements'
import { HeroTitle } from '../Hero/HeroElements'
import { CardItem, CardWrapper } from './SliderElements'

const Slider = () => {
  return (
    <>
      <div className="p-4 text-black h-slider">
        <HeroTitle text="Our Features Special For You" icon="false" />
        <Paragraph mb="mb-5" text="We provide various special features for all of you" />
        <CardWrapper />
      </div>
    </>
  )
}

export default Slider