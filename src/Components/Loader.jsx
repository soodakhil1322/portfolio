import React from 'react'

function Loader() {
    return (
        <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
            <div className='flex font-semibold text-4xl  gap-5 sm:3xl'>
                <h1 className="text-secondary a">A</h1>
                <h1 className='text-white k'>K</h1>
                
                <h1 className='text-tertiary i'>I</h1>
            </div>
        </div>
    )
}

export default Loader
