import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Service = () => {
    return (
        <div className='service_section py-11'>
            <div className='flex-col items-center justify-center gap-3'>
                <h1 className='flex items-center justify-center text-5xl service_title font-semibold'>My Quality Services </h1>
                <p className='flex items-center justify-center pt-4 text-base font-normal'>We put your ideas and thus your wishes in the form of a unique web project that </p>
                <p className='flex items-center justify-center text-base font-normal '> inspires you and you custome</p>
            </div>
            <div>
                <div className='flex items-center justify-between px-11 service_item  mt-8'>
                    <span className='text-2xl font-bold'>01</span>
                    <h3 className='text-3xl font-bold'>Branding Design</h3>
                    <p  className='flex items-center justify-center text-base font-normal '>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit. Soluta earum minima
                        similique alias </p>
                    <div className='rotate-45 arrow'>
                        <FaArrowRight />
                    </div>

                </div>
                <div className='flex items-center justify-between px-11 service_item  mt-2'>
                    <span className='text-2xl font-bold'>02</span>
                    <h3 className='text-3xl font-bold'>UI/UX Design</h3>
                    <p  className='flex items-center justify-center text-base font-normal '>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit. Soluta earum minima
                        similique alias </p>
                    <div className='rotate-45 arrow'>
                        <FaArrowRight />
                    </div>
                </div>
                <div className='flex items-center justify-between px-11 service_item  mt-2'>
                    <span className='text-2xl font-bold'>03</span>
                    <h3 className='text-3xl font-bold'>Web Design</h3>
                    <p  className='flex items-center justify-center text-base font-normal '>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit. Soluta earum minima
                        similique alias </p>
                    <div className='rotate-45 arrow'>
                        <FaArrowRight />
                    </div>
                </div>
                <div className='flex items-center justify-between px-11 service_item  mt-2'>
                    <span className='text-2xl font-bold'>04</span>
                    <h3 className='text-3xl font-bold'>Web Development</h3>
                    <p  className='flex items-center justify-center text-base font-normal '>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit. Soluta earum minima
                        similique alias </p>
                    <div className='rotate-45 arrow'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Service
