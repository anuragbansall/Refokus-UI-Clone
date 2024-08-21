import React from 'react'
import ActionCard from './ActionCard'

function ActionCardsContainer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-2xl mx-auto py-10 px-10 md:px-32 flex flex-col md:flex-row gap-1'>
            <ActionCard 
                width = "basis-1/3"
                title = "Up Next: Culture"
                desc = "Who we are"
                isHover = {false}
                detail = "Explore what drives our team."
            />
            <ActionCard 
                width = "basis-2/3"
                title = "Get in Touch"
                desc = "Let's get to it, together."
                heading = "Start a Project"
                isHover = {true}
                button = "Contact us"
            />
        </div>
    </div>
  )
}

export default ActionCardsContainer