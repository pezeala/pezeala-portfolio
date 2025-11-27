import React from 'react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white py-8 text-center text-secondary text-sm border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="font-bold text-primary">&copy; {new Date().getFullYear()} Peace Ezeala</p>
        <div className="flex gap-4 mt-2 md:mt-0">
           <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-brand-green cursor-pointer">Strengths</a>
           <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-brand-green cursor-pointer">Works</a>
           <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="hover:text-brand-green cursor-pointer">Notes</a>
           <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="hover:text-brand-green cursor-pointer">Experience</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;