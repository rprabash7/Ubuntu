import React from 'react';

const Hero = ({ data }) => {
  return (
    <section id="home" className="bg-white min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-blue-600">{data.name || 'Prabash'}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              MCA Graduate | Full Stack Developer | Django Specialist
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              {data.message || 'Learn Programming in Simple Telugu'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Learning
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View Tutorials
              </button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-blue-100">
                <img 
                  src={data.image_url || '/media/images/prabash7tech.jpeg'} 
                  alt="Prabash - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
