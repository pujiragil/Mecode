import React from 'react'
import { Coursera, Edx, Triangle, Udemy } from './PlatformElements'

const Platform = () => {
  return (
    <div className="relative flex justify-evenly h-48 lg:72 w-full items-center">
      <Triangle/>
      <Edx/>
      <Udemy/>
      <Coursera/>
    </div>
  )
}

export default Platform