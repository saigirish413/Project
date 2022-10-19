import React from 'react'

export default function OverviewCard({svg,text,number}) {
  return (
    <div className='w-52 rounded-lg shadow bg-white md:flex md:flex-col space-y-4 p-3'>
        <div className='pl-2'>
                     {svg}
        </div>
        <div className='flex justify-between pl-2 pr-2'>
                <div className='text-xs font-normal'>
                    {text}
                </div>
                <div className='font-bold'>
                    {number}
                </div>
        </div>
        
    </div>
  )
}
