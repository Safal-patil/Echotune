import React from 'react'
import { sampleSongs } from './sampleSongs'
import Song from './Song'
import latest from './images/latest.jpg'




export default function Latest() {
    return (
        <div>
            <div className='flex place-content-center flex-col-reverse md:flex-row justify-evenly '>
                <div>
                    <div className='text-white p-2 font-extrabold font-sans'>Know your intrest.</div>
                    <div className='text-white text-[50px] p-2 font-black font-sans'>Latest Music place For you!!!</div>
                    <div className='text-white p-1 '>Discover the freshest beats and melodies making waves in the music scene! From pulsating pop anthems to <br />soul-stirring ballads, our latest songs collection has something for every music lover.</div>
                    <div className='p-3'>
                        <button className='text-white p-3  bg-blue-500 rounded-full mt-5'><span className='mx-5 font-sans font-extrabold'>Play It</span></button>
                       
                       
                    </div>

                    {
                        sampleSongs.map((item) => (
                            <Song name={item.name} />
                        ))
                    }

                </div>
                <div className='grid place-content-center sm:block'>
                    <img src={latest} alt="" className='h-96 rounded-3xl  ' />
                </div>
            </div>

            <div className='mt-20 md:hidden'>
                
                </div>
        </div>
    )
}
