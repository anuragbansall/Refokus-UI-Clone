import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    const { scrollYProgress } = useScroll()
    
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(Math.ceil(latest*100))
    })

  return (
    <div className={`w-full h-[0.2rem] sticky top-0`}>
        <div className={`h-full bg-violet-600`} style={{width: `${progress}%`, transition: "0.1s"}}></div>
    </div>
  )
}

export default ScrollProgress