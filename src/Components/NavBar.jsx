import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Button from '../Common/Button'

function NavBar() {
  return (
    <div className='w-full px-10'>
      <div className='max-w-screen-2xl w-full py-6 mx-auto md:border-b border-zinc-700 flex items-center justify-between'>
        <div className='flex gap-28'>
          <div className='flex items-center gap-4'>
            <img src={logo} className='h-[2rem]' />
            <h2 className='text-2xl font-semibold'>Refokus</h2>
          </div>
          <div className='md:flex items-center gap-12 hidden'>
            {
              ["Home", "Work", "Culture", "News"].map((el, idx) => (
                <Link className='text-lg' key={idx}>{el}</Link>
              ))
            }
          </div>
        </div>
        <div className='hidden sm:flex'>
          <Button text={"Start a Project"} />
        </div>
      </div>
    </div>
  )
}

export default NavBar