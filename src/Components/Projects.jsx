
import React,  { useState } from 'react'
import { projects } from './projectobj'
import Tittle from './Tittle';

function Projects() {
    const [selectedindex, setselectedindex] = useState(0);
  return (
    <div className='py-20'>
    <Tittle tittle="Project" />
      <div className='flex  item-center py-2 sm:flex-col'>
      
                <div className='flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-scroll sm:w-full'>
                    {projects.map((project, index) => (
                        <div onClick={() => {
                            setselectedindex(index)
                        }} className='cursor-pointer'>
                            <h1 className={`text-xl ${selectedindex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3" : "text-white"} p-5`} >

                                {project.name}

                            </h1>
                        </div>
                    ))}
                </div>
                <div className='flex item-center justify-center px-10 py-3'>
                    <h1  >{projects[selectedindex].img}</h1>
                    
                </div>
                <div className=' item-center px-15 py-5 gap-10'>
                    <h1 className='text-secondary text-3xl '>{projects[selectedindex].name}</h1>
                    <p className='text-white '>.{projects[selectedindex].description} </p>
                     
                </div>
                
            </div>
            
    </div>
  )
}

export default Projects
