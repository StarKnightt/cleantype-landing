import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'black');
  }, []);

  return (
    <div className="hero bg-gradient-to-b from-base-200 to-base-100">
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
          
          <div className="card bg-base-200 bg-opacity-50 shadow-soft hover:shadow-hover transition-all duration-300 my-6 overflow-hidden border border-base-300 border-opacity-10 group animate-fade-in-up">
            <div className="card-body p-0">
              <div className="relative overflow-hidden">
                <video 
                  className="w-full" 
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                >
                  <source src="https://video.gumlet.io/6745e593080b60408ca085f7/68011ca73ab3a7b826bbfac0/download.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="stats bg-base-200 bg-opacity-50 shadow-soft my-6 border border-base-300 border-opacity-10 animate-fade-in-up">
            <div className="stat">
              <div className="stat-title text-muted-light text-sm font-medium">Total Downloads</div>
              <div className="stat-value text-4xl font-bold">53</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-6 animate-fade-in-up">
            <div className="w-full md:w-auto">
              <div className="relative">
                <span className="absolute -top-6 right-2.5 text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Recommended
                </span>
                <a href="https://github.com/StarKnightt/CleanType/releases/download/v0.2.0/CleanType_0.2.0_x64-setup.exe" 
                  className="btn w-full md:w-80 h-auto py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 border-0 shadow-soft hover:shadow-hover transition-all duration-300">
                  <div className="flex flex-col">
                    <span className="text-lg font-medium">Download for Windows</span>
                    <span className="text-sm opacity-80">Windows 10/11 (64-bit)</span>
                    <span className="text-sm opacity-90">EXE Installer</span>
                  </div>
                </a>
              </div>
            </div>

            <a href="https://github.com/StarKnightt/CleanType/releases/download/v0.2.0/CleanType_0.2.0_x64_en-US.msi" 
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
        </div>
      </div>
    </div>
  );
};

export default Hero; 