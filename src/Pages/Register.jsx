import React from 'react'
import Header from '../Header'
import { house1, woman } from '../assets'
import { FcGoogle } from "react-icons/fc"
import { FaFacebook, FaApple } from "react-icons/fa"
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <section>
            <div>
                <Header />
            </div>

            <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 mt-16">
                <div className="flex justify-between flex-col lg:flex-row gap-10">
                    <img src={woman} alt="" className='lg:block hidden' />

                    <div className="mx-auto w-full max-w-md lg:mt-20 mt-10">
                        <h1 className="text-[#FAA935] lg:text-4xl text-xl font-semibold text-center">Create An Account</h1>
                        <p className="text-gray-400 lg:text-lg text-center mb-6">By creating an account, you agree to our <span className="text-[#FAA935]">Privacy policy</span> and <span className="text-[#FAA935]" >Terms of use.</span></p>

                        <form className="space-y-4">
                            <div className='flex items-center gap-2'>
                                <input type="text" placeholder='First Name' className='w-full border border-[#FAA935] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FAA935]' />
                                <input type="text" placeholder='Last Name' className='w-full border border-[#FAA935] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FAA935]' />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter your email or Username"
                                    className="w-full border border-[#FAA935] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FAA935]"
                                />
                            </div>

                            <div>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full border border-[#FAA935] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FAA935]"
                                />
                            </div>

                            <div>
                                <input type="text" placeholder='Mobile Number' className='w-full border border-[#FAA935] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FAA935]' />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#FAA935] text-white py-3 rounded-lg font-semibold hover:bg-[#e69c2f] transition"
                            >
                                Creat Account
                            </button>
                        </form>

                        <div className="flex items-center my-6">
                            <div className="flex-grow border-t border-[#FAA935]"></div>
                            <span className="mx-4 text-[#FAA935] font-medium">OR</span>
                            <div className="flex-grow border-t border-[#FAA935]"></div>
                        </div>

                        <div className="flex justify-center gap-6">
                            <button className="p-3 border border-[#FAA935] rounded-full hover:bg-gray-100 transition text-2xl">
                                <FcGoogle />
                            </button>
                            <button className="p-3 border border-[#FAA935] rounded-full hover:bg-gray-100 transition text-blue-600 text-2xl">
                                <FaFacebook />
                            </button>
                            <button className="p-3 border border-[#FAA935] rounded-full hover:bg-gray-100 transition text-black text-2xl">
                                <FaApple />
                            </button>
                        </div>

                        <div className='mx-auto text-center lg:mt-1 mt-5'>
                            <h1>ALready have an account? <Link to='/login' className='text-[#FAA935]'>Login</Link></h1>
                        </div>

                        <div className='lg:mt-20 mt-10'>
                            <img src={house1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-10 mt-5">
                <Footer />
            </div>
        </section>
    )
}

export default Register