import React from 'react'

const Button = ({children , bg_color , text_color, border_color,calculateBmi}) => {
  return (
    <button className={`border-2 ${border_color} block w-full ${bg_color} ${text_color} py-2 cursor-pointer rounded-lg font-semibold mb-2`} onClick={calculateBmi}>{children}</button>
  )
}

export default Button