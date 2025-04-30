import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-base-100/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div onClick={() => scrollToSection('hero')} className="text-2xl font-bold text-primary cursor-pointer">
            CleanType
          </div>
        </div>

        <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-base-100 md:bg-transparent pb-4 md:pb-0 border-b md:border-0 border-base-300/10 md:space-x-6`}>
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-base-content hover:text-primary transition px-4 py-2 md:p-0"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('github-section')} 
            className="text-base-content hover:text-primary transition px-4 py-2 md:p-0"
          >
            Open Source
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-base-content hover:text-primary transition px-4 py-2 md:p-0"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-base-content hover:text-primary transition px-4 py-2 md:p-0"
          >
            FAQ
          </button>
          <a 
            href="https://github.com/StarKnightt/CleanType" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base-content hover:text-primary transition px-4 py-2 md:p-0"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
        </nav>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-base-content focus:outline-none p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;