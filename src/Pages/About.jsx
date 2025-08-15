import React from 'react'
import Header from '../Header'
import { abouthero, customization, img, tourguide, weather } from '../assets'
import CTA from '../Components/CTA'
import Footer from '../Footer'

const About = () => {
    return (
        <section>
            <div>
                <Header />
            </div>

            <div className="relative w-full mt-20">
                <img src={abouthero} alt="" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white lg:text-5xl text-2xl font-semibold drop-shadow-lg">
                        <span className='text-[#FAA935]'>About</span> Us
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
                <div className='flex lg:flex-row flex-col justify-between lg:gap-20 gap-7 lg:mt-20'>
                    <div>
                        <h1 className="text-[#0B2727] lg:text-3xl text-xl font-semibold lg:mt-0 mt-5">
                            Who
                            <span className='text-[#FAA935]'> We Are?</span>
                        </h1>
                        <p className='text-[#0B2727] lg:text-xl mt-2'>We’re all about creating unforgettable experiences for our guests.Our journey began with a simple passion for exploring the beauty of the World.</p>
                        <h1 className="text-[#0B2727] lg:text-3xl text-xl font-semibold lg:mt-10 mt-5">
                            Our
                            <span className='text-[#FAA935]'> Mission</span>
                        </h1>
                        <p className='text-[#0B2727] lg:text-xl mt-2'>We believe that travel is not just about visiting new places,but about immersing yourself in new cultures, connecting with nature, and making memories that last a lifetime.</p>
                    </div>
                    <img src={img} alt="" />
                </div>

                <div className='lg:flex md:flex lg:items-center justify-between mt-12'>
                    <div>
                        <h1 className='text-[#EE6E6E] lg:text-3xl text-2xl' style={{ fontFamily: "'Island Moments', cursive" }}>What we serve</h1>
                        <h1 className='text-[#0B2727] font-medium lg:text-3xl text-xl'>We offer our best <br /> services</h1>
                    </div>
                    <div className='flex lg:flex-row md:flex-row flex-col lg:gap-10 gap-5 mt-10'>
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
            </div>

            <div className='lg:mt-10 mt-5'>
                <CTA />
            </div>

            <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-10 mt-5">
                <Footer />
            </div>
        </section>
    )
}

export default About