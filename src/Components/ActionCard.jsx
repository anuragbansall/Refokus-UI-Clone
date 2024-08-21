import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Button from '../Common/Button';
import { motion } from 'framer-motion'

function ActionCard({width, isHover=false, title, desc, heading, button, detail}) {
  return (
    <motion.div whileHover={{backgroundColor: isHover && "#7443ff", padding: "25px"}} className={`${width} bg-zinc-800 p-6 rounded-xl flex flex-col gap-20 justify-between hover:cursor-pointer`}>
        <div>
            <div className='w-full flex items-center justify-between'>
                <h3>{title}</h3>
                <FaArrowRightLong />
            </div>
            <h2 className='text-3xl font-medium mt-10 max-w-[10ch]'>{desc}</h2>
        </div>
        <div className='w-full '>
            {
                heading && <h2 className='md:text-6xl text-[15vw] leading-tight font-semibold tracking-tight mb-6'>{heading}</h2>
            }
            {
                button && <Button text={button} />
            }
            {
                detail && <p className='text-zinc-300 mt-4'>{detail}</p>
            }
        </div>
    </motion.div>
  )
}

export default ActionCard