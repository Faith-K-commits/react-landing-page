import React from 'react'

const CallToAction = () => {
    return (
        <div className='mt-4 flex gap-8 bg-slate-100 rounded-l-lg'>
            <div className='flex flex-col justify-center ml-8'>
                <h1 className='text-5xl font-semibold'>Craft Your Ideal Furniture Masterpieces Today</h1> <br />
                <p className='text-gray-500'>Whether it's a sleek wooden chair, a plush sofa, or a functional table with drawers, our platform offers endless possibilities. Start crafting your dream furniture now and bring your vision to life!</p>
                <button className='text-white bg-black rounded-lg p-2 mt-4 cursor-pointer w-40'>Pre-Order Now</button>
            </div>
            <div>
                <img src="./images/sofa.jpg" alt="A sofa" className='rounded-lg' />
            </div>
        </div>
    )
}

export default CallToAction