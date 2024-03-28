import React from 'react'
import music from "../assets/music.png"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Song from './Song'
import { sampleSongs } from './sampleSongs'
export default function Songs() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )
  return (

    <div className='p-2  '>
      {/* <div className='flex place-content-center flex-wrap flex-col'>

        <div
          className="w-[90%] h-auto flex flex-wrap  justify-around">
          <div
            className="w-96 flex flex-col items-center mb-12  rounded-xl p-2">
            <a href="https://drclinic.netlify.app/"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl" /></a>
            <p
              className="text-white mt-2 font-bold text-xl">Genetics</p>
           
          </div>
         

        </div>

        <div
          className="w-[90%] h-auto flex flex-wrap  justify-around">
          <div
            className="w-96 flex flex-col items-center mb-12  rounded-xl p-2">
            <a href="https://drclinic.netlify.app/"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl" /></a>
            <p
              className="text-white mt-2 font-bold text-xl">Genetics</p>
           
          </div>
         

        </div>

      </div> */}

      {/* for Mobile  */}
      <div className='md:w-96 md:hidden block'>
        <div ref={sliderRef} className="keen-slider ">

          <div className="keen-slider__slide grid place-content-center p-3">
            <a href="#"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl shadow-2xl shadow-blue-400/20" /></a>
            <p
              className="text-white mt-2 font-bold text-xl text-center">Play List
            </p>
          </div>

          <div className="keen-slider__slide grid place-content-center p-3">
            <a href="/"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl shadow-2xl shadow-blue-400/20" /></a>
            <p
              className="text-white mt-2 font-bold text-xl  text-center">Play List
            </p>
          </div>

          <div className="keen-slider__slide grid place-content-center p-3">
            <a href="/"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl shadow-2xl shadow-blue-400/20" /></a>
            <p
              className="text-white mt-2 font-bold text-xl text-center">Play List
            </p>
          </div>

          <div className="keen-slider__slide grid place-content-center p-3">
            <a href="/"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl shadow-2xl shadow-blue-400/20" /></a>
            <p
              className="text-white mt-2 font-bold text-xl text-center">Play List
            </p>
          </div>

        </div>
      </div>
      {/* for Mobile  */}

      {/* for Desktop */}
      <div className='flex place-content-center flex-wrap justify-evenly '>
        <div className='md:w-96 hidden md:block'>
          <div ref={sliderRef} className="keen-slider ">

            <div className="keen-slider__slide grid place-content-center p-3">
              <a href="#"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl " /></a>
              <p
                className="text-white mt-2 font-bold text-xl text-center">Play List
              </p>
            </div>

            <div className="keen-slider__slide grid place-content-center p-3">
              <a href="/"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl" /></a>
              <p
                className="text-white mt-2 font-bold text-xl  text-center">Play List
              </p>
            </div>

            <div className="keen-slider__slide grid place-content-center p-3">
              <a href="/"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl" /></a>
              <p
                className="text-white mt-2 font-bold text-xl text-center">Play List
              </p>
            </div>

            <div className="keen-slider__slide grid place-content-center p-3">
              <a href="/"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl" /></a>
              <p
                className="text-white mt-2 font-bold text-xl text-center">Play List
              </p>
            </div>

          </div>
        </div>

        <div className='md:w-96 hidden md:block'>
          <div ref={sliderRef} className="keen-slider ">
            <div className="keen-slider__slide grid place-content-center p-3">
              <a href="/"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl" /></a>
              <p
                className="text-white mt-2 font-bold text-xl text-center">Play List
              </p>
            </div>
            <div className="keen-slider__slide grid place-content-center p-3">
              <a href="/"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl" /></a>
              <p
                className="text-white mt-2 font-bold text-xl  text-center">Play List
              </p>
            </div>
            <div className="keen-slider__slide grid place-content-center p-3">
              <a href="/"> <img src="https://c4.wallpaperflare.com/wallpaper/672/861/137/xperia-and-akg-wallpaper-preview.jpg" className="rounded-xl" /></a>
              <p
                className="text-white mt-2 font-bold text-xl text-center">Play List
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* for Desktop */}

      {
        sampleSongs.map((item,i)=>(
          <Song key={i} name={item.name}  />

          
        ))
      }

    


      {/* <div className='flex place-content-center p-1'>
        <div className='bg-slate-950 h-16 w-5/6 rounded-lg  my-3'>
          <div className=' flex flex-wrap justify-between p-5' >

            <div className=''>
              <span className=''>🎧</span>
            </div>

            <div className=''>
              <div className='text-white font-semibold font-serif animate-none'>LONG TIME NO SEE </div>

            </div>

            <div className='  flex place-content-end '>
              <span>▶️</span><span className='mx-3'>⏸</span>
            </div>

          </div>
        </div>
      </div> */}

      {/* <div className='flex place-content-center  p-1'>
        <div className='bg-slate-950 h-16 w-5/6 rounded-full  '>
          <div className='flex justify-center p-2'>
            <div className='bg-slate-950 h-12 w-5/6 rounded-full '>
              <div className='flex justify-between items-center text-white'>
                <div>asd</div>
                <div>ads</div>
                <div>das</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='flex place-content-center my-8 '>
        <div className='bg-slate-500 h-16 w-5/6 rounded-full shadow-2xl shadow-blue-500/20 animate-pulse'>

        </div>
      </div>

      <div className='flex place-content-center my-8 '>
        <div className='bg-slate-500 h-16 w-5/6 rounded-full shadow-2xl shadow-blue-500/20 '>

        </div>
      </div> */}


            <div className='mt-20 md:hidden'>
                
            </div>  
    </div>
  )
}
