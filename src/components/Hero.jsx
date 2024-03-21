import React from 'react'
import heroimage from '../assets/profilepic7.png'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>

        <div className='col-span-1 my-auto mx-auto'>
            <div className='w-[300px] h-auto lg:w-[400px]'>
                <img src={heroimage} alt="hero image" />
            </div>
        </div>

        <div className='col-span-2 px-5'>
            <h1 className='text-white text-4xl sm:text5xl lg:text-8xl font-bold'>
                <span className='primary-color'>
                    Hello,
                </span> <br />
                <TypeAnimation
                    sequence={[
                        "I'm Armin",
                        1000,
                        "I'm a Software Engineer",
                        1000,
                        "FullStack Developer",
                        1000,
                        "Web Designer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My Name is Adeifeoluwa and i am a fullstack developer with vast experience in software development.
            </p>

            <div className='my-8'>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-400 to-pink-500 text-white'>
                    Download Resume
                </a>
                <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-400 to-pink-500 text-white hover:border-none'>
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero