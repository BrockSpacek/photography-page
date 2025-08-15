import React from 'react'
import pageInfo from '@/data/pageInfo.json'
import Image from 'next/image'
import AboutImage from '@/Assets/MainImage.png'

const AboutSection = () => {
  return (
    <div>
        <div className='grid grid-cols-2'>
            <div className='grid-start-1 grid-span-1'>
                <h2>Behind The Lens</h2>
                <p>{pageInfo.about.description.partOne}</p>
                <p>{pageInfo.about.description.partTwo}</p>
                <p>{pageInfo.about.description.partThree}</p>
                <p>{pageInfo.about.description.partFour}</p>
            </div>
            <div className='grid-start-2 grid-span-1'>
                <Image src={AboutImage} alt='Grad Photo' height={100} width={100}/>
            </div>
        </div>
    </div>
  )
}

export default AboutSection