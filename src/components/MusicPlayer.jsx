import { useState, useEffect } from 'react'

export default function MusicPlayer({ currentTrack, isPlaying, setIsPlaying }) {
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(70)
  const [showPlayer, setShowPlayer] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (currentTrack) {
      setShowPlayer(true)
    }
  }, [currentTrack])

  useEffect(() => {
    let interval
    if (isPlaying && currentTrack) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 0
          }
          return prev + 0.5
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentTrack, setIsPlaying])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getCurrentTime = () => {
    if (!currentTrack) return '0:00'
    const duration = parseInt(currentTrack.duration.split(':')[0]) * 60 + parseInt(currentTrack.duration.split(':')[1])
    return formatTime((progress / 100) * duration)
  }

  if (!showPlayer || !currentTrack) return null

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 glass border-t border-purple-500/30 transition-all duration-500 ${
      isExpanded ? 'h-96' : 'h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Main Player Bar */}
        <div className="flex items-center justify-between">
          {/* Track Info */}
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            <div className="relative">
              <img
                src={currentTrack.image}
                alt={currentTrack.title}
                className="w-12 h-12 rounded-lg object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-white font-medium text-sm truncate hover:text-purple-300 transition-colors cursor-pointer">
                {currentTrack.title}
              </h4>
              <p className="text-gray-400 text-xs truncate hover:text-gray-300 transition-colors cursor-pointer">
                {currentTrack.artist}
              </p>
            </div>
            <button className="text-gray-400 hover:text-red-400 transition-colors p-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors p-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                </svg>
              </button>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                {isPlaying ? (
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              
              <button className="text-gray-400 hover:text-white transition-colors p-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                </svg>
              </button>
            </div>

            {/* Enhanced Progress Bar */}
            <div className="flex items-center space-x-3 w-full">
              <span className="text-xs text-gray-400 w-10 text-right">{getCurrentTime()}</span>
              <div className="flex-1 bg-gray-700/50 rounded-full h-2 cursor-pointer group">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300 relative group-hover:h-3"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
                </div>
              </div>
              <span className="text-xs text-gray-400 w-10">{currentTrack.duration}</span>
            </div>
          </div>

          {/* Enhanced Volume & Controls */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <button className="text-gray-400 hover:text-white transition-colors p-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a1 1 0 00-2 0v12a1 1 0 102 0V4zM10 4a1 1 0 00-2 0v12a1 1 0 102 0V4zM15 4a1 1 0 00-2 0v12a1 1 0 102 0V4z" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.828 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.828l3.555-3.793A1 1 0 019.383 3.076zM12 6.5a1 1 0 011.414 0A5.98 5.98 0 0116 10a5.98 5.98 0 01-2.586 3.5 1 1 0 01-1.414-1.414A3.98 3.98 0 0014 10a3.98 3.98 0 00-2-3.086A1 1 0 0112 6.5z" clipRule="evenodd" />
              </svg>
              <div className="w-20 bg-gray-700/50 rounded-full h-1 cursor-pointer group">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full transition-all group-hover:h-2"
                  style={{ width: `${volume}%` }}
                />
              </div>
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            
            <button
              onClick={() => setShowPlayer(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Expanded Player Content */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-6">
                <img
                  src={currentTrack.image}
                  alt={currentTrack.title}
                  className="w-24 h-24 rounded-xl object-cover shadow-xl"
                />
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{currentTrack.title}</h3>
                  <p className="text-gray-400 mb-2">{currentTrack.artist}</p>
                  <span className="text-purple-400 text-sm bg-purple-500/10 px-2 py-1 rounded-full">
                    {currentTrack.genre}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-end space-x-4">
                <button className="glass border border-purple-500/20 text-white px-4 py-2 rounded-lg hover:border-purple-500/40 transition-all">
                  Add to Playlist
                </button>
                <button className="glass border border-purple-500/20 text-white px-4 py-2 rounded-lg hover:border-purple-500/40 transition-all">
                  Share
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}