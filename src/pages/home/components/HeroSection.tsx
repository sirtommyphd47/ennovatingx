
export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20laboratory%20with%20superconductivity%20experiments%2C%20magnetic%20levitation%20devices%2C%20holographic%20displays%2C%20blue%20and%20green%20lighting%2C%20high-tech%20research%20facility%20with%20electromagnetic%20fields%2C%20clean%20minimalist%20design%2C%20advanced%20technology%20atmosphere%2C%20professional%20scientific%20environment&width=1920&height=1080&seq=hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="w-full flex items-center justify-center min-h-screen py-20">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Revolutionary 
              <span className="text-blue-400 block mt-2">Superconductivity Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Leading the future with magnetic levitation technology, superconducting systems, 
              and breakthrough electromagnetic innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap cursor-pointer">
                Explore Superconductivity
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 whitespace-nowrap cursor-pointer">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-6 flex items-center justify-center text-white">
          <i className="ri-arrow-down-line text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
