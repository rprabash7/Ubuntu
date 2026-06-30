import React from 'react';

const Tutorials = () => {
  const tutorials = [
    {
      title: 'Django Login System',
      category: 'Python Django',
      description: 'Complete authentication system with user registration and login',
      bgColor: 'bg-green-500'
    },
    {
      title: 'JavaScript Basics',
      category: 'JavaScript',
      description: 'Master the fundamentals of JavaScript programming',
      bgColor: 'bg-yellow-500'
    },
    {
      title: 'HTML Forms',
      category: 'HTML/CSS',
      description: 'Create interactive and responsive forms',
      bgColor: 'bg-orange-500'
    }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Latest Tutorials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-gray-200"
            >
              <div className={`${tutorial.bgColor} h-2`}></div>
              <div className="p-6">
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  {tutorial.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tutorial.description}
                </p>
                <a 
                  href="#tutorials"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                >
                  Read More 
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-600 text-lg mt-12">
          Fresh tutorials added regularly to keep you learning
        </p>
      </div>
    </section>
  );
};

export default Tutorials;
