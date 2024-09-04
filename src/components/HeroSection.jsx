import React from 'react'
import { ArrowDownCircleOutline } from 'react-ionicons'

const HeroSection = () => {
    return (
        <div className='mt-4 flex justify-center relative'>
            <div className='absolute mr-96 mt-6'>
                <h1 className='font-bold text-6xl mb-4'>Discover Comfort,Style,and <br /> Quality Craftsmanship </h1>
                <p>Our furniture embodies perfect blend of functionality and aesthetic appeal, ensuring every piece <br /> enhances your home with enduring elegance and superior durability.</p>
                <button className='p-2 bg-black text-white rounded-lg cursor-pointer mt-4'>Join Membership</button>
            </div>
            {/* TODO: Add onclick to arrow down*/}
            <span className='absolute mt-72 h-96 flex items-center justify-center cursor-pointer'><ArrowDownCircleOutline
                color={'#ffffff'}
                height="100px"
                width="100px"
            /></span>
            <img src="./images/furniture.jpg" alt="Furniture set" className='rounded-lg w-full' />
        </div>
    )
}

export default HeroSection