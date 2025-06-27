import React from 'react';
import Hero from './components/Hero';
import GitHubSection from './components/GitHubSection';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  // Set initial theme
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'black');
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      <NavBar />
      <main>
        <Hero />
        <GitHubSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
