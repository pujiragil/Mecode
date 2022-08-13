export const Paragraph = ({text, mb, width}) => {
  return (
    <p className={`font-inter font-extralight ${width} ${mb} lg:text-xl md:mb-10`}>{text}</p>
  )
}

export const Button = ({text, style, icon}) => {
  return <button className={`${style}`}>{text}{icon && icon}</button>
}