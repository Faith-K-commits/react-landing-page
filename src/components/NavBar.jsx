import React from 'react'
import { SearchOutline, HeartOutline, CartOutline, PersonOutline } from 'react-ionicons'

const NavBar = () => {
    return (
        <div>
            <div className='flex justify-between items-center cursor-pointer'>
                <h1 className='font-bold text-2xl'>Prabbott.</h1>
                <ul className='flex gap-4 text-gray-700'>
                    <li>Furniture</li>
                    <li>Outdoor</li>
                    <li>Lighting</li>
                    <li>Dinning</li>
                    <li>Bathroom</li>
                    <li>Mirrors & Decors</li>
                </ul>
                <ul className='flex gap-4 text-gray-700'>
                    <li> <SearchOutline /></li>
                    <li><HeartOutline /></li>
                    <li><CartOutline /></li>
                    <li><PersonOutline /></li>
                </ul>
            </div>
            <hr className='mt-2 text-gray-700 font-extrabold' />
        </div>
    )
}

export default NavBar