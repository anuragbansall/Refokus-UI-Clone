import React from 'react'
import { motion } from "framer-motion"

function Marquee({images, direction}) {
  return (
    <div className='flex items-center w-full overflow-x-hidden'>
        <motion.div initial={{x: direction==="left" ? "0" : "-100%"}} animate={{x: direction==="left" ? "-100%" : "0"}} transition={{ease: "linear", duration: 10, repeat: Infinity}} className="flex flex-shrink-0 gap-20 md:py-10 pr-20 py-5">
            {
                images.map((el, idx) => (
                    <img src={el} key={idx}/>
                ))
            }
        </motion.div>
        <motion.div initial={{x: direction==="left" ? "0" : "-100%"}} animate={{x: direction==="left" ? "-100%" : "0"}} transition={{ease: "linear", duration: 10, repeat: Infinity}} className="flex flex-shrink-0 gap-20 md:py-10 pr-20 py-5">
            {
                images.map((el, idx) => (
                    <img src={el} key={idx}/>
                ))
            }
        </motion.div>
    </div>
  )
}

export default Marquee