
export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-thunderstorms-line',
      title: 'Superconductivity & Magnetic Technology',
      description: 'Revolutionary magnetic transportation systems, zero-resistance power transmission, levitating consumer devices, and advanced electromagnetic industrial solutions. Our core expertise drives the future of clean, efficient technology.',
      features: ['Maglev Transportation Systems', 'Superconducting Power Grids', 'Magnetic Levitation Devices', 'Electromagnetic Automation', 'Zero-Loss Energy Transfer', 'Cryogenic Cooling Solutions'],
      highlight: true,
      size: 'large'
    },
    {
      icon: 'ri-code-s-slash-line',
      title: 'Software Engineering & Digital Solutions',
      description: 'Comprehensive digital transformation services including fullstack development, cloud infrastructure, AI/ML integration, and cybersecurity solutions that complement our hardware innovations.',
      features: ['React & Next.js Applications', 'Cloud Infrastructure (AWS)', 'AI/ML Integration', 'DevSecOps Solutions'],
      highlight: false,
      size: 'medium'
    },
    {
      icon: 'ri-microscope-line',
      title: 'Research & Development',
      description: 'Cutting-edge research in superconductivity applications, prototyping next-generation magnetic devices, and developing breakthrough technologies.',
      features: ['Superconductivity Research', 'Prototype Development'],
      highlight: false,
      size: 'small'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Consulting & Strategic Services',
      description: 'Expert advisory on superconductivity adoption, magnetic technology integration, and strategic planning for advanced technology implementations.',
      features: ['Technology Advisory', 'Implementation Strategy'],
      highlight: false,
      size: 'small'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Superconductivity Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading the world in superconductivity and magnetic technology innovation, 
            with comprehensive digital solutions and strategic expertise to transform industries.
          </p>
        </div>

        {/* Main Superconductivity Service - Takes 60% visual space */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-2xl shadow-2xl">
            <div className="flex items-start space-x-8">
              <div className="w-24 h-24 flex items-center justify-center bg-white/20 rounded-2xl flex-shrink-0">
                <i className="ri-thunderstorms-line text-5xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-6">Superconductivity & Magnetic Technology</h3>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Revolutionary magnetic transportation systems, zero-resistance power transmission, levitating consumer devices, 
                  and advanced electromagnetic industrial solutions. Our core expertise drives the future of clean, efficient technology.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {services[0].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-blue-100 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Services Grid - Takes remaining 40% visual space */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(1).map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-lg mb-6">
                <i className={`${service.icon} text-3xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
