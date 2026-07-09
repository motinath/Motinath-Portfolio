import { ExternalLink } from 'lucide-react';
import { FadeIn } from './ReusableComponents';

interface Project {
  name: string;
  description: string;
  image: string;
  category: 'Active' | 'Personal';
  badges: string[];
  demoUrl: string;
}

const PROJECTS_LIST: Project[] = [
  {
    name: '7T/8T SRAM Design and Analysis',
    description: 'Designed and simulated 7T/8T SRAM in Cadence Virtuoso with asymmetrical feedback to improve write ability and stability, validated through SNM and DC analysis.',
    image: '/projects/sram_design.png',
    category: 'Personal',
    badges: ['Cadence Virtuoso', 'CMOS Design', 'Analog Simulation', 'SNM Analysis'],
    demoUrl: 'https://github.com/motinath'
  },
  {
    name: 'Physio Trust – Health Signal Reliability System',
    description: 'Built a signal validation pipeline to detect unreliable physiological readings caused by motion artifacts and electrical noise in wearable health sensors, applying contextual behavior analysis.',
    image: '/projects/physio_sensor.png',
    category: 'Active',
    badges: ['Python', 'Signal Processing', 'Embedded Pipeline'],
    demoUrl: 'https://github.com/motinath'
  },
  {
    name: 'Adaptive Vehicle Navigation Using ANFIS and ROS',
    description: 'Engineered an ANFIS-based intelligent controller for obstacle avoidance and path planning in ROS2, validated across multiple simulation scenarios in Gazebo.',
    image: '/projects/vehicle_nav.png',
    category: 'Active',
    badges: ['ROS2', 'Gazebo', 'Python', 'ANFIS Controller'],
    demoUrl: 'https://github.com/motinath'
  },
  {
    name: 'Contentlyzer - SEO Audit Tool',
    description: 'Built a web dashboard automating website content analysis and SEO auditing, reducing manual audit effort by 50% across test deployments.',
    image: '/projects/seo_audit.png',
    category: 'Active',
    badges: ['React.js', 'Google Search Console API', 'REST'],
    demoUrl: 'https://github.com/motinath'
  },
  {
    name: 'Electric Vehicle Dynamics Simulation',
    description: 'Simulated a full EV scooter system including BLDC motor and battery management in MATLAB Simulink, achieving 90% operational efficiency across varying load conditions.',
    image: '/projects/ev_simulation.png',
    category: 'Personal',
    badges: ['MATLAB Simulink', 'BLDC Motor Model', 'Li-ion BMS'],
    demoUrl: 'https://github.com/motinath'
  }
];

export function Projects() {
  const activeProjects = PROJECTS_LIST.filter(p => p.category === 'Active');
  const personalProjects = PROJECTS_LIST.filter(p => p.category === 'Personal');

  const renderProjectCard = (project: Project, index: number) => {
    return (
      <FadeIn key={index} delay={0.1 + index * 0.05} y={20}>
        <div className="bg-[var(--vscode-tab-inactive-bg)]/80 border border-[var(--vscode-border)] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-[var(--vscode-tab-active-border)]/50 hover:scale-[1.01] flex flex-col h-full group">
          {/* Card Image Area with category tag */}
          <div className="relative aspect-video overflow-hidden bg-[var(--vscode-editor-bg)]">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              loading="lazy"
            />
            {/* Status Pill */}
            <span className={`absolute top-3 left-3 text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full select-none ${
              project.category === 'Active' 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
            }`}>
              {project.category === 'Active' ? 'Active' : 'Personal'}
            </span>
          </div>

          {/* Card Info Area */}
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="font-sans font-bold text-base text-[var(--vscode-text)] mb-2 leading-tight select-none">
              {project.name}
            </h3>
            <p className="font-sans text-xs text-[var(--vscode-text-muted)] leading-relaxed mb-4 text-left flex-grow">
              {project.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.badges.map((badge, bIndex) => (
                <span 
                  key={bIndex}
                  className="bg-[var(--vscode-editor-bg)] text-[10px] text-[#4EC9B0] font-mono px-2 py-0.5 rounded border border-[var(--vscode-border)] select-none"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Demo Link Button */}
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-[var(--vscode-editor-bg)] border border-[var(--vscode-border)] hover:bg-[#007ACC] hover:border-[#007ACC] hover:text-white transition-all text-xs font-medium text-[var(--vscode-text-muted)] hover:no-underline font-sans cursor-pointer"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </FadeIn>
    );
  };

  return (
    <div className="min-h-full w-full bg-[var(--vscode-editor-bg)] text-[var(--vscode-text)] p-6 sm:p-10 flex flex-col font-sans select-none animate-fadeIn relative overflow-x-hidden">
      
      {/* Background glow */}
      <div className="absolute right-[10%] bottom-[20%] w-[300px] h-[300px] bg-blue-950/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Page Title */}
      <FadeIn delay={0.1} y={20} className="border-b border-[var(--vscode-border)] pb-4 mb-8">
        <div className="flex items-center gap-2 mb-1 select-none">
          <span className="text-[var(--vscode-text-muted)]/30 text-3xl font-extralight">|</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--vscode-text)] tracking-tight uppercase">
            Projects
          </h1>
        </div>
        <p className="text-xs text-[var(--vscode-text-muted)] mt-1 font-mono">A collection of projects I've built and contributed to.</p>
      </FadeIn>

      {/* 1. ACTIVE PROJECTS SECTION */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6 select-none border-b border-[var(--vscode-border)] pb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-sm font-semibold text-[var(--vscode-text)] font-mono uppercase tracking-wider">
            Active
          </h2>
          <span className="text-[var(--vscode-text-muted)] text-xs font-mono">({activeProjects.length} projects)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeProjects.map((p, idx) => renderProjectCard(p, idx))}
        </div>
      </div>

      {/* 2. PERSONAL PROJECTS SECTION */}
      <div>
        <div className="flex items-center gap-2 mb-6 select-none border-b border-[var(--vscode-border)] pb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <h2 className="text-sm font-semibold text-[var(--vscode-text)] font-mono uppercase tracking-wider">
            Personal / Creations
          </h2>
          <span className="text-[var(--vscode-text-muted)] text-xs font-mono">({personalProjects.length} projects)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((p, idx) => renderProjectCard(p, idx))}
        </div>
      </div>

    </div>
  );
}

export default Projects;
