import React from 'react';
import { Zap, Users, Layers, ArrowRight, TrendingUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  theme: 'green' | 'yellow' | 'orange' | 'primary';
  stats: string;
}> = ({ title, description, icon, theme, stats }) => {
  
  const themeStyles = {
    green: { bg: 'bg-brand-green', light: 'bg-brand-green/10', text: 'text-brand-green' },
    yellow: { bg: 'bg-brand-yellow', light: 'bg-brand-yellow/10', text: 'text-brand-yellow-700' },
    orange: { bg: 'bg-brand-orange', light: 'bg-brand-orange/10', text: 'text-brand-orange' },
    primary: { bg: 'bg-primary', light: 'bg-gray-200', text: 'text-primary' },
  };

  const style = themeStyles[theme];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 h-full">
      <div className={`w-14 h-14 rounded-full ${style.bg} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed mb-6">{description}</p>
      
      <div className={`py-3 px-4 rounded-xl ${style.light} flex justify-between items-center mt-auto`}>
        <span className={`font-bold ${style.text} text-sm`}>{stats}</span>
        <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center ${style.text}`}>
           <ArrowRight size={14} />
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Header Column */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
             <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
               How I drive <br/> Transformation
             </h2>
             <p className="text-secondary text-lg leading-relaxed">
               I enable organizations to unlock their rhythm by turning complex product problems into scalable digital solutions.
             </p>
             <p className="text-secondary">
               I fuel business growth through data-driven decision making and by embeding agility into the culture.
             </p>
                          
          </div>

          {/* Cards Column - Flattened Grid for perfect alignment */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
               <ServiceCard 
                  title="Product Strategy & Vision" 
                  description="I turn ambitious business goals into clear, data‑backed strategies that accelerate delivery. I build the vision that drives the product, aligning teams and stakeholders around shared success."
                  icon={<Layers size={24} />}
                  theme="green"
                  stats="95% measurable outcomes with increased stakeholder visibility."
               />
               <ServiceCard 
                  title="Agile Transformation" 
                  description="I drive organizational change through SAFe and team coaching. I build the teams that build the product, enabling them to accelerate delivery, adapt with agility, and create lasting impact."
                  icon={<Users size={24} />}
                  theme="yellow"
                  stats="Improving delivery predictability and collaboration."
               />              
               <ServiceCard 
                  title="Tech Innovation" 
                  description="I harness GenAI, modernize legacy platforms, and drive DevOps adoption to unlock measurable business outcomes. I build the tech that builds the product, ensuring scalability, resilience, and speed to market."
                  icon={<Zap size={24} />}
                  theme="orange"
                  stats="Supercharging products to be more efficient, scalable, and impactful." 
               />
               <ServiceCard 
                  title="Operational Excellence" 
                  description="I harness real‑time insights and automation to optimize workflows that reduce costs and increase velocity. I build the efficiency that scales the product, enabling sustainable growth and impact."
                  icon={<TrendingUp size={24} />}
                  theme="primary"
                  stats="Reducing operational costs and accelerating time-to-market." 
               />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
