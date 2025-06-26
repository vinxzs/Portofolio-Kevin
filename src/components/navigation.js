import React from 'react'
import { BsFillHouseDoorFill, BsFillPersonFill, BsFileCodeFill } from "react-icons/bs"
import { Link } from 'react-scroll'

export default function Navigation() {
  return (
    <div 
    className='fixed bottom-0 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5'>
        <div className='flex justify-between mx-auto bg-white text-primary p-2 rounded-full border-secondary border-solid border-[1px] max-w-[200px] lg:flex-col'>
            <Link to="home" className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer' 
                smooth={true}
                spy={true}
                activeClass='active'>
                < BsFillHouseDoorFill/>
            </Link>
            <Link to="profile" className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer' 
                smooth={true}
                spy={true}
                activeClass='active'>
                < BsFillPersonFill/>
            </Link>
            <Link to="portfolio" className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer' 
                smooth={true}
                spy={true}
                activeClass='active'>
                < BsFileCodeFill/>
            </Link>
        </div>
        </div>
  )
}

