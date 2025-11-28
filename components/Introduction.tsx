import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-24 bg-brand-light-green/20 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
           {/* Quote / Headline */}
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight italic">
            "I believe in delivering valuable products through <span className="text-brand-green not-italic">empathy</span>, <span className="text-brand-green not-italic">clarity</span>, bold decision-making, and relentless <span className="text-brand-green not-italic">optimism</span>."
           </h2>
           
           {/* Divider */}
           <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full"></div>

           {/* Bio Text */}
           <p className="text-lg md:text-xl text-secondary leading-relaxed font-light">
             I transform complexity into clarity by designing scalable software solutions that solve real business problems. As a Product Manager, I connect market opportunities to engineering delivery with a proven track record in Product Strategy, Agile Execution, and Data‑Driven Discovery. I excel at securing stakeholder buy‑in and leading initiatives that launch platforms faster, strengthen data foundations, and deliver measurable client success.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
