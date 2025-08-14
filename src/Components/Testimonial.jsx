import React from 'react'
import { customer1 } from '../assets'

const Testimonial = () => {
    return (
        <section>
            <div>
                <h1 className='bg-[#FAA935] text-[#0B2727] w-fit p-1 px-2 rounded-full font-medium lg:text-3xl text-xl' style={{ fontFamily: "'Island Moments', cursive" }}>Customers Love</h1>
                <h1 className='text-[#0B2727] font-medium lg:text-3xl text-xl lg:mt-3 mt-2'>What our customers say about us</h1>
            </div>

            <div>
                <div>
                    <h1 className='text-gray-400 lg:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipt earum debitits recusandae voluptate illum expedita corrupti aliquid doloribus delectus?</h1>
                    <div className='flex items-center gap-5'>
                        <img src={customer1} alt="" />
                        <div>
                            <h1 className='text-[#0B2727] font-medium'>John Deep</h1>
                            <p className='text-gray-400'>Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial