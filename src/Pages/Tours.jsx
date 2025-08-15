import React from 'react'
import { distance, featuredtours, location, people, tours } from '../assets'
import Header from '../Header'
import CTA from '../Components/CTA'
import Footer from '../Footer'

const Tours = () => {
    return (
        <section>
            <div>
                <Header />
            </div>

            <div className="relative w-full mt-20">
                <img src={tours} alt="" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white lg:text-5xl text-2xl font-semibold drop-shadow-lg">
                        <span className='text-[#FAA935]'>All</span> Tours
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
                <div>
                    <div className='lg:flex md:flex items-center justify-center mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-40 gap-5 lg:mt-0 mt-5 rounded-full w-fit lg:p-5 lg:shadow-md'>
                        <div className='flex items-center gap-2'>
                            <img src={location} alt="" />
                            <div>
                                <h1 className='text-[#0B2727] font-medium'>Location</h1>
                                <p className='text-gray-400 text-sm'>Where are you going?</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={distance} alt="" />
                            <div>
                                <h1 className='text-[#0B2727] font-medium'>Distance</h1>
                                <p className='text-gray-400 text-sm'>Distance k/m</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={people} alt="" />
                            <div>
                                <h1 className='text-[#0B2727] font-medium'>Max People</h1>
                                <p className='text-gray-400 text-sm'>0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className='text-[#0B2727] lg:text-3xl text-xl font-medium lg:mt-10 mt-5 text-center'>Our Featured <span className='text-[#FAA935]'>Tours</span></h1>
                    </div>
                    <img src={featuredtours} alt="" className='mx-auto mt-5' />

                    <div>
                        <button
                            type="submit"
                            className="p-2 rounded-md bg-[#FAA935] hover:bg-[#e6992d] px-4 text-white text-sm font-medium transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden mt-5 mx-auto justify-center flex"
                        >
                            View All Tours
                        </button>
                    </div>
                </div>
            </div>

            <div className='lg:mt-10 mt-5'>
                <CTA />
            </div>

            <div className="max-w-7xl mx-auto justify-center lg:p-0 p-5 lg:mt-10 mt-5">
                <Footer />
            </div>
        </section>
    )
}

export default Tours