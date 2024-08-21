import React, { useState } from 'react'
import work1png from "../assets/work_1.png"
import work2png from "../assets/work_2.png"
import work3png from "../assets/work_3.png"
import work4png from "../assets/work_4.png"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function HeroSection() {

    const [images, setImages] = useState([
        {url: work1png, top: "50%", left: "50%", isActive: false},
        {url: work2png, top: "55%", left: "45%", isActive: false},
        {url: work3png, top: "45%", left: "55%", isActive: false},
        {url: work4png, top: "60%", left: "53%", isActive: false}
    ])

    const { scrollYProgress } = useScroll()
    const setImagesIsAvtive = (arr) => {
        setImages(prevImages => (
            prevImages.map((item, idx) => (
                arr.indexOf(idx) === -1? {...item, isActive: false} : {...item, isActive: true}
            ))
        ))
    }

    scrollYProgress.on("change", (data) => {
        const progress = Math.floor(data*100)
        switch(progress){
            case 0:
                setImagesIsAvtive([])
                break;
            case 1:
                setImagesIsAvtive([0])
                break;
            case 2:
                setImagesIsAvtive([0, 1])
                break;
            case 3:
                setImagesIsAvtive([0, 1, 2])
                break;
            case 4:
                setImagesIsAvtive([0, 1, 2, 3])
                break;
        }
    })

  return (
    <div className='w-full'>
        <div className='relative max-w-screen-2xl mx-auto'>
            <h2 className='uppercas lg:text-[25rem] text-[30vw] leading-none font-medium text-center select-none'>work</h2>
            <div className='absolute top-0 left-0 w-full h-full bg-sky-10'>
                {
                    images.map((item, idx) => (
                        item.isActive && <img key={idx} src={item.url} className={"absolute h-[15rem] rounded-lg -translate-x-1/2 -translate-y-1/2"} style={{top: item.top, left: item.left}} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HeroSection