import React from 'react'

export default function Song({name}) {
  return (
    <div className='flex place-content-center p-1'>

        <div className='bg-slate-950 h-16 md:w-5/6 w-full  rounded-lg shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
          <div className=' flex flex-wrap justify-between p-5 ' >

            <div className='flex'>
              <span className=' '>🎧</span>
              <span className='text-white mx-5 font-semibold font-serif text-xl hidden sm:block'>{name}</span>
            </div>

            <div className=''>
              <div className='text-white font-semibold font-serif sm:hidden'>{name}</div>
            </div>

            <div className='  flex place-content-end '>
              <span>▶️</span><span className='mx-3'>⏸</span>
            </div>

          </div>
        </div>
    </div>

    
  )
}
