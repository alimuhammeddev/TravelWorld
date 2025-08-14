import React from 'react'
import { customization, experience, gallery, tourguide, tourimages, weather } from '../assets'

const WeServe = () => {
    return (
        <section>
            <div className='lg:flex lg:items-center justify-between'>
                <div>
                    <h1 className='text-[#EE6E6E] lg:text-3xl text-2xl' style={{ fontFamily: "'Island Moments', cursive" }}>What we serve</h1>
                    <h1 className='text-[#0B2727] font-medium lg:text-3xl text-xl'>We offer our best <br /> services</h1>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-10 gap-5 mt-10'>
                    <div className='shadow-sm w-fit p-7 rounded-xl border-r-2 border-b-2 border-transparent hover:border-r-[#FAA935] hover:border-b-[#FAA935] transition-all duration-300 cursor-pointer'>
                        <img src={weather} alt="" />
                        <h1 className='text-[#0B2727] font-medium lg:text-xl text-lg mt-5'>Calculate Weather</h1>
                        <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet, <br /> adipisicing elit.</p>
                    </div>
                    <div className='shadow-sm w-fit p-7 rounded-xl border-r-2 border-b-2 border-transparent hover:border-r-[#FAA935] hover:border-b-[#FAA935] transition-all duration-300 cursor-pointer'>
                        <img src={tourguide} alt="" />
                        <h1 className='text-[#0B2727] font-medium lg:text-xl text-lg mt-5'>Best Tour Guide</h1>
                        <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet, <br /> adipisicing elit.</p>
                    </div>
                    <div className='shadow-sm w-fit p-7 rounded-xl border-r-2 border-b-2 border-transparent hover:border-r-[#FAA935] hover:border-b-[#FAA935] transition-all duration-300 cursor-pointer'>
                        <img src={customization} alt="" />
                        <h1 className='text-[#0B2727] font-medium lg:text-xl text-lg mt-5'>Customization</h1>
                        <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet, <br /> adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div className='lg:mt-28 mt-12'>
                <div>
                    <h1 className='bg-[#FAA935] text-[#0B2727] w-fit p-1 px-2 rounded-full font-medium lg:text-3xl text-xl lg:mx-auto' style={{ fontFamily: "'Island Moments', cursive" }}>Explore</h1>
                    <h1 className='text-[#0B2727] font-medium lg:text-3xl text-xl lg:text-center lg:mt-3 mt-2'>Our featured tours</h1>
                </div>
                <img src={tourimages} alt="" className='flex justify-center mx-auto lg:mt-5 mt-3' />
            </div>

            <div className='lg:mt-28 mt-12'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <div>
                        <h1 className='bg-[#FAA935] text-[#0B2727] w-fit p-1 px-2 rounded-full font-medium lg:text-3xl text-xl' style={{ fontFamily: "'Island Moments', cursive" }}>Experience</h1>
                        <h1 className='text-[#0B2727] font-medium lg:text-3xl text-xl lg:mt-3 mt-2'>With our all experience we will serve you</h1>
                        <p className='text-gray-400 lg:text-lg mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas aliquam, hic tempora inventore suscipit unde.</p>
                        <div className='flex gap-5 mt-5'>
                            <div>
                                <h1 className='bg-[#FAA935] text-[#ffffff] w-fit p-3 lg:text-xl text-lg font-medium rounded-ss-xl rounded-br-xl flex mx-auto'>12k+</h1>
                                <p className='text-gray-400 text-center text-sm mt-2'>Successful trip</p>
                            </div>
                            <div>
                                <h1 className='bg-[#FAA935] text-[#ffffff] w-fit p-3 lg:text-xl text-lg font-medium rounded-ss-xl rounded-br-xl flex mx-auto'>2k+</h1>
                                <p className='text-gray-400 text-center text-sm mt-2'>Regular clients</p>
                            </div>
                            <div>
                                <h1 className='bg-[#FAA935] text-[#ffffff] w-fit p-3 px-5 lg:text-xl text-lg font-medium rounded-ss-xl rounded-br-xl flex mx-auto'>15</h1>
                                <p className='text-gray-400 text-center text-sm mt-2'>Years experience</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <img src={experience} alt="" />
                    </div>
                </div>

                <div className='lg:mt-28 mt-10'>
                    <div>
                        <h1 className='bg-[#FAA935] text-[#0B2727] w-fit p-1 px-2 rounded-full font-medium lg:text-3xl text-xl lg:mx-auto' style={{ fontFamily: "'Island Moments', cursive" }}>Gallery</h1>
                        <h1 className='text-[#0B2727] font-medium lg:text-3xl text-xl lg:text-center lg:mt-3 mt-2'>Visit our customers tour gallery</h1>
                    </div>
                    <img src={gallery} alt="" className='flex justify-center mx-auto lg:mt-5 mt-3' />
                </div>
            </div>
        </section>
    )
}

export default WeServe