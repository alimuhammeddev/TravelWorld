import React from 'react'
import Header from '../Header'
import { distance, location, people, travel, world } from '../assets'
import WeServe from '../Components/WeServe'
import Testimonial from '../Components/Testimonial'

const Home = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
        <div className='mt-28'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 items-center'>
            <div>
              <div className='flex items-center gap-'>
                <h1 className='bg-[#FAA935] text-[#0B2727] w-fit p-1 px-2 rounded-full font-medium lg:text-3xl text-xl' style={{ fontFamily: "'Island Moments', cursive" }}>Know Before You Go</h1>
                <img src={world} alt="" />
              </div>
              <h1 className='text-[#0B2727] lg:text-3xl text-xl font-medium mt-3'>Traveling opens the door to creating <span className='text-[#FAA935]'>memories</span></h1>
              <p className='font-light text-gray-500 lg:text-xl mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis  asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.</p>
            </div>
            <div className='lg:flex lg:justify-end'>
              <img src={travel} alt="" />
            </div>
          </div>
          <div className='lg:flex  items-center grid lg:grid-cols-3 grid-cols-2 lg:gap-40 gap-5 lg:mt-0 mt-5 rounded-full w-fit lg:p-5 lg:shadow-md'>
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

        <div className='lg:mt-20 mt-7'>
          <WeServe />
        </div>

        <div className='lg:mt-20 mt-10'>
          <Testimonial />
        </div>
      </div>
    </section>
  )
}

export default Home