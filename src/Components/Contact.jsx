import React from 'react'
import Tittle from './Tittle'


function Contact() {
    const user = {
        name: "AKHIL SOOD",
        age: "21",
        Gender: "Male",
        Email: "akhilsood9988@gmail.com",
        number: "83600-13465"
    }

    return (
        <div className='py-30 '>
            <Tittle tittle="Say hello" />


            <div className='flex'>
                <div className=' flex flex-col gap-2'>
                    <p className='text-tertiary '>
                        {"{"}
                    </p>
                    <div className='text-tertiary ml-1'>
                        {Object.keys(user).map((key) => (<p className=''>
                            <span className=''>{`" ${key}"`} :</span>
                            <span className=' '>{`"${user[key]}"`}</span>
                        </p>))}
                    </div>
                    <h1 className='text-tertiary'>
                        {"}"}
                    </h1>
                </div>
                <div className="px-40 item-center justify-center h-[250px] ">
                <lottie-player src="https://lottie.host/b1929ed8-d3f6-4d4f-88e4-1f62b4639cb5/4t4M19T4gB.json" background="transparent" speed="1"  loop  autoplay direction="1" mode="normal"></lottie-player>
                
                </div>
            </div>
            
        </div>
    )
}

export default Contact
