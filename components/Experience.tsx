import React, { useEffect, useRef, useState } from 'react';
import { EXPERIENCE_DATA } from '../data';

const ExperienceItem: React.FC<{ item: typeof EXPERIENCE_DATA[0]; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Alternate dot colors
  const dotColors = ['bg-brand-green', 'bg-brand-orange', 'bg-brand-yellow'];
  const dotColor = dotColors[index % dotColors.length];

  return (
    <div 
      ref={ref}
      className={`relative pl-12 pb-12 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Timeline Line */}
      <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-gray-200"></div>
      
      {/* Timeline Dot */}
      <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-white shadow-md z-10 ${dotColor}`}></div>

      <div className="grid md:grid-cols-12 gap-4 md:gap-8 group">
        {/* Header: Role & Company */}
        <div className="md:col-span-4">
          <span className="inline-block text-xs font-bold text-secondary uppercase tracking-widest mb-1">{item.period}</span>
          <h3 className="text-xl font-bold text-primary group-hover:text-brand-green transition-colors">{item.role}</h3>
          <p className="text-sm font-medium text-secondary">{item.company}</p>
        </div>

        {/* Description */}
        <div className="md:col-span-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
          <p className="text-secondary leading-relaxed mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2">
             {item.achievements.slice(0, 2).map((ach, i) => (
               <span key={i} className="text-xs font-medium py-1 px-3 bg-canvas rounded-full text-primary border border-gray-200">
                 {ach}
               </span>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">My Work Experience</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A timeline of my professional journey and the milestones achieved along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;