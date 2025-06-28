import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MusicPlayer from './components/MusicPlayer'
import FeaturedContent from './components/FeaturedContent'
import ArtistProfiles from './components/ArtistProfiles'
import Events from './components/Events'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="relative">
              <Hero />
              <FeaturedContent 
                setCurrentTrack={setCurrentTrack}
                setIsPlaying={setIsPlaying}
              />
              <ArtistProfiles />
              <Events />
              <Newsletter />
            </main>
          } />
        </Routes>
        <Footer />
        
        {/* Fixed Music Player */}
        <MusicPlayer 
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </BrowserRouter>
  )
}

export default App