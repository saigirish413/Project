import React from 'react'
import BarChart from '../../components/BarChart'
import EmployeeGenderCard from '../../components/EmployeeGenderCard'
import LinksCard from '../../components/LinksCard'
import OverviewCard from '../../components/OverviewCard'


export default function Admin() {
const links=["Add employee",
"Profile request update",
"Payroll management",
"Market place",
"Special days","Audit trail"]


  return (
    <>
    <div className='bg-gray-100 h-auto p-6'>
        <div className='flex flex-row space-x-4  '>
                <div>
                    <img src="/assets/flower2.jpg" className='h-20 w-20 bg-transparent'/>
                </div>
                <div className='mt-5'>
                    <div className='text-lg font-semibold'>Hello Harman</div>
                    <div className='text-xs font-normal'>Welcome to your dashboard</div>
                </div>
        </div>
        <div className='space-y-4 md:space-y-0  md:flex md:flex-row md:justify-between mt-5'>
            <OverviewCard 
                svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-5 rounded-full bg-blue-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            }
                text={"Number of staff"}
                number={"128"}
            />
            <OverviewCard 
                svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-5 rounded-full bg-red-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              
            }
                text={"Number of leaves"}
                number={"16"}
            />
            <OverviewCard 
                svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-5 rounded-full bg-orange-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            }
                text={"Profile update request"}
                number={"21"}
            />
            <OverviewCard 
                svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 rounded-full bg-green-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
                text={"Next Pay"}
                number={"25th June"}
            />

        </div>
        <div className='mt-12 md:grid md:grid-cols-10 gap-4 '>
            <div className='col-span-4  border shadow rounded-md p-2 mb-4 md:mb-0'>
                  <div className='flex flex-row justify-between m-3'>
                        <span className='text-sm font-bold'>Employee happiness</span>
                        <span className='text-xs font-medium text-gray-500'>August 2022</span>
                  </div>
                  <div>
                        <span className='text-xs font-semibold ml-3 '>How likely do you thinkcompany is likely to succed</span>
                        
                  </div>
                 <div><BarChart/></div>
                 <div className='mt-8 ml-4 '> 
                    <a href="#" className='text-blue-500 text-sm font-semibold '>See all surveys</a>
                    
                 </div>
            </div>
            <div className='col-span-3 grid-rows-6 space-y-6'>
                <div className='row-span-4 '>
                    <LinksCard 
                        text="Employee gender"
                        children={<>
                            <div className='grid grid-cols-2 text-center '>
                                <div className='flex flex-col mt-2'>
                                    <span className='text-xs font-medium text-pink-500'>37.5%</span>
                                    <img src="/assets/women.png" className='h-8 w-5 ml-14 mt-8' />
                                    <span className='text-xs font-medium text-pink-500 mt-1 ml-1'>48</span>
                                    <span className='text-xs font-medium text-gray-500 ml-2'>Women</span>
                                </div>
                                <div className='flex flex-col mt-2'>
                                     <span className='text-xs font-medium text-sky-500'>62.5%</span>
                                     <img src="/assets/man.png" className='h-14 w-5 ml-14 mt-2' />
                                     <span className='text-xs font-medium text-sky-500 mt-1 ml-1'>80</span>
                                     <span className='text-xs font-medium text-gray-500 ml-2'>Men</span>
                                </div>

                            </div>
                        </>}
                    />
                </div>
                <div className='row-span-2 '>
                        <EmployeeGenderCard 
                          text="Employee gender"
                          number="15%"
                        />
                </div>
            </div>
            <div className='col-span-3 grid-rows-6 space-y-6'>
                <div className='row-span-4 mb-4'>
                            <LinksCard 
                                text="Requests"
                                children={<>
                                    <div className='mt-3 list-none '>
                                        <div className='flex justify-between text-xs mb-1'>
                                            <span>
                                                Profile update request
                                            </span>
                                            <span>
                                                21
                                            </span>
                                        </div>
                                        <hr/>
                                        <div className='flex justify-between text-xs mb-1 mt-2'>
                                            <span>
                                                Leave request
                                            </span>
                                            <span>
                                                13
                                            </span>
                                        </div>
                                        <hr/>
                                        <div className='flex justify-between text-xs mb-1 mt-2'>
                                            <span>
                                                Loan request
                                            </span>
                                            <span>
                                                06
                                            </span>
                                        </div>
                                        <hr/>
                                        <div className='flex justify-between text-xs mb-2 mt-2'>
                                            <span>
                                                Other requests
                                            </span>
                                            <span>
                                                18
                                            </span>
                                        </div>
                                        
                                        

                                    </div>
                                </>}
                            />
                </div>
                <div className='row-span-2 '>
                <EmployeeGenderCard 
                          text="Employee gender"
                          number="85%"
                        />
                                    
                </div>
            </div>
        </div>
        <div className='md:grid md:grid-cols-3 gap-4 mt-5'>
            
            <LinksCard text="Create Anouncement"
                children={<><div className='flex flex-row-2 '>
                    <span className='text-xs font-normal mt-5'>Make an anouncement <br/> to your coworkers</span>
                    <div className=''>
                        <img src="/assets/anounce.jpg" className='w-16 rounded-full border flex md:ml-20'/>
                    </div>
                </div>
                <div className='flex flex-row mt-5 space-x-7'>
                    <button type="button" className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight rounded">
                        Create anouncement
                    </button>
                    <button className='text-xs font-medium text-gray-500'>
                            See history
                    </button>
                </div>
                </>}
            />
           <LinksCard text="Quick links"
            children={<><div className='mt-3'>
                <span className='text-xs font-normal '>
                    Based on your most frequently used modules
                </span>
                <div className='text-xs text-blue-500 font-normal mt-5'>
                {links}
                </div>
            </div>
            </>}
            />
            <LinksCard text="Quick links"
            children={<><div className='flex flex-row space-x-10'>
                <div className='mt-5'>
                    <img src="/assets/book.png" className='h-28' />
                </div>
                <div className='flex flex-col space-y-3'>
                    <span className=' text-xs font-normal mt-5'>
                            Create your company manual<br/>
                            And everything you want your<br/>
                            employees to know about the<br/>
                            company
                    </span>
                    <button type="button" className=" px-4 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight rounded">
                        Add content
                    </button>

                </div>
                
            </div>
            </>}
            />
             
        </div>
        
    </div>

    </>
  )
}
