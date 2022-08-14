import { CardHeader, CardItem } from "./CardElements"
import { cardOne, cardThree, cardTwo } from "../../data/card/cardObj"

const Card = () => {
  return (
    <div className="px-4 mb-20 lg:mb-40">
      <CardHeader />
      <div className="flex flex-col lg:flex-row lg:gap-x-8 justify-center items-center">
        <CardItem {...cardOne} />
        <CardItem {...cardTwo} />
        <CardItem {...cardThree} />
      </div>
    </div>
  )
}

export default Card