import { useState } from 'react'

const featuredTracks = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Luna Eclipse",
    duration: "3:45",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
    genre: "Electronic",
    plays: "2.4M"
  },
  {
    id: 2,
    title: "Ocean Waves",
    artist: "Coastal Vibes",
    duration: "4:12",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
    genre: "Ambient",
    plays: "1.8M"
  },
  {
    id: 3,
    title: "City Lights",
    artist: "Urban Pulse",
    duration: "3:28",
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400",
    genre: "Hip-Hop",
    plays: "3.2M"
  },
  {
    id: 4,
    title: "Golden Hour",
    artist: "Sunset Collective",
    duration: "5:03",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
    genre: "Indie",
    plays: "956K"
  }
]

const playlists = [
  {
    id: 1,
    title: "Chill Vibes",
    trackCount: 24,
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Perfect for relaxing evenings"
  },
  {
    id: 2,
    title: "Workout Beats",
    trackCount: 18,
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "High-energy tracks for your fitness routine"
  },
  {
    id: 3,
    title: "Focus Flow",
    trackCount: 32,
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Instrumental music for deep concentration"
  }
]

export default function FeaturedContent({ setCurrentTrack, setIsPlaying }) {
  const [activeTab, setActiveTab] = useState('tracks')

  const handlePlayTrack = (track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  return (
    <section id="music" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Featured <span className="animate-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Music</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover handpicked tracks and curated playlists from our music experts
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="glass rounded-2xl p-2 border border-purple-500/20">
            <button
              onClick={() => setActiveTab('tracks')}
              className={`px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === 'tracks'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Featured Tracks
            </button>
            <button
              onClick={() => setActiveTab('playlists')}
              className={`px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === 'playlists'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Playlists
            </button>
          </div>
        </div>

        {/* Enhanced Content */}
        {activeTab === 'tracks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTracks.map((track, index) => (
              <div
                key={track.id}
                className="glass rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <button
                    onClick={() => handlePlayTrack(track)}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform shadow-2xl">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z" />
                      </svg>
                    </div>
                  </button>
                  <div className="absolute top-3 right-3">
                    <span className="glass text-white px-2 py-1 rounded-full text-xs font-medium">
                      {track.plays}
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors">{track.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{track.artist}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 text-xs font-medium bg-purple-500/10 px-2 py-1 rounded-full">{track.genre}</span>
                  <span className="text-gray-500 text-xs">{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'playlists' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playlists.map((playlist, index) => (
              <div
                key={playlist.id}
                className="glass rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group cursor-pointer fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={playlist.image}
                    alt={playlist.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-xl mb-2">{playlist.title}</h3>
                    <p className="text-gray-300 text-sm mb-1">{playlist.trackCount} tracks</p>
                    <p className="text-gray-400 text-xs">{playlist.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-purple-500/60">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Play Playlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}