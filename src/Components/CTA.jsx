import React from 'react'
import { maletourist } from '../assets'

const CTA = () => {
    return (
        <section className='bg-[#CAE5F4]'>
            <div className="max-w-7xl mx-auto justify-center lg:p-0 p-5">
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:items-center'>
                    <div>
                        <h1 className='text-[#0B2727] font-medium lg:text-3xl text-xl lg:mt-3 mt-2'>Subscribe now to get useful traveling information</h1>
                        <form action="#" className="sm:flex sm:gap-4 mt-5">
                            <div className="relative w-full">
                                <label htmlFor="email" className="sr-only">Email</label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-md border-gray-200 bg-white p-3 pr-24 text-gray-700 shadow-xs transition focus:border-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                                />

                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 bottom-1 flex items-center justify-center gap-2 rounded-md bg-[#FAA935] hover:bg-[#e6992d] px-4 text-white text-sm font-medium transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        <p className='text-[#0B2727] lg:text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisici sunt in, provident facere ipsam?</p>
                    </div>
                    <div className='flex justify-end'>
                        <img src={maletourist} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA