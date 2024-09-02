import React from 'react'
import { ArrowDownCircleOutline } from 'react-ionicons'

const HeroSection = () => {
    return (
        <div className='mt-4 flex justify-center relative'>
            <div className='absolute ml-32 mt-6 mr-96'>
                <h1 className='font-bold text-6xl mb-4'>Discover Comfort,Style,and <br /> Quality Craftsmanship </h1>
                <p>Our furniture embodies perfect blend of functionality and aesthetic appeal, ensuring every piece <br /> enhances your home with enduring elegance and superior durability.</p>
                <button className='p-2 bg-black text-white rounded-lg cursor-pointer mt-4'>Join Membership</button>
            </div>
            <span className='absolute mt-96 h-96 flex items-center'><ArrowDownCircleOutline /></span>
            {/* FIXME:Reduce image size */}
            <img src="./images/furniture.jpg" alt="Furniture set" className='rounded-lg' />
        </div>
    )
}

export default HeroSection