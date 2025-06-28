import { useState, useEffect } from 'react'

export default function MusicPlayer({ currentTrack, isPlaying, setIsPlaying }) {
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(70)
  const [showPlayer, setShowPlayer] = useState(false)

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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Track Info */}
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            <img
              src={currentTrack.image}
              alt={currentTrack.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-white font-medium text-sm truncate">{currentTrack.title}</h4>
              <p className="text-gray-400 text-xs truncate">{currentTrack.artist}</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                </svg>
              </button>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all"
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
              
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center space-x-2 w-full">
              <span className="text-xs text-gray-400 w-10">{getCurrentTime()}</span>
              <div className="flex-1 bg-gray-700 rounded-full h-1">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 w-10">{currentTrack.duration}</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2 flex-1 justify-end">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.828 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.828l3.555-3.793A1 1 0 019.383 3.076zM12 6.5a1 1 0 011.414 0A5.98 5.98 0 0116 10a5.98 5.98 0 01-2.586 3.5 1 1 0 01-1.414-1.414A3.98 3.98 0 0014 10a3.98 3.98 0 00-2-3.086A1 1 0 0112 6.5z" clipRule="evenodd" />
            </svg>
            <div className="w-20 bg-gray-700 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full"
                style={{ width: `${volume}%` }}
              />
            </div>
            
            <button
              onClick={() => setShowPlayer(false)}
              className="text-gray-400 hover:text-white transition-colors ml-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}