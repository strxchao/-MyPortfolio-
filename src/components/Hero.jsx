import React from 'react'
import profilepic from '../assets/profilepic5.png'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
    return (
      <div>
        <div className='my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex col-reverse sm:flex-row
                        justify-center align-center' id='home'>
  
        <div className='flex-col my-auto mx-auto'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'></p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> 
          <TypeAnimation
            sequence = {[
              "Frontend Dev",
              1000,
              "UI UX Designer",
              1000,
              "Game Dev",
              1000,
              "Augmented Reality Dev",
              1000,
            ]}
            wrapper = "span"
            speed = {50}
            repeat = {Infinity}
          />
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md-text-5xl sm:text-4xl text-xl font-bold text-gray-500'>Undergraduate Multimedia Engineering Technology Student</p>
          </div>
          <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
            <a href="https://www.linkedin.com/in/habibyusuf190" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
            </a>
            <a href="https://github.com/strxchao" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/habibyusuf_" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
            </a>
          </div>
          <div class="relative inline-flex group my-3">
            <div class="absolute transition-all duration-100 opacity-70 -inset-px bg-gradient-to-r 
              from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 
              group-hover:-inset-1 group-hover:duration-200">
            </div>
            <a href='/' title='Download CV' role='button'
              class='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
              font-bold text-white transition-all duration-200 bg-primary-color rounded-xl
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>Download CV</a>
          </div>
        </div>
  
        <div className='my-auto'>
          <img className='w-[300px] sm:w-[500px] mx-auto h-auto' src={profilepic} alt="profile pic"></img>
        </div>
  
        </div>
      </div>
    )
  }
  
  export default Hero