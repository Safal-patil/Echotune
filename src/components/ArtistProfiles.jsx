const artists = [
  {
    id: 1,
    name: "Luna Eclipse",
    genre: "Electronic",
    followers: "2.4M",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
    verified: true
  },
  {
    id: 2,
    name: "Coastal Vibes",
    genre: "Ambient",
    followers: "1.8M",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
    verified: true
  },
  {
    id: 3,
    name: "Urban Pulse",
    genre: "Hip-Hop",
    followers: "3.2M",
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400",
    verified: true
  },
  {
    id: 4,
    name: "Sunset Collective",
    genre: "Indie",
    followers: "956K",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
    verified: false
  }
]

export default function ArtistProfiles() {
  return (
    <section id="artists" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Artists</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with talented artists from around the world
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group text-center"
            >
              <div className="relative mb-6">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-purple-500/20 group-hover:border-purple-500/40 transition-all"
                  loading="lazy"
                />
                {artist.verified && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              <h3 className="text-white font-bold text-xl mb-2">{artist.name}</h3>
              <p className="text-purple-400 text-sm font-medium mb-2">{artist.genre}</p>
              <p className="text-gray-400 text-sm mb-6">{artist.followers} followers</p>

              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                  Follow
                </button>
                <button className="w-full border border-purple-500/30 text-purple-400 py-2 rounded-lg font-medium hover:bg-purple-500/10 transition-all">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-black/30 backdrop-blur-lg border border-purple-500/20 text-white px-8 py-4 rounded-full font-medium hover:border-purple-500/40 transition-all">
            Discover More Artists
          </button>
        </div>
      </div>
    </section>
  )
}