import React from 'react'
import { customer1, customer2, customer3 } from '../assets'

const Testimonial = () => {
    return (
        <section>
            <div>
                <h1 className='bg-[#FAA935] text-[#0B2727] w-fit p-1 px-2 rounded-full font-medium lg:text-3xl text-xl' style={{ fontFamily: "'Island Moments', cursive" }}>Customers Love</h1>
                <h1 className='text-[#0B2727] font-medium lg:text-3xl text-xl lg:mt-3 mt-2'>What our customers say about us</h1>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 lg:mt-5 mt-3'>
                <div className='border-2 lg:border-none lg:p-0 border-[#FAA935] p-5 rounded-xl'>
                    <h1 className='text-gray-400 lg:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipt earum debitits recusandae voluptate illum expedita corrupti aliquid doloribus delectus?</h1>
                    <div className='flex items-center gap-5 mt-5'>
                        <img src={customer1} alt="" />
                        <div>
                            <h1 className='text-[#0B2727] font-medium'>John Deep</h1>
                            <p className='text-gray-400'>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 lg:border-none lg:p-0 border-[#FAA935] p-5 rounded-xl'>
                    <h1 className='text-gray-400 lg:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipt earum debitits recusandae voluptate illum expedita corrupti aliquid doloribus delectus?</h1>
                    <div className='flex items-center gap-5 mt-5'>
                        <img src={customer2} alt="" />
                        <div>
                            <h1 className='text-[#0B2727] font-medium'>Ally Gomez</h1>
                            <p className='text-gray-400'>Customer</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 lg:border-none lg:p-0 border-[#FAA935] p-5 rounded-xl'>
                    <h1 className='text-gray-400 lg:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipt earum debitits recusandae voluptate illum expedita corrupti aliquid doloribus delectus?</h1>
                    <div className='flex items-center gap-5 mt-5'>
                        <img src={customer3} alt="" />
                        <div>
                            <h1 className='text-[#0B2727] font-medium'>Alex Bugg</h1>
                            <p className='text-gray-400'>Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial