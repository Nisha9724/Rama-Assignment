import React from 'react'

export const Footer = () => {
    return (
        <div className='divide-y divide-gray-300 absolute bottom-0 w-full'>
            <p className='p-4 bg-gray-100 text-gray-500'>India</p>
            <div className='p-4 bg-gray-100 flex justify-between'>
                <div className='text-gray-500'>
                    <span className='mr-5'>About</span>
                    <span className='mr-5'>Advertising</span>
                    <span className='mr-5'>Business</span>
                    <span className='mr-5'>How Search works</span>
                </div>
                <div className='text-gray-500'>
                    <span className='mr-5'>Privacy</span>
                    <span className='mr-5'>Terms</span>
                    <span className='mr-5'>Settings</span>
                </div>
            </div>
        </div>
    )
}
