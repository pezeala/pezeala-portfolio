import React from 'react';
import { Mail, Linkedin, MapPin, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 block">Get in touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Let's make something amazing together.</h2>
          <p className="text-secondary mb-16 text-lg">
            Start by <a href={`mailto:${PERSONAL_INFO.email}`} className="text-brand-orange font-bold border-b-2 border-brand-orange hover:text-brand-green hover:border-brand-green transition-colors">saying hi</a>
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Email */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-brand-light-green flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform mb-6 shadow-sm">
                <Mail size={32} />
              </div>
              <p className="text-xs text-secondary uppercase font-bold mb-2">Email</p>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold text-primary hover:text-brand-green transition-colors break-all">
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-brand-light-green flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform mb-6 shadow-sm">
                <Linkedin size={32} />
              </div>
              <p className="text-xs text-secondary uppercase font-bold mb-2">LinkedIn</p>
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="text-lg font-bold text-primary hover:text-brand-green transition-colors">
                Connect on LinkedIn
              </a>
            </div>

             {/* Resume */}
             <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-brand-light-green flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform mb-6 shadow-sm">
                <FileText size={32} />
              </div>
              <p className="text-xs text-secondary uppercase font-bold mb-2">Resume</p>
              <a href={PERSONAL_INFO.resume} target="_blank" rel="noreferrer" className="text-lg font-bold text-primary hover:text-brand-green transition-colors">
                View Resume
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-brand-light-green flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform mb-6 shadow-sm">
                <MapPin size={32} />
              </div>
              <p className="text-xs text-secondary uppercase font-bold mb-2">Location</p>
              <p className="text-lg font-bold text-primary">
                {PERSONAL_INFO.location}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
