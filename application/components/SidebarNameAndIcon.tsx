import React from 'react'

export default function SidebarNameAndIcon({svg,text}) {
  return (
    <>
            <div className='flex flex-row  flex-wrap items-center gap-2 py-2 p-1 hover:text-green-400 hover:bg-gray-800 hover:border-none hover:rounded'>
                {svg}
                <span className='text-sm font-normal'>{text}</span>

            </div>
            
    </>
  )
}
