import React from 'react'

const Experience = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-bold text-4xl'>10+</h1>
                    <p>With a decade of expertise, Prabot crafts high-quality, bespoke furniture that blends style amd functionality.</p>
                </div>
                <div>
                    <h1 className='font-bold text-4xl'>800+</h1>
                    <p>Our commitement to customer satisfaction ensures we deliver outstanding service and products that exceed expectations.</p>
                </div>
                <div>
                    <h1 className='font-bold text-4xl'>1200+</h1>
                    <p>Prabot has crafted over 1200 unique furniture pieces, from elegant sofas to functional cabinets, with precision and care.</p>
                </div>
            </div>
            <div className='flex justify-center h-96'>
                <img src="./images/experience.jpg" alt="sofa set" className='w-full mt-8 rounded-lg object-cover' />
            </div>
        </div>
    )
}

export default Experience