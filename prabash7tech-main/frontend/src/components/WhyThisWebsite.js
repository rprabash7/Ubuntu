import React from 'react';

const WhyThisWebsite = () => {
  const features = [
    { icon: '🗣️', title: 'Simple Telugu Explanations', description: 'Learn complex concepts in your native language' },
    { icon: '🚀', title: 'Real Projects', description: 'Build actual applications, not just theory' },
    { icon: '🎓', title: 'MCA Student Focus', description: 'Content designed for college students' },
    { icon: '💯', title: 'Free Learning', description: 'Quality education accessible to everyone' }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Why This Website
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisWebsite;
