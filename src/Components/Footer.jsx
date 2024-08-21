import React from 'react'

function Footer() {
  return (
    <div className='w-full max-w-screen-2xl mx-auto py-4 px-10 md:px-32'>
      <div className='min-h-[20rem] flex mb-8 justify-between md:items-center flex-wrap flex-col md:flex-row'>
      <h2 className='text-[20vw] md:text-9xl font-semibold tracking-tight'>refokus.</h2>
      <div className='flex gap-16 flex-col md:flex-row'>
        <div>
          <h3 className='text-zinc-400 mb-6 text-3xl md:text-xl'>Socials</h3>
          <ul>
            {
              ["Instagram", "Twitter", "Linkedin"].map((item, idx) => (
                <li className='text-zinc-400 text-3xl md:text-xl' key={idx}><a href=''>{item}</a></li>
              ))
            }
          </ul>
        </div>
        <div>
          <h3 className='text-zinc-400 mb-6 text-3xl md:text-xl'>Sitemap</h3>
          <ul>
            {
              ["Home", "Work", "Carrers", "Contact"].map((item, idx) => (
                <li className='text-zinc-400 text-3xl md:text-xl' key={idx} ><a href=''>{item}</a></li>
              ))
            }
          </ul>
        </div>
        <div className='flex flex-col md:items-end md:justify-end'>
          <p className='max-w-[20ch] font-semibold md:text-end mb-6 md:ml-auto'>Refokus is a pioneering digital agency driven by design and empowered by technologu.</p>
          <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
              alt="footer"
              className="h-[2rem]"
            />
        </div>
      </div>
      </div>
      <div>
      <ul className='flex gap-x-4 md:gap-8 py-2 flex-wrap'>
            {
              ["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((item, idx) => (
                <li className='text-zinc-400 text-lg md:text-xl' key={idx} ><a href='' >{item}</a></li>
              ))
            }
          </ul>
      </div>
    </div>
  )
}

export default Footer