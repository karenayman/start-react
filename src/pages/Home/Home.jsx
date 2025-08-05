import React from 'react'
import img1 from '../../../src/assets/avataaars.svg'

export default function Home() {
  return (
    <>
      <div className="container py-5 w-full max-w-full flex flex-col items-center justify-center bg-[#1abc9c]">
        <img src={img1} className='text-center sm:w-1/2 md:w-1/4' alt="avatar" />
        <h1 className='font-extrabold text-white text-2xl md:text-4xl uppercase'>start Framework</h1>
        <div className="py-3 relative after:content-[''] after:absolute after:bottom-0 after:left-8 after:top-1/2 after:w-16 after:h-1 after:bg-white
            before:content-[''] before:absolute before:bottom-0 before:right-8 before:top-1/2 before:w-16 before:h-1 before:bg-white">
          <i className="fa-solid fa-star text-white"></i>
        </div>
        <p className='text-white font-light capitalize'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  )
}
