import React from 'react';

const BlogPosts = () => {
  const posts = [
    {
      title: 'Top 50 Python Interview Questions',
      excerpt: 'Master your next technical interview with these essential Python questions and answers',
      date: 'January 20, 2026',
      readTime: '10 min read'
    },
    {
      title: 'Common Django Error Fixes',
      excerpt: 'Quick solutions to the most common Django errors developers face',
      date: 'January 18, 2026',
      readTime: '8 min read'
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Latest Tech Tips
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-gray-200"
            >
              <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                <span>📅 {post.date}</span>
                <span>⏱️ {post.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <a 
                href="#blog"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Read Article
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
