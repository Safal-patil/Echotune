import { useState } from 'react'

const featuredTracks = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Luna Eclipse",
    duration: "3:45",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
    genre: "Electronic"
  },
  {
    id: 2,
    title: "Ocean Waves",
    artist: "Coastal Vibes",
    duration: "4:12",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
    genre: "Ambient"
  },
  {
    id: 3,
    title: "City Lights",
    artist: "Urban Pulse",
    duration: "3:28",
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400",
    genre: "Hip-Hop"
  },
  {
    id: 4,
    title: "Golden Hour",
    artist: "Sunset Collective",
    duration: "5:03",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
    genre: "Indie"
  }
]

const playlists = [
  {
    id: 1,
    title: "Chill Vibes",
    trackCount: 24,
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Workout Beats",
    trackCount: 18,
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Focus Flow",
    trackCount: 32,
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
]

export default function FeaturedContent({ setCurrentTrack, setIsPlaying }) {
  const [activeTab, setActiveTab] = useState('tracks')

  const handlePlayTrack = (track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  return (
    <section id="music" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Music</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover handpicked tracks and curated playlists from our music experts
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/30 backdrop-blur-lg rounded-full p-1 border border-purple-500/20">
            <button
              onClick={() => setActiveTab('tracks')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'tracks'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Featured Tracks
            </button>
            <button
              onClick={() => setActiveTab('playlists')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'playlists'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Playlists
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'tracks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTracks.map((track) => (
              <div
                key={track.id}
                className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="relative mb-4">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-48 object-cover rounded-xl"
                    loading="lazy"
                  />
                  <button
                    onClick={() => handlePlayTrack(track)}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z" />
                      </svg>
                    </div>
                  </button>
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{track.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{track.artist}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 text-xs font-medium">{track.genre}</span>
                  <span className="text-gray-500 text-xs">{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'playlists' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative mb-4">
                  <img
                    src={playlist.image}
                    alt={playlist.title}
                    className="w-full h-64 object-cover rounded-xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-1">{playlist.title}</h3>
                    <p className="text-gray-300 text-sm">{playlist.trackCount} tracks</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                  Play Playlist
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}