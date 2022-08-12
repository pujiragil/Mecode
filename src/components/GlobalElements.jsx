export const Paragraph = ({text, mb}) => {
  return (
    <p className={`font-inter font-extralight w-1/2 ${mb} lg:text-xl md:mb-10 lg:mb-0`}>{text}</p>
  )
}