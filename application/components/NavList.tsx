import React from 'react'

export default function NavList({href,text}) {
  return (
    <div className='text-xs  pb-4 text-center h-12 flex items-center justify-center pt-3 hover:border-b-2 hover:border-b-blue-500  hover:text-blue-500'>
            <div className='font-medium hover:font-semibold '>
                    <a href={href}>{text}</a>
                </div>

      
    </div>
  )
}
