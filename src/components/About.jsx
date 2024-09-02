import React from 'react'

const About = () => {
    return (
        // FIXME: Fix h1 and quote
        <div>
            <div className='flex mt-8 gap-16'>
                <h1 className='text-gray-500 w-fit'>About Us</h1>
                <p className='text-3xl'>"We believe quality furniture is key to a beautiful, functional home. <br /> With a passion for design and craftsmanship, we blend modern aesthetics with timeless elegance."</p>
            </div>
            <hr className='mt-2 text-gray-900 font-extrabold' />
        </div>
    )
}

export default About