import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function Button({text}) {
  return (
    <button className='bg-white text-black rounded-full px-4 py-1 flex items-center gap-2'>{text} <FaArrowRightLong />
</button>
  )
}

export default Button