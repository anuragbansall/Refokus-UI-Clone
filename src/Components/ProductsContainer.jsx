import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
import webvideo from "../assets/web.mp4"

const productData = [
  {
    title: "arqitel",
    description:
      "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    isLiveBtn: true,
    isCaseBtn: false,
  },
  {
    title: "cula",
    description:
      "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    isLiveBtn: true,
    isCaseBtn: true,
  },
  {
    title: "layout land",
    description:
      "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
    isLiveBtn: true,
    isCaseBtn: false,
  },
  {
    title: "TTR",
    description:
      "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
    isLiveBtn: true,
    isCaseBtn: false,
  },
];

function ProductsContainer() {

  const [position, setPosition] = useState(0)
  const handlePosition = (idx) => {
    setPosition(idx*20)
  }

  return (
    <div className='mt-8 relative'>
        {productData.map((el, idx) => (
          <Product
            title={el.title}
            description={el.description}
            isLiveBtn={el.isLiveBtn}
            isCaseBtn={el.isCaseBtn}
            key={idx}
            idx={idx}
            handlePosition={handlePosition}
          />
        ))}
        <div className='absolute top-0 w-full h-full pointer-events-none hidden lg:inline-block'>
          <motion.div
           initial={{y: position}} 
           animate={{y: position+"rem"}}
           transition={{ease: [0.76, 0, 0.24, 1], duration: 0.6}}
           className='absolute left-[30%] w-[25rem] h-[20rem] overflow-hidden'
          >
            <motion.div 
              animate = {{y: -position+"rem"}}
              transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
              className='w-full h-full bg-sky-100'
            >
              <video src={webvideo} muted autoPlay loop className='h-full w-full object-cover'></video>
            </motion.div>
            <motion.div 
              animate = {{y: -position+"rem"}}
              transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
              className='w-full h-full bg-sky-200'
            >
              <video src={webvideo} muted autoPlay loop className='h-full w-full object-cover'></video>
            </motion.div>
            <motion.div 
              animate = {{y: -position+"rem"}}
              transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
              className='w-full h-full bg-sky-300'
            >
              <video src={webvideo} muted autoPlay loop className='h-full w-full object-cover'></video>
            </motion.div>
            <motion.div 
              animate = {{y: -position+"rem"}}
              transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
              className='w-full h-full bg-sky-400'
            >
              <video src={webvideo} muted autoPlay loop className='h-full w-full object-cover'></video>
            </motion.div>
          </motion.div>
        </div>
    </div>
  )
}

export default ProductsContainer