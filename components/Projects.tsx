import React from 'react';
import { PROJECTS_DATA } from '../data';

const Projects: React.FC = () => {
  const cardThemes = [
    { bg: 'bg-brand-light-yellow', text: 'text-brand-yellow-700' },
    { bg: 'bg-brand-green', text: 'text-white' },
    { bg: 'bg-white', text: 'text-primary' }, // Fallback or specific style
  ];

  return (
    <section id="projects" className="py-24 bg-canvas overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">My Latest Works</h2>
            <p className="text-secondary">Perfect solutions for digital experience.</p>
          </div>
          <a href="#" className="hidden md:block text-brand-orange font-bold hover:underline">Explore More Works</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => {
            // Cycle through themes. Note: Project 2 in the image is Dark Green, others are Light Yellow/White
            const theme = idx === 1 ? cardThemes[1] : (idx === 0 ? cardThemes[0] : cardThemes[2]);
            const isDark = idx === 1;

            return (
              <div 
                key={project.id} 
                className={`${theme.bg} rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full ${idx === 2 ? 'border border-gray-200' : ''}`}
              >
                <div className="mb-8 relative h-48 rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className={`mt-auto ${isDark ? 'text-white' : 'text-primary'}`}>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-brand-light-green' : 'text-secondary'} opacity-90 line-clamp-3`}>
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;