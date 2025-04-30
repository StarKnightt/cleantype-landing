import { useEffect } from 'react';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import GitHubSection from './components/GitHubSection';
import Testimonials from './components/Testimonials';
import NavBar from './components/NavBar';

function App() {
  // Set initial theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'black');
  }, []);

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <NavBar />
      <div className="flex-1">
        <main>
          <Hero />
          <GitHubSection />
          <Testimonials />
          <FAQ />
        </main>
      </div>
      
      <footer className="bg-base-200/50 border-t border-base-300/10">
        <div className="container mx-auto py-8 px-4 text-center">
          <a 
            href="https://prasen.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            prasen.dev
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
