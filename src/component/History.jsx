import React from 'react'

import Song from './Song'

import { sampleSongs } from './sampleSongs';
import Historycard from './Historycard';

export default function History() {
  return (
    <div className='text-white'>
      <div className='flex flex-wrap place-content-center justify-evenly '>
        {
          sampleSongs.map((item)=>(
            <Historycard img={item.img}/>
          ))
        }
        
       </div>

       <div>
       {
        sampleSongs.map((item)=>(
          <Song name={item.name}  />
          
        ))
      }
       </div>

       <div className='mt-20 md:hidden'>
                
            </div>
    </div>
  )
}
