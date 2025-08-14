import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-white h-20'>
        <div className='grid grid-cols-12 items-center h-full'>
            <h1 className='col-start-1 col-span-1 text-center'>Kate Heleen Photography</h1>
            
                <h2 className='col-start-7'>About</h2>
                <h2 className='col-start-8'>Collections</h2>
                <h2 className='col-start-9'>Portfolio</h2>
                <h2 className='col-start-10'>Prices</h2>
                <h2 className='col-start-11'>Contact</h2>
                <Image src="/instagram.svg" alt='instagram icon' width={32} height={32}
                />
        </div>
    </div>
  )
}

export default NavBar