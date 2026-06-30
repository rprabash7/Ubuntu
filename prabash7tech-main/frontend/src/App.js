import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Tutorials from './components/Tutorials';
import BlogPosts from './components/BlogPosts';
import WhyThisWebsite from './components/WhyThisWebsite';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState({ 
    name: '', 
    message: '', 
    image_url: '' 
  });

  useEffect(() => {
    axios.get('/api/info/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="pt-20">
        <Hero data={data} />
        <Skills />
        <Tutorials />
        <BlogPosts />
        <WhyThisWebsite />
        <Footer />
      </div>
    </div>
  );
}

export default App;
