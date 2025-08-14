import React from 'react'
import { logo } from './assets'

const Footer = () => {
  return (
    <section>
        <div>
            <div>
                <img src={logo} alt="" />
                <h1 className='mt-2 text-gray-400 lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.</h1>
            </div>
        </div>
    </section>
  )
}

export default Footer