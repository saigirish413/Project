import React from 'react'

export default function LinksCard({text,children}) {
  return (
    <>
        <div className=' bg-white rounded-md p-4 shadow mb-4 md:mb-0'>
                <span className='text-sm font-semibold'>{text}</span>
                {children}
            </div>
      
    </>
  )
}
