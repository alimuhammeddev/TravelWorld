import React from 'react'
import { logo } from './assets'
import { Facebook, Instagram, Mail, Map, MapPin, Phone, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <section>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
        <div>
          <img src={logo} alt="" />
          <h1 className='mt-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.</h1>
          <div className='flex items-center gap-5'>
            <Youtube className='text-[#ffffff] bg-[#FAA935] rounded-full p-1 mt-2' size={30} />
            <Twitter className='text-[#ffffff] bg-[#FAA935] rounded-full p-1 mt-2' size={30} />
            <Facebook className='text-[#ffffff] bg-[#FAA935] rounded-full p-1 mt-2' size={30} />
            <Instagram className='text-[#ffffff] bg-[#FAA935] rounded-full p-1 mt-2' size={30} />
          </div>
        </div>
        <div>
          <h1 className='text-[#0B2727] font-medium text-lg'>Discover</h1>
          <p className='text-gray-400'>Home</p>
          <p className='text-gray-400'>About</p>
          <p className='text-gray-400'>Tours</p>
        </div>
        <div>
          <h1 className='text-[#0B2727] font-medium text-lg'>Quick Links</h1>
          <p className='text-gray-400'>Gallery</p>
          <p className='text-gray-400'>Login</p>
          <p className='text-gray-400'>Register</p>
        </div>
        <div>
          <h1 className='text-[#0B2727] font-medium text-lg'>Contact</h1>
          <p className='text-gray-400 flex items-center gap-2'><MapPin className='text-[#FAA935]' size={17}/> Address: Lorem</p>
          <p className='text-gray-400 flex items-center gap-2'><Mail className='text-[#FAA935]' size={17}/> Email: travelworld123@gmail.com</p>
          <p className='text-gray-400 flex items-center gap-2'><Phone className='text-[#FAA935]' size={17}/> Phone: 000333222243</p>
        </div>
      </div>
    </section>
  )
}

export default Footer