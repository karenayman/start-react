import React from 'react'

export default function Footer() {
  return (
    <>
      <footer>
        {/* top footer */}
        <div className="max-w-full bg-[#2c3e50]">
          <div className="row w-4/5 flex flex-col md:flex-row text-center m-auto py-10">
            <div className="w-full md:w-1/3 py-4 md:py-0 text-white">
              <div className='font-medium text-2xl text-white text-center '>LOCATION</div>
              <p className='font-light text-white text-center text-xs '>2215 John Daniel Drive</p>
              <p className='font-light text-white text-center text-xs'>Clark, MO 65243</p>
            </div>
            <div className="w-full md:w-1/3 py-4 md:py-0 text-white">
              <div className='font-medium text-2xl text-white text-center '>AROUND THE WEB</div>
              <ul className='flex flex-row flex-nowrap justify-center'>
                <li className='mx-1 p-3 rounded-[50%] border-solid border border-white w-2.5 h-2.5 text-sm flex flex-row justify-center items-center'>
                  <i className="fa-brands fa-facebook"></i>
                </li>
                <li className='mx-1 p-3 rounded-[50%] border-solid border border-white w-2.5 h-2.5 text-sm flex flex-row justify-center items-center'>
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li className='mx-1 p-3 rounded-[50%] border-solid border border-white w-2.5 h-2.5 text-sm flex flex-row justify-center items-center'>

                  <i className="fa-brands fa-linkedin-in"></i>
                </li>
                <li className='mx-1 p-3 rounded-[50%] border-solid border border-white w-2.5 h-2.5 text-sm flex flex-row justify-center items-center'>

                  <i className="fa-solid fa-earth-africa"></i>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 py-4 md:py-0  text-white">
              <div className='font-medium text-2xl text-white text-center '>ABOUT FREELANCER</div>
              <p className='font-light text-white text-center text-xs'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
        {/* bottom footer */}
        <div className="container max-w-full bg-[#1a252f] py-6">
          <p className='text-white text-center'>Copyright © Your Website 2025</p>
        </div>
      </footer>
    </>
  )
}
