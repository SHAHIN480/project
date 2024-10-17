import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='flex px-11 gap-8 items-center justify-center'>
      <div className='hero_left w-[49%] pt-4'>
        <div className="hero_left_title gap-5 ">
          <span className='text-4xl font-bold leading-3'>I am Gerold</span>
          <h1 className='pt-4 text-6xl font-bold leading-1 title'>Web Developer + <br />  UX Designer</h1>
          <p className="peraghrap pt-6 peragraph"> I break down complex user experience problems to  create integrity
            focussed solutions that connect  billions of people</p>
        </div>
        <div className="download_section flex gap-4 pt-9">
          <div className="download_btn flex items-start justify-start">
            <button className='w-[211px] h-[56px] rounded-full'>Download Cv</button>
          </div>
          <div className="social_icon flex items-center justify-center gap-4">
            <ul className='flex items-center justify-center gap-4'>
              <li className='w-[45px] h-[45px]  flex items-center justify-center border-collapse border-2 rounded-full border-blue-500'><a href="#"><FaFacebookF /></a></li>
              <li className='w-[45px] h-[45px]  flex items-center justify-center border-collapse border-2 rounded-full  border-blue-500'><a href="#"><FaLinkedinIn /></a></li>
              <li className='w-[45px] h-[45px]  flex items-center justify-center border-collapse border-2 rounded-full  border-blue-500'><a href="#"><FaDribbble /></a></li>
              <li className='w-[45px] h-[45px]  flex items-center justify-center border-collapse border-2 rounded-full  border-blue-500'><a href="#"><FaGithub /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero_right flex items-center justify-center pt-11 w-[49%]">
        <div className="hero_imagebox w-[430px] h-[467px]">
          <img className=' ' src="./src/assets/image/hero_img.jpg" alt="" />
        </div>
      </div>

    </section>

  )
}

export default Hero
