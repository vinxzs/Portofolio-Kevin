import React from 'react'

export default function Portfolio() {
  return (
    <div id='portfolio' className='section'>
      <div className='container mx-auto max-w-[1200px] px-3 pt-3 pb-20'>
        <div className='flex flex-col lg:align-middle lg:flex-row justify-between mb-[50px]'
        data-aos="fade-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000">
          <div className='order-2 lg:order-1 mt-5'>
              <h4 className='text-secondary font-primary text-[24px]'>
                Galery Portfolio
              </h4>
              <div className='text-gradient font-secondary max-w-[700px] mx-auto text-[24px]'>
                2024-2025
              </div>
            </div>  
          <div className='order-1 lg:order-2'>
              <h2 className='text-gradient font-secondary max-w-[700px] mx-auto text-[50px]'>
                04
              </h2>
              <div>complete</div>
            </div>  
        </div>
        <hr className="my-3 border-black w-2/3 mx-auto"/>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center'
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000">
          <div className='w-full'>
            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5  relative group'>
                <img src='/images/port1.png' alt=''/>
              </div>
          </div>
          <div className='w-full'>
            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5  relative group'>
                <img src='/images/port2.png' alt=''/>
              </div>
          </div>
          <div className='w-full'>
            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5  relative group'>
                <img src='/images/15.jpeg' alt=''/>
              </div>
          </div>
          <div className='w-full'>
            <div className='bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5  relative group'>
                <img src='/images/16.jpeg' alt=''/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
