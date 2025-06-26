import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Banner() {
  return (
    
    <div className='section'>
      <div className='container mx-auto max-w-[1200px] px-3 items-center'>
        <div className='w-full' data-aos="zoom-in">
          <div className='text-center w-full max-w-xs mx-auto mb-[10px] '
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000">
                    <div className='w-[300px] h-[300px] bg-gradient rounded-full overflow-hidden items-center'>
                        <img src='/images/profile.jpeg' alt=''/>
                    </div>
                    <h2 className='text-gradient text-[36px] mt-[20px] text-center'>Kevin Oktavian</h2>
                </div> 
            <div className='block text-center font-secondary font-black text-[30px]'>
                Hello I'm a
            <div>
            <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
                'Web Developer',
                500, // wait 1s before replacing "Mice" with "Hamsters"
                'Mobile Developer',
                500,
                'UI/UX Designer',
                500
            ]}
            wrapper="span"
            speed={30}
            cursor={true}
            className='ml-3 text-secondary'
            repeat={Infinity}
            />
            </div>
        </div>
        <div className='max-w-[750px] text-center mx-auto mt-5'
        data-aos="fade-up" 
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        data-aos-delay="0"
        >
          <hr className="my-3 border-black w-2/3 mx-auto"/>
            <p className='col-end-10'>A student majoring in <span className='text-red-600 font-bold'>information systems</span> who has a hard-working, meticulous, disciplined, and optimistic
individual character in doing something that can also adapt to a dynamic environment. Always trying to find
solutions to every problem. Has extensive knowledge in working together to manage projects with various groups
from different backgrounds
            </p>
            <hr className="my-3 border-black w-2/3 mx-auto"/>
            
      </div>
      </div>
    </div>
  </div>
  )
}
