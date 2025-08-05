import React from 'react'
import { Form, Input, Button } from "@heroui/react";
export default function Contact() {
  //const placements = ["inside", "outside", "outside-left", "outside-top"];
  return (
    <div className="container py-12 w-full max-w-full flex flex-col items-center justify-center">
      <h1 className='font-extrabold text-[#2c3e50] text-2xl md:text-4xl uppercase'>Contact Section</h1>
        <div className="py-3 relative after:content-[''] after:absolute after:bottom-0 after:left-8 after:top-1/2 after:w-16 after:h-1 after:bg-[#2c3e50]
                  before:content-[''] before:absolute before:bottom-0 before:right-8 before:top-1/2 before:w-16 before:h-1 before:bg-[#2c3e50]">
          <i className="fa-solid fa-star text-[#2c3e50]"></i>
        </div>
      <form className="w-3/4  md:w-1/2 m-auto">
        <div className="flex flex-col gap-2 py-2.5">
          <div className="">
            <Input
              key="outside"
              label="userName"
              labelPlacement="outside"
              type="text"
              className='contact-input'
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2.5">
          <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              key="outside"
              label="userAge"
              labelPlacement="outside"
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2.5">
          <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              key="outside"
              label="userEmail"
              labelPlacement="outside"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2.5">
          <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              key="outside"
              label="userPassword"
              labelPlacement="outside"
              type="password"
            />
          </div>
        </div>



        <Button type="submit" variant="bordered" className='bg-[#1abc9c] text-white my-3'>
          Send Message
        </Button>

      </form>
    </div>
  )
}
