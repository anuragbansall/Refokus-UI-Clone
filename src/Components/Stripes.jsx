import React from 'react'

function Stripes() {

    const stripeData = [
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            number: 52,
          },
          {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            number: 2,
          },
          {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: 15,
          },
          {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            number: 52,
          },
          {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            number: 11,
          },
          {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: 48,
          },
    ]

  return (
    <div className="w-full max-w-screen-2xl mx-auto flex h-[4rem] mt-16">
        {stripeData.map((item, idx) => (
            <span key={idx} className='grow flex justify-between md:gap-4 items-center border-y border-r border-zinc-700 px-2 md:px-8 last:border-r-0'>
                <img src={item.url} className='w-[100%]' />
                <p className='hidden md:inline-block'>{item.number}</p>
            </span>
        ))}
    </div>
  )
}

export default Stripes