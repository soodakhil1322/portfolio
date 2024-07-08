import React from 'react'

function Tittle({ tittle }) {
    return (<>
        <div className='flex gap-10 py-20 items-center'>
            <h1 className='text-3xl text-white font-semibold'>
                {tittle}
            </h1>
            <div className='w-60 h-[1px] bg-tertiary '></div>

        </div>


    </>
    )
}

export default Tittle
