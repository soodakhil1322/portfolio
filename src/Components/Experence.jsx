import React, { useState } from 'react'
import Tittle from './Tittle'
import {experience} from './experience'

function Experence() {
    const [selectedindex, setselectedindex] = useState(0);
    return (
        <div className='py-70'>
            <Tittle tittle="Experence" />
            <div className='flex py-2 sm:flex-col'>
                <div className='flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-scroll sm:w-full'>
                    {experience.map((experienc, index) => (
                        <div onClick={() => {
                            setselectedindex(index)
                        }} className='cursor-pointer'>
                            <h1 className={`text-xl ${selectedindex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3" : "text-white"} p-5`} >

                                {experienc.period}

                            </h1>
                        </div>
                    ))}
                </div>
                <div className=' item-center px-20 gap-10'>
                    <h1 className='text-secondary text-3xl '>{experience[selectedindex].role}</h1>
                    <p className='text-white sm:text-3xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     At autem id iusto accusamus architecto. Ad commodi quibusdam reiciendis autem architecto iste dicta veniam.
                      Doloremque nostrum distinctio debitis ipsa accusamus id.</p>
                      <p className='text-white py-4 sm:text-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum labore et vitae. Beatae mollitia praesentium voluptatum iste? Beatae eos voluptate, dolores, quisquam tenetur quibusdam, eveniet sequi nisi non aliquid veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium provident magni consequuntur rerum blanditiis, laudantium quisquam sunt ut tenetur atque autem cum. Vitae doloribus repellendus rem! Similique, ex. Rerum, quo!</p>
                </div>
            </div>
        </div>


    );
}

export default Experence

