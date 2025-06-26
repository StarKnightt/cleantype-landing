import { useEffect, useState } from 'react';

const Hero = () => {
  const [downloadCount, setDownloadCount] = useState<number>(0);
  const [displayCount, setDisplayCount] = useState<number>(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'black');
    
    // Fetch download count from GitHub API
    fetch('https://api.github.com/repos/StarKnightt/CleanType/releases')
      .then(response => response.json())
      .then(releases => {
        const totalDownloads = releases.reduce((total: number, release: any) => {
          const assets = release.assets || [];
          const releaseDownloads = assets.reduce((sum: number, asset: any) => sum + asset.download_count, 0);
          return total + releaseDownloads;
        }, 0);
        setDownloadCount(totalDownloads);
      })
      .catch(error => {
        console.error('Error fetching download count:', error);
        setDownloadCount(0);
      });
  }, []);

  useEffect(() => {
    // Animate the counter
    if (downloadCount > 0) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = downloadCount / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= downloadCount) {
          setDisplayCount(downloadCount);
          clearInterval(timer);
        } else {
          setDisplayCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [downloadCount]);

  return (
    <div id="hero" className="hero bg-gradient-to-b from-base-200 to-base-100">
      <div className="hero-content text-center py-12">
        <div className="max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-base-200 bg-opacity-50 px-3 py-1 text-sm text-muted shadow-soft animate-fade-in-down">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Now with offline support
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-primary/50 animate-fade-in-down">
            CleanType
          </h1>
          
          <p className="py-4 text-xl md:text-2xl max-w-3xl mx-auto text-muted animate-fade-in-up">
            A modern, distraction-free text editor for focused writing. Clean interface, fast performance, and beautiful design.
          </p>

          <div className="stats bg-base-200 bg-opacity-50 shadow-soft my-6 border border-base-300 border-opacity-10 animate-fade-in-up">
            <div className="stat">
              <div className="stat-title text-muted-light text-sm font-medium">Total Downloads</div>
              <div className="stat-value text-4xl font-bold">
                {displayCount.toLocaleString()}
                <span className="text-primary">+</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-6 animate-fade-in-up">
            <div className="w-full md:w-auto">
              <div className="relative">
                <span className="absolute -top-6 right-2.5 text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Recommended
                </span>
                <a href="https://github.com/StarKnightt/CleanType/releases/download/v0.3.0/CleanType_0.3.0_x64-setup.exe" 
                  className="btn w-full md:w-80 h-auto py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 border-0 shadow-soft hover:shadow-hover transition-all duration-300">
                  <div className="flex flex-col">
                    <span className="text-lg font-medium">Download for Windows</span>
                    <span className="text-sm opacity-80">Windows 10/11 (64-bit)</span>
                    <span className="text-sm opacity-90">EXE Installer</span>
                  </div>
                </a>
              </div>
            </div>

            <a href="https://github.com/StarKnightt/CleanType/releases/download/v0.3.0/CleanType_0.3.0_x64_en-US.msi" 
              className="btn w-full md:w-80 h-auto py-4 bg-transparent hover:bg-base-content/5 border border-base-content/20 shadow-soft hover:shadow-hover transition-all duration-300">
              <div className="flex flex-col">
                <span className="text-lg font-medium">Download MSI Version</span>
                <span className="text-sm opacity-80">Alternative installer</span>
                <span className="text-sm opacity-90">MSI Package</span>
              </div>
            </a>
          </div>

          <div className="space-y-4 mt-8 mb-0 animate-fade-in-up">
            <div className="alert bg-base-200/50 border border-base-300/10 shadow-soft">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6 opacity-70">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-muted">🔒 All downloads are verified and signed. Your security is our priority.</span>
            </div>
            <div className="alert bg-base-200/50 border border-base-300/10 shadow-soft">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 opacity-70" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="text-muted">
                <strong>Note:</strong> When installing, Windows might show a security prompt. Click "More info" and then "Run anyway" to proceed.
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-24 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {/* Quick Text Cleaning */}
            <div className="card bg-base-200 bg-opacity-50 shadow-soft hover:shadow-hover transition-all duration-300 border border-base-300 border-opacity-10">
              <div className="card-body">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">Quick Text Cleaning</h3>
                <p className="text-muted">Instantly format and clean your text with powerful built-in tools. Perfect for writers and editors.</p>
              </div>
            </div>

            {/* Rust Performance */}
            <div className="card bg-base-200 bg-opacity-50 shadow-soft hover:shadow-hover transition-all duration-300 border border-base-300 border-opacity-10">
              <div className="card-body">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">Lightning Fast</h3>
                <p className="text-muted">Built with Rust for exceptional performance. Handle large documents with ease and zero lag.</p>
              </div>
            </div>

            {/* Modern UI */}
            <div className="card bg-base-200 bg-opacity-50 shadow-soft hover:shadow-hover transition-all duration-300 border border-base-300 border-opacity-10">
              <div className="card-body">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">Modern Interface</h3>
                <p className="text-muted">Clean, intuitive design that stays out of your way. Focus on your writing, not the interface.</p>
              </div>
            </div>

            {/* Privacy */}
            <div className="card bg-base-200 bg-opacity-50 shadow-soft hover:shadow-hover transition-all duration-300 border border-base-300 border-opacity-10">
              <div className="card-body">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">Privacy-Focused</h3>
                <p className="text-muted">All processing happens locally on your device. Your data never leaves your computer.</p>
              </div>
            </div>

            {/* History */}
            <div className="card bg-base-200 bg-opacity-50 shadow-soft hover:shadow-hover transition-all duration-300 border border-base-300 border-opacity-10">
              <div className="card-body">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">Smart History</h3>
                <p className="text-muted">Built-in version history keeps track of your changes. No need for multiple file versions.</p>
              </div>
            </div>

            {/* Multiple Fonts */}
            <div className="card bg-base-200 bg-opacity-50 shadow-soft hover:shadow-hover transition-all duration-300 border border-base-300 border-opacity-10">
              <div className="card-body">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">Rich Customization</h3>
                <p className="text-muted">Multiple fonts and easy-to-use interface customization options to match your style.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-8 mb-0 animate-fade-in-up">
            <div className="alert bg-base-200/50 border border-base-300/10 shadow-soft">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6 opacity-70">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-muted">🔒 All downloads are verified and signed. Your security is our priority.</span>
            </div>
            <div className="alert bg-base-200/50 border border-base-300/10 shadow-soft">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 opacity-70" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="text-muted">
                <strong>Note:</strong> When installing, Windows might show a security prompt. Click "More info" and then "Run anyway" to proceed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;