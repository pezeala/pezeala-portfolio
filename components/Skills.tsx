import React, { useEffect, useState, useRef } from 'react';
import { Target, Cpu, Users, BarChart3, Info } from 'lucide-react';
import { SKILLS_DATA_RAW } from '../data';

const ICONS = [
  <Target size={20} />,
  <Users size={20} />,
  <Cpu size={20} />,
  <BarChart3 size={20} />
];

// Combine raw data with icons
const SKILLS_DATA = SKILLS_DATA_RAW.map((cat, idx) => ({
  ...cat,
  icon: ICONS[idx]
}));

const SkillBar: React.FC<{ name: string; level: number; delay: number }> = ({ name, level, delay }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setWidth(level), delay);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-end mb-2">
        <span className="text-primary text-sm font-bold">{name}</span>
        <span className="text-brand-green text-xs font-bold">{width}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-brand-green rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

// --- Sub-Component: Interactive Radar Chart (SVG) ---
const RadarChart: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const categories = SKILLS_DATA.map(c => c.title);
  const values = SKILLS_DATA.map(c => 
    Math.round(c.skills.reduce((acc, curr) => acc + curr.level, 0) / c.skills.length)
  );

  const size = 300;
  const center = size / 2;
  const radius = (size / 2) - 40; // padding
  const angleSlice = (Math.PI * 2) / categories.length;

  const getCoords = (value: number, index: number, maxVal: number = 100) => {
    const angle = index * angleSlice - Math.PI / 2;
    const r = (value / maxVal) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  const points = values.map((v, i) => {
    const { x, y } = getCoords(v, i);
    return `${x},${y}`;
  }).join(' ');

  const gridLevels = [25, 50, 75, 100];

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="overflow-visible">
        {gridLevels.map((level) => (
          <polygon
            key={level}
            points={categories.map((_, i) => {
              const { x, y } = getCoords(level, i);
              return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="#e5e7eb" // gray-200
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {categories.map((_, i) => {
          const { x, y } = getCoords(100, i);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          );
        })}

        <polygon
          points={points}
          fill="rgba(60, 110, 113, 0.2)" // brand-green with opacity
          stroke="#3C6E71"
          strokeWidth="2"
          className="drop-shadow-lg transition-all duration-500 ease-out"
        />

        {values.map((v, i) => {
          const { x, y } = getCoords(v, i);
          const labelCoords = getCoords(115, i);
          return (
            <g key={i} 
               onMouseEnter={() => setHoveredIndex(i)}
               onMouseLeave={() => setHoveredIndex(null)}
               className="cursor-pointer group"
            >
              <circle
                cx={x}
                cy={y}
                r={6}
                fill="#fff"
                stroke="#3C6E71"
                strokeWidth="2"
                className="transition-all duration-300 group-hover:r-8 group-hover:fill-brand-green"
              />
              {hoveredIndex === i && (
                <g>
                  <rect x={x - 30} y={y - 45} width="60" height="30" rx="4" fill="#1A2E35" />
                  <text x={x} y={y - 25} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">{v}%</text>
                </g>
              )}
              <text
                x={labelCoords.x}
                y={labelCoords.y}
                textAnchor="middle"
                fill={hoveredIndex === i ? "#3C6E71" : "#4A5568"}
                fontSize="12"
                fontWeight="600"
                className="transition-colors duration-300"
              >
                {categories[i].split(' ')[0]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Strategic Competencies</h2>
              <p className="text-secondary text-lg leading-relaxed">
                Balancing high-level strategy with granular technical execution.
              </p>
            </div>

            <div className="bg-canvas p-8 rounded-full border border-gray-100 flex flex-col items-center justify-center aspect-square max-w-md mx-auto lg:mx-0">
              <RadarChart />
            </div>
          </div>

          <div>
            <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {SKILLS_DATA.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                    activeTab === idx 
                      ? 'bg-brand-green border-brand-green text-white shadow-lg' 
                      : 'bg-white border-gray-200 text-secondary hover:border-brand-green hover:text-brand-green'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            <div className="bg-canvas p-8 rounded-3xl border border-gray-100 shadow-sm min-h-[400px]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-gray-100 text-brand-green shadow-sm">
                  {SKILLS_DATA[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">{SKILLS_DATA[activeTab].title}</h3>
                  <p className="text-secondary text-sm">Detailed Proficiency Breakdown</p>
                </div>
              </div>

              <div className="space-y-6">
                {SKILLS_DATA[activeTab].skills.map((skill, idx) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    delay={idx * 100} 
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;