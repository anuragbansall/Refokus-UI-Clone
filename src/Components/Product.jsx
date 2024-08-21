import React from 'react'
import Button from "../Common/Button"

function Product({title, description, isLiveBtn, isCaseBtn, idx, handlePosition}) {
  return (
    <div onMouseEnter={()=>{
      handlePosition(idx)
    }} className='w-full h-[20rem] cursor-pointer duration-200 max-w-screen-2xl mx-auto flex justify-between items-center md:px-[8rem] py-[2rem] flex-col md:flex-row'>
        <h2 className='text-[3rem] font-medium'>{title}</h2>
        <div className=''>
          <p className='mb-4 w-[30ch]'>
            {description}
          </p>
          <div className='flex gap-4 mb-4'>
            {
              isLiveBtn &&<Button text='Live Now' />
            }
            {
              isCaseBtn &&<Button text='Case Study' />
            }
          </div>
        </div>
    </div>
  )
}

export default Product