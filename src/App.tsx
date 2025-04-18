import { useEffect } from 'react';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import GitHubSection from './components/GitHubSection';
import Testimonials from './components/Testimonials';

function App() {
  // Set initial theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'black');
  }, []);

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <div className="flex-1">
        <main>
          <Hero />
          <GitHubSection />
          <Testimonials />
          <FAQ />
        </main>
      </div>
      
      <footer className="footer footer-center p-4 bg-base-200/50 text-base-content">
        <div className="flex items-center gap-2">
          Made with <span className="text-red-500">❤️</span> by
          <a href="https://github.com/StarKnightt" target="_blank" rel="noopener noreferrer" className="link link-primary">
            StarKnightt
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
