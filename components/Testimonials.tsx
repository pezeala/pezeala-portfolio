import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">People talk about me</h2>
          <p className="text-secondary">Feedback from colleagues and partners.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-brand-green p-1">
                 <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-full h-full rounded-full object-cover" 
                />
              </div>
              
              <p className="text-secondary italic mb-6 relative z-10 leading-relaxed text-sm">
                "{t.quote}"
              </p>
              
              <div>
                <h4 className="font-bold text-primary text-lg">{t.name}</h4>
                <p className="text-brand-orange text-xs font-bold uppercase tracking-wide mt-1">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;