import React from 'react'

export default function Profile() {
  return (
    <div id='profile' className='section'>
        <div className='container mx-auto max-w-[1200px] px-3'>
            <div className='font-secondary text-center font-bold mb-12' 
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000">
                <h2 className='text-gradient font-secondary max-w-[700px] mx-auto text-[36px]'>My Skill</h2>
                <hr className="my-3 border-black w-2/3 mx-auto"/>
            </div>
            <div className='flex flex-col lg:flex-row lg: items-start justify-between lg:align-middle'>
                <div className='w-full lg:pt-[10px] lg:ml-[10px] '
                data-aos="zoom-out"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000">
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
                        <div className='w-[80%] mx-auto my-auto'>
                            <a href='https://www.w3schools.com/html/' target='_' rel="noreferrer">
                            <div className=' bg-white h-[80%] justify-center items-center flex rounded-lg overflow-hidden relative p-10 group'>
                                <img src='/images/7.png' alt=''/>
                               <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 transition ease-linear lg:group-hover:scale-100 lg:group-hover:opacity-100'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient'>
                                                HTML5
                                            </h4>
                                        </div>
                                        <p>
                                        HTML is the standard markup language for Web pages
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className='w-[80%] mx-auto my-auto'>
                            <a href='https://www.w3schools.com/css/' target='_' rel="noreferrer">
                            <div className=' bg-white h-[80%] justify-center items-center flex rounded-lg overflow-hidden relative p-10 group'>
                                <img src='/images/8.png' alt=''/>
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 transition ease-linear lg:group-hover:scale-100 lg:group-hover:opacity-100'>
                                    
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient'>
                                               CSS3
                                            </h4>
                                        </div>
                                        <p>
                                        CSS is the language we use to style an HTML document
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className='w-[80%] mx-auto my-auto'>
                            <a href='https://www.w3schools.com/REACT/DEFAULT.ASP' target='_' rel="noreferrer">
                            <div className=' bg-white h-[80%] justify-center items-center flex rounded-lg overflow-hidden relative p-10 group'>
                                <img src='/images/9.png' alt=''/>
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 transition ease-linear lg:group-hover:scale-100 lg:group-hover:opacity-100'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient'>
                                                React.js
                                            </h4>
                                        </div>
                                        <p>
                                        React is a JavaScript library for building user interfaces
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className='w-[80%] mx-auto my-auto'>
                            <a href='https://www.w3schools.com/mysql/default.asp' target='_' rel="noreferrer">
                            <div className=' bg-white h-[80%] justify-center items-center flex rounded-lg overflow-hidden relative p-10 group'>
                                <img src='/images/13.png' alt=''/>
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 transition ease-linear lg:group-hover:scale-100 lg:group-hover:opacity-100'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient'>
                                                MySql
                                            </h4>
                                        </div>
                                        <p>
                                        MySQL is a widely used relational database management system (RDBMS)
                                        </p>
                                    </div>
                                </div>
                            </div>
                          </a>
                        </div>
                        <div className='w-[80%] mx-auto my-auto'>
                            <a href='https://flutter.dev/' target='_' rel="noreferrer">
                            <div className=' bg-white h-[80%] justify-center items-center flex rounded-lg overflow-hidden relative p-10 group'>
                                <img src='/images/5.png' alt=''/>
                               <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 transition ease-linear lg:group-hover:scale-100 lg:group-hover:opacity-100'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient'>
                                                Flutter
                                            </h4>
                                        </div>
                                        <p>
                                        Flutter is an open source framework for building beautiful, natively compiled, multi-platform applications
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className='w-[80%] mx-auto my-auto'>
                            <a href='https://www.w3schools.com/mongodb/' target='_' rel="noreferrer">
                            <div className=' bg-white h-[80%] justify-center items-center flex rounded-lg overflow-hidden relative p-10 group'>
                                <img src='/images/14.png' alt=''/>
                               <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 transition ease-linear lg:group-hover:scale-100 lg:group-hover:opacity-100'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient'>
                                                MongoDB
                                            </h4>
                                        </div>
                                        <p>
                                        MongoDB is a document database. It stores data in a type of JSON format called BSON
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className='w-[80%] mx-auto my-auto'>
                            <a href='https://www.figma.com/' target='_' rel="noreferrer">
                            <div className=' bg-white h-[80%] justify-center items-center flex rounded-lg overflow-hidden relative p-10 group'>
                                <img src='/images/11.png' alt=''/>
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 transition ease-linear lg:group-hover:scale-100 lg:group-hover:opacity-100'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient'>
                                                Figma
                                            </h4>
                                        </div>
                                        <p>
                                        Figma helps design and development teams build great products, together
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className='w-[80%] mx-auto my-auto'>
                            <a href='https://www.w3schools.com/jquery/default.asp' target='_' rel="noreferrer">
                            <div className=' bg-white h-[80%] justify-center items-center flex rounded-lg overflow-hidden relative p-10 group'>
                                <img src='/images/1.png' alt=''/>
                                <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 transition ease-linear lg:group-hover:scale-100 lg:group-hover:opacity-100'>
                                    <div className='text-center w-full text-white'>
                                        <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                            <h4 className='text-gradient'>
                                                jQuery
                                            </h4>
                                        </div>
                                        <p>
                                        jQuery is a JavaScript Library
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
