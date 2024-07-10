import React from 'react'
import Tittle from '../Components/Tittle'

function About() {
  const skills = [
    "javascript",
    "React",
    "Node.js",
    "Tailwind Css",
    "Express.js",
    "MongoDb"
  ];
  return (
    <div className='py-20'>
      <Tittle tittle="About" />

      <div className=' flex items-center py-2 gap-20 sm:flex-col'>
        <img src={require('./home/portfolioimg.jpeg')} className='h-[50vh] py-5' />
        <div className='flex flex-col gap-5 sm:text-3xl'>  <p className='text-white '>
          Heyy, my name is Akhil sood ,I enjoy creating things that live on internet my interest in web devlopment Started back in 2021 when i decided to editing custome Tumber Themes it tought me lot about html and css
        </p>
          <p className='text-white '>Fast forward to today
            i want to  work in a startup company ,or in a huge corporation my main focus in these days is to building accessable inclusive products for a variety of clients
          </p>

        </div>

      </div>
      <div className=' py-10'>
        <h1 className=' text-tertiary text-xl'>Here are few technologies I've been working with recently:</h1>

        <div className='flex flex-wrap gap-10 mt-5  '>
          {skills.map((skill, index) => (
            <div className='border border-tertiary py-3 px-5' >
              <h1 className=' text-tertiary'>{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
