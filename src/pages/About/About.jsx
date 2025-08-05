import React from 'react'

export default function About() {
  return (
    <>
      <div className="container py-40 w-full max-w-full flex flex-col items-center justify-center bg-[#1abc9c]">
        <h1 className='font-extrabold text-white text-2xl md:text-4xl uppercase'>about component</h1>
        <div className="py-3 relative after:content-[''] after:absolute after:bottom-0 after:left-8 after:top-1/2 after:w-16 after:h-1 after:bg-white
                  before:content-[''] before:absolute before:bottom-0 before:right-8 before:top-1/2 before:w-16 before:h-1 before:bg-white">
          <i className="fa-solid fa-star text-white"></i>
        </div>
        <div className="row flex flex-row flex-wrap w-3/4">
          <p className='md:w-1/2 p-2 sm:w-full text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className='md:w-1/2 p-2 sm:w-full  text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>

    </>
  )
}
