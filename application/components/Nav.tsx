import React from 'react'
import Avatar from './Avatar'
import NavList from './NavList'
import Sidebar from './Sidebar'

export default function Nav() {
  return (
    <>
    <Sidebar />
        <nav className=' border bg-white md:flex md:flex-row justify-between shadow-xl w-full md:h-14 pl-48 list-none '>
          
                <div className='grid grid-cols-3 md:gap-14 sm:gap-5 items-center  ml-14 text-xs  '>
                        <NavList href="#"
                        text="Employee view"/>
                        <NavList href="#"
                        text="System Control"/>
                        <NavList href="/dashboard"
                        text="Admin"/>
                        
                </div>
                <div className='md:pt-1.5 flex flex-row space-x-5 justify-end md:mr-4 sm:-mr-4'>
                   
                    <Avatar>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-8 rounded-full  shadow-xl">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg></a>

                    </Avatar>
                    <Avatar >
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-8  rounded-full  shadow-xl">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg></a>

                    </Avatar>
                    <Avatar>
                        <a href="#"><img
                        src="/assets/person2.jpg"
                        className="rounded-full  shadow-xl w-8"
                        alt="Avatar"/></a>
                    </Avatar> 
                </div>
          

        </nav>
      
    </>
  )
}
