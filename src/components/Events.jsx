const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    artist: "Various Artists",
    date: "2024-07-15",
    time: "18:00",
    location: "Central Park, NYC",
    price: "$45",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Live"
  },
  {
    id: 2,
    title: "Luna Eclipse Live Stream",
    artist: "Luna Eclipse",
    date: "2024-06-20",
    time: "20:00",
    location: "Online",
    price: "Free",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Virtual"
  },
  {
    id: 3,
    title: "Acoustic Sessions",
    artist: "Sunset Collective",
    date: "2024-06-25",
    time: "19:30",
    location: "Blue Note, NYC",
    price: "$25",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600",
    type: "Live"
  }
]

export default function Events() {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Upcoming <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't miss out on live performances and exclusive streaming events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-black/20 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.type === 'Live' 
                      ? 'bg-red-500/80 text-white' 
                      : 'bg-purple-500/80 text-white'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{event.title}</h3>
                    <p className="text-purple-400 text-sm font-medium">{event.artist}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-300 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(event.date)} at {event.time}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                  {event.price === 'Free' ? 'Join Event' : 'Get Tickets'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-black/30 backdrop-blur-lg border border-purple-500/20 text-white px-8 py-4 rounded-full font-medium hover:border-purple-500/40 transition-all">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}