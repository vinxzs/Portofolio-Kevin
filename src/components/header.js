import React from "react"
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Header() {
  return (
  <div id="home" className='container absoulte mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0'>
    <div className='flex justify-between py-5 items-center'>
        <div 
        className='text-gradient font-primary '
        data-aos="fade-right" 
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        data-aos-delay="0"
        >
          <h1 className='text-[30px] loading-none font-bold'>Kevin</h1>
          <h4 className='font-normal loading-none'>Oktavian</h4>
          
        </div>
        <div 
        className='flex items-center space-x-3'   
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        data-aos-delay="0"
        >
          <div className="font-bold font-primary text-gradient ">
            Let's Connect
          </div>
          <a href='https://github.com/vinxzs' target="_blank">
            <BsGithub size={24}/>
          </a>
          <a href='https://www.linkedin.com/in/kevin-oktavian7/' target="_blank">
            <BsLinkedin size={24}/>
          </a>
          <a href='https://www.instagram.com/kvnokt_?igsh=eXdlNDFldmR3Ympk' target="_blank">
            <BsInstagram size={24}/>
          </a>
        </div>
    </div>
  </div>
  )
}

