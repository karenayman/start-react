import { useState } from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
const images= [img1, img2, img3,img1,img2,img3]

export default function Portfolio() {
const [isOpen, setisOpen] = useState(null)

function handleModal(imgNumber){
  setisOpen(imgNumber)
}
  return (
    <>
     <div className="container pt-12 w-full max-w-full flex flex-col items-center justify-center">
      <h1 className='font-extrabold text-[#2c3e50] text-2xl md:text-4xl uppercase'>Portfolio Section</h1>
        <div className="py-3 relative after:content-[''] after:absolute after:bottom-0 after:left-8 after:top-1/2 after:w-16 after:h-1 after:bg-[#2c3e50]
                  before:content-[''] before:absolute before:bottom-0 before:right-8 before:top-1/2 before:w-16 before:h-1 before:bg-[#2c3e50]">
          <i className="fa-solid fa-star text-[#2c3e50]"></i>
        </div>
      </div>
    <div className='flex flex-wrap w-11/12 m-auto py-10 justify-center'>
        {images.map((img, index) => {
          return (
              <img key={index} className='w-4/5 md:w-1/3 p-2' src={img} onClick={() => handleModal(index)} />
          )
        })}
    </div>
    {/* {isOpen && <Modal />} */}
    {isOpen !== null ? <Modal closeModel={handleModal} currentImg={images[isOpen]} /> : null}
    </>
  )
}
 function Modal({currentImg,closeModel}){
  return(
    <div className='modal' onClick={() => closeModel(null)}>
      <span className='close'>x</span>
      <img src={currentImg} alt="" className='w-[80%] md:w-[30%]' />
    </div>
  )
 }


