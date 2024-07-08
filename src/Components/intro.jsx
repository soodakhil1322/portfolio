import React from 'react'

function Intro() {
    return (
        <div className=' bg-primary flex flex-col items-start justify-center gap-10  '>
            <h1 className='text-white'> Hi, i am</h1>
            <h1 className='text-secondary text-7xl sm:text-3xl font-semibold'>AKHIL SOOD</h1>
            <h1 className='text-white text-6xl sm:text-2xl font-semibold '>i build things for the web.</h1>
            <p className='text-white w-2/3 sm:w-full'> I'm a web developer with expertise in skills like HTML, TailWindCSS, JavaScript, frameworks like React, backend technologies like Node.js, databases.
                I enjoy creating responsive and user-friendly websites that improving user experience, increasing performance, I am passionate about staying up-to-date with the latest trends and technologies in web development</p>
            <button className=' border-2  border-tertiary text-tertiary px-10 py-3 rounded'  >Get Started</button>
        </div>
    )
}

export default Intro
