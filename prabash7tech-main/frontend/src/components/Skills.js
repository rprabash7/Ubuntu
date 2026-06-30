import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', icon: '🎨', color: 'bg-orange-50 hover:bg-orange-100' },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-50 hover:bg-yellow-100' },
    { name: 'React JS', icon: '⚛️', color: 'bg-blue-50 hover:bg-blue-100' },
    { name: 'Python Django', icon: '🐍', color: 'bg-green-50 hover:bg-green-100' },
    { name: 'Java Basics', icon: '☕', color: 'bg-red-50 hover:bg-red-100' },
    { name: 'C/C++', icon: '💻', color: 'bg-purple-50 hover:bg-purple-100' },
    { name: 'Databases', icon: '🗄️', color: 'bg-indigo-50 hover:bg-indigo-100' },
    { name: 'Linux & Windows Repair', icon: '🔧', color: 'bg-gray-50 hover:bg-gray-100' }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          What I Teach
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`${skill.color} p-8 rounded-xl shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer border border-gray-200`}
            >
              <div className="text-5xl mb-4 text-center">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-600 text-lg mt-12 font-medium">
          Build your programming skills with confidence through structured learning
        </p>
      </div>
    </section>
  );
};

export default Skills;
