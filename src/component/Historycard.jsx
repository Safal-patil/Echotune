import React from 'react'

export default function Historycard({ img }) {
    return (
        <div className='p-2'>
            <div className='bg-slate-700 rounded-xl'>
                <div>
                    <img className='h-auto w-40 p-2 rounded-2xl' src={img} alt="" />
                </div>
                <div className='text-center font-bold p-2'>
                    Play  list
                </div>
            </div>

           
        </div>
    )
}
