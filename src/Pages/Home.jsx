import React from 'react'
import NavBar from "../Components/NavBar"
import HeroSection from '../Components/HeroSection'
import ActionCardsContainer from '../Components/ActionCardsContainer'
import ProductsContainer from "../Components/ProductsContainer"
import Footer from "../Components/Footer"
import Stripes from '../Components/Stripes'
import MarqueeContainer from '../Components/MarqueeContainer'
import ScrollProgress from '../Components/ScrollProgress'

function Home() {
  return (
    <div className='min-h-screen w-full bg-zinc-900 text-white'>
        {/* <ScrollProgress /> */}
        <NavBar />
        <HeroSection />
        <Stripes />
        <ProductsContainer />
        <MarqueeContainer />
        <ActionCardsContainer />
        <Footer />
    </div>
  )
}

export default Home