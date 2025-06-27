const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-base-300 border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CleanType</h3>
            <p className="text-sm text-muted">
              A modern, distraction-free text editor for focused writing. Built with performance and simplicity in mind.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/StarKnightt/CleanType"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://x.com/Star_Knight12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted hover:text-primary transition-colors">Features</a>
              </li>
              <li>
                <a href="#download" className="text-muted hover:text-primary transition-colors">Download</a>
              </li>
              <li>
                <a href="https://github.com/StarKnightt/CleanType/releases" className="text-muted hover:text-primary transition-colors">Release Notes</a>
              </li>
              <li>
                <a href="https://github.com/StarKnightt/CleanType/issues" className="text-muted hover:text-primary transition-colors">Report an Issue</a>
              </li>
            </ul>
          </div>

          {/* Coming Soon Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Coming Soon</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-muted">Documentation</span>
                <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">Soon</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-muted">Privacy Policy</span>
                <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">Soon</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-muted">Terms of Service</span>
                <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">Soon</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-muted">License</span>
                <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">Soon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-base-300 border-opacity-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted">
              © {currentYear} CleanType. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted">
              <span>Made with</span>
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>by</span>
              <a 
                href="https://github.com/StarKnightt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-focus transition-colors"
              >
                StarKnightt
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 