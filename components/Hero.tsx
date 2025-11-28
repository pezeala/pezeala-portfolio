import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Abstract blobs background */}
      <div className="absolute top-20 left-[-100px] w-64 h-64 bg-brand-light-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-[-100px] w-72 h-72 bg-brand-light-green rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-brand-light-orange rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 md:pr-12 animate-fade-in-up order-2 md:order-1">            
            <h3 className="font-serif text-2xl text-primary italic">Hey There,</h3>
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight">
              I'm <span className="text-brand-green">Peace</span> <br />              
            </h1>
            
            {/* Tagline removed */}

            <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-block text-brand-orange font-bold text-lg hover:underline">
              {PERSONAL_INFO.email}
            </a>

            <div className="pt-4 flex items-center gap-8">
             
              
              <div>               
                <span className="font-serif text-2xl text-primary italic  tracking-wider">Transforming Teams.</span> <br />
                <span className="font-serif text-2xl text-primary italic tracking-wider">Scaling Products.</span> <br />
                <span className="font-serif text-2xl text-primary italic tracking-wider">Driving Impact.</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image masked inside Brush Stroke */}
          <div className="relative order-1 md:order-2 flex justify-center items-center w-full">
            {/* Max width set to 2xl for large display, aspect-square to maintain ratio */}
            {/* Added w-[85%] on mobile to ensure visual centering and spacing from edges */}
            <div className="w-[85%] md:w-full max-w-2xl aspect-square relative">
              <svg 
                viewBox="0 0 1000 1000" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-full drop-shadow-2xl"
              >
                <defs>
                  <clipPath id="blobMask">
                    {/* 
                      Organic Brush Stroke Shape
                      - ViewBox increased to 1000x1000 to prevent clipping ("removing the frame")
                      - Scale 4.5 fits within 1000 units (approx 900px wide) 
                      - Centered at 500, 500
                    */}
                    <path 
                      transform="translate(500 500) scale(4.5)" 
                      d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.1C93.5,9,82.2,22.3,71.2,33.4C60.2,44.5,49.5,53.4,37.7,61.6C25.9,69.8,12.9,77.3,-0.6,78.4C-14.2,79.4,-28.4,74,-40.9,66.2C-53.4,58.4,-64.2,48.2,-72.5,35.9C-80.8,23.6,-86.6,9.2,-84.7,-4.2C-82.8,-17.6,-73.2,-30,-63,-40.9C-52.8,-51.8,-42,-61.2,-30.1,-69.9C-18.2,-78.6,-5.1,-86.6,6.2,-87.2C17.5,-87.9,35,-81.2,44.7,-76.4Z" 
                    />
                  </clipPath>
                </defs>
                
                {/* Image fills the 1000x1000 viewbox to ensure full coverage of the mask */}
                <image 
                   href="https://i.postimg.cc/PxDgy0Y1/Peace-Ezeala-Photo.jpg"
                  x="80" 
                  y="80" 
                  width="1000" 
                  height="1000" 
                  clipPath="url(#blobMask)" 
                  preserveAspectRatio="xMidYMin slice"
                />
              </svg>

              {/* Floating Badge: Product Certified Leader (Top Right) */}
              <div className="absolute top-[2%] right-[2%] md:top-[8%] md:right-[5%] bg-white w-24 h-24 md:w-32 md:h-32 rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-2 z-20 transition-transform hover:scale-105 duration-300">
                 <Award className="text-brand-orange w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2" />
                 <span className="text-[8px] md:text-[10px] font-bold text-primary leading-tight tracking-wider">
                   AGILE & PRODUCT<br/>CERTIFIED<br/>LEADER
                 </span>
              </div>

              {/* Floating Badge: Years Experience (Bottom Left) */}
              <div className="absolute bottom-[5%] left-[0%] md:bottom-[10%] md:left-[0%] z-20 animate-float">
                <div className="bg-white p-5 md:p-8 rounded-[2rem] shadow-2xl transition-transform hover:scale-105 duration-300 flex flex-col items-center justify-center text-center">
                   <span className="font-serif text-4xl md:text-5xl font-bold text-primary leading-none block">
                     {PERSONAL_INFO.yearsExperience}+
                   </span>
                   <span className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-widest mt-2 block">
                     Years<br/>Experience
                   </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
