import React from 'react'

const Contact = () => {
    return (
        <>
            <h1 className='mt-8 text-9xl text-slate-200 text-center'>PRABOTT</h1>
            <div className='flex gap-14'>
                <div>
                    <h2 className='font-semibold'>Location:</h2>
                    <div className='text-sm text-gray-400 mt-2'>
                        <h3>Prabott Furniture Store 123</h3>
                        <h3>Harmony Street Suite 456</h3>
                        <h3>Jakarta, Indonesia 12345</h3>
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold'>Contact Us:</h2>
                    <div className='text-sm text-gray-400 mt-2'>
                        <h3>Phone: +62 21555 1234</h3>
                        <h3>Customer Service Hours Mon-Fri, 9AM-6PM</h3>
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold'>Email:</h2>
                    <div className='text-sm text-gray-400 mt-2'>
                        <p>For inquiries: info@prabbotfurniture.com</p>
                        <p>For support: support@prabbotfurniture.com</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-2xl'>Sign up for our newsletter</h1>
                    <div className='flex items-center mt-2'>
                        <div className='relative'>
                            <input type="email" placeholder='Enter email address' className='border-1 border-solid border-gray-400 rounded-lg p-2 pr-16' />
                            <button className='absolute right-0 top-0 h-full p-1 bg-black text-white rounded-r-lg cursor-pointer'>Enter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact