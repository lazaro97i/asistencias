import React, { useState } from 'react'

const Nav = () => {

  const [nav, setNav] = useState(false)

  const toggleNav = (e) => {
    setNav(!nav)
  }
  const NavContent = () => {
    return (
      <div className='fixed top-0 left-0 w-full max-w-[425px] bg-black h-screen'>
        <ul className='w-full flex flex-col mt-20 gap-8 ml-8'>
          <li>Registrar inasistencia</li>
          <li>Registro mensual</li>
          <li>Registro semanal</li>
        </ul>
        <span onClick={toggleNav} className='absolute top-5 right-5 cursor-pointer'>
          <svg fill="#f0f1ef" width={'45px'} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cancel2</title> <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path> </g></svg>
        </span>
      </div>
    )
  }

  return (
    <div className='relative w-full flex justify-center'>
      <div className='absolute flex top-5 justify-between w-full px-5 max-w-[1200px]'>
        <span onClick={toggleNav} className=' cursor-pointer'>
          <svg className=' pointer-events-none' viewBox="0 0 24 24" fill="none" width={'45px'} xmlns="http://www.w3.org/2000/svg"><g className=' pointer-events-none' id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g className=' pointer-events-none' id="SVGRepo_iconCarrier"> <path className=' pointer-events-none' d="M4 6H20M4 12H20M4 18H20" stroke="#f0f1ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </span>
        <input type="button" value="Cerrar sesión" className='rounded-md px-3 py-2 bg-[#a30d26] cursor-pointer' />
      </div>
      <div>
        {
          nav ?
            <NavContent />
            :
            null
        }
      </div>
    </div >
  )
}

export default Nav