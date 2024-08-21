import React from 'react'
import Home from './Pages/Home'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='overflow-x-hidden'>
      <Home />
    </div>
  )
}

export default App