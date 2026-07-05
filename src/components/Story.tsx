import { Cpu, Palette, Film, Trophy, Code2, Sparkles, BookOpen } from 'lucide-react';
import { FadeIn } from './ReusableComponents';

export function Story() {
  return (
    <div className="min-h-full w-full bg-transparent text-[var(--vscode-text)] flex flex-col font-sans select-none animate-fadeIn h-[calc(100vh-114px)] overflow-hidden">
      
      {/* Top Split Sub-Header (mimicking Markdown preview header tab) */}
      <div className="flex items-center justify-between h-[30px] bg-[var(--vscode-tabs-bg)] border-b border-[var(--vscode-border)] px-4 select-none text-[11px] text-[var(--vscode-text-muted)] font-mono flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          <span>src &gt; Hobbies &gt; Story.md &gt; Split Editor Preview</span>
        </div>
        <span className="text-[#007ACC] font-semibold font-sans">Markdown: Split View (Ctrl+Shift+V)</span>
      </div>

      {/* Editor Split Windows Panel */}
      <div className="flex-grow flex flex-row divide-x divide-[var(--vscode-border)] h-full overflow-hidden">
        
        {/* Left Panel: Markdown Source (Editor View) */}
        <div className="hidden md:flex flex-col w-1/2 bg-[var(--vscode-editor-bg)] overflow-y-auto p-4 select-text font-mono text-[11px] sm:text-xs leading-relaxed text-left scrollbar-thin">
          <div className="flex gap-4">
            {/* Fake Code lines */}
            <div className="text-[var(--vscode-text-muted)] opacity-50 select-none text-right flex flex-col gap-0.5 border-r border-[var(--vscode-border)] pr-2 w-6">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            
            {/* Raw code content with custom color mappings */}
            <div className="flex-grow flex flex-col gap-0.5 whitespace-pre font-mono">
              <span className="text-[#4FC9B0] font-bold"># Motinath R - Learning Journey</span>
              <span></span>
              <span className="text-[#6A9955]">{"/**"}</span>
              <span className="text-[#6A9955]">{" * \"ECE engineer. Photographer. Gamer. Filmmaker. "}</span>
              <span className="text-[#6A9955]">{" * Basketball player. Marketer. Builder. All of it.\""}</span>
              <span className="text-[#6A9955]">{" */"}</span>
              <span></span>
              <span className="text-[#CE9178]">## 1. Electronics & Communications (ECE)</span>
              <span>* <span className="text-[#569CD6]">Status:</span> ECE Graduate (2022-2026)</span>
              <span>* <span className="text-[#569CD6]">Core:</span> Microcontrollers & circuit signal pathways</span>
              <span>* <span className="text-[#569CD6]">Stack:</span> Embedded C, ESP32, MATLAB, Logic Gates</span>
              <span></span>
              <span className="text-[#CE9178]">## 2. 3D Creative & Visual Art</span>
              <span>* <span className="text-[#569CD6]">Status:</span> Active Explorer (2024-2025)</span>
              <span>* <span className="text-[#569CD6]">Core:</span> Blender 3D modeling & render environments</span>
              <span>* <span className="text-[#569CD6]">Stack:</span> Shaders, lighting setups, After Effects</span>
              <span></span>
              <span className="text-[#CE9178]">## 3. Filmmaking & Video Production</span>
              <span>* <span className="text-[#569CD6]">Status:</span> On-Field Director (2023-2024)</span>
              <span>* <span className="text-[#569CD6]">Core:</span> Cinematography & video editing</span>
              <span>* <span className="text-[#569CD6]">Stack:</span> Premiere Pro, DaVinci Resolve color grading</span>
              <span></span>
              <span className="text-[#CE9178]">## 4. Full-Stack Web Development</span>
              <span>* <span className="text-[#569CD6]">Status:</span> Active Builder (2025-Present)</span>
              <span>* <span className="text-[#569CD6]">Core:</span> Interactive web layouts & state models</span>
              <span>* <span className="text-[#569CD6]">Stack:</span> React, TypeScript, Tailwind CSS, Vite</span>
              <span></span>
              <span className="text-[#CE9178]">## 5. Athletic Focus & Strategy</span>
              <span>* <span className="text-[#569CD6]">Status:</span> Competitive Basketball Player</span>
              <span>* <span className="text-[#569CD6]">Core:</span> Leadership & defensive court coordinates</span>
              <span>* <span className="text-[#569CD6]">Stack:</span> Teamwork, quick reflexes, physical fitness</span>
            </div>
          </div>
        </div>

        {/* Right Panel: Beautiful Markdown Preview */}
        <div className="w-full md:w-1/2 bg-[var(--vscode-editor-bg)] overflow-y-auto p-6 sm:p-10 select-none scrollbar-thin flex flex-col gap-6 text-left relative">
          
          {/* Subtle starry backdrop grid */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />
          
          <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col gap-5">
            {/* Header info */}
            <FadeIn delay={0.05} y={20} className="border-b border-[var(--vscode-border)] pb-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--vscode-text)] tracking-tight flex items-center gap-2">
                <Sparkles className="w-5.5 h-5.5 text-[#007ACC]" />
                <span>Learning & Diversity Journey</span>
              </h2>
              <p className="text-[11px] text-[var(--vscode-text-muted)] font-mono mt-1 select-text">
                {"/** motinath.md - A catalog of explored domains & skills */"}
              </p>
            </FadeIn>

            {/* Diversity Fields Grid */}
            <div className="flex flex-col gap-4">
              {[
                {
                  id: "ece",
                  title: "Electronics & Communication (ECE)",
                  core: "Microcontrollers, circuitry signal setups, logic gates mapping.",
                  period: "ECE GRADUATE",
                  icon: <Cpu className="w-5 h-5 text-purple-400" />,
                  nodeColor: "border-purple-500/50 bg-purple-500/5",
                  badges: ["Embedded C", "ESP32", "Circuits", "MATLAB"]
                },
                {
                  id: "3d",
                  title: "3D Art & Visual Assets Design",
                  core: "Blender rendering, lighting configs, photorealistic textures.",
                  period: "3D CREATIVE",
                  icon: <Palette className="w-5 h-5 text-emerald-400" />,
                  nodeColor: "border-emerald-500/50 bg-emerald-500/5",
                  badges: ["Blender 3D", "After Effects", "Photoshop", "Figma"]
                },
                {
                  id: "film",
                  title: "Filmmaking & Color Grading",
                  core: "Cinematography shots composition, DaVinci Resolve grading.",
                  period: "DIRECTING",
                  icon: <Film className="w-5 h-5 text-red-400" />,
                  nodeColor: "border-red-500/50 bg-red-500/5",
                  badges: ["Premiere Pro", "DaVinci", "Lighting", "Pacing"]
                },
                {
                  id: "dev",
                  title: "Full-Stack Web Coding",
                  core: "Engineering highly responsive interactive web panels.",
                  period: "CODING / DEV",
                  icon: <Code2 className="w-5 h-5 text-blue-400" />,
                  nodeColor: "border-blue-500/50 bg-blue-500/5",
                  badges: ["React", "TypeScript", "Tailwind CSS", "Vite"]
                },
                {
                  id: "hoops",
                  title: "Basketball & Court Leadership",
                  core: "Playing competitive matches, quick team tactical coordination.",
                  period: "ATHLETICS",
                  icon: <Trophy className="w-5 h-5 text-amber-400" />,
                  nodeColor: "border-amber-500/50 bg-amber-500/5",
                  badges: ["Teamwork", "Reflexes", "Defensive Tactics", "Fitness"]
                }
              ].map((field, idx) => (
                <FadeIn 
                  key={field.id} 
                  delay={0.1 + idx * 0.04} 
                  y={20}
                  className="flex gap-4 p-4 rounded-xl border border-[var(--vscode-border)] bg-[var(--vscode-tab-inactive-bg)]/25 hover:bg-[var(--vscode-tab-inactive-bg)]/50 hover:border-[#007ACC]/50 transition-all duration-300 group"
                >
                  {/* Icon Column */}
                  <div className={`w-9 h-9 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${field.nodeColor}`}>
                    {field.icon}
                  </div>
                  
                  {/* Details column */}
                  <div className="flex-grow select-text min-w-0">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="font-bold text-xs sm:text-sm text-[var(--vscode-text)] truncate">{field.title}</h4>
                      <span className="text-[9px] font-mono font-bold bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded flex-shrink-0">
                        {field.period}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[var(--vscode-text-muted)] leading-relaxed mb-3">{field.core}</p>
                    
                    {/* Tiny Badges */}
                    <div className="flex flex-wrap gap-1">
                      {field.badges.map((badge, bIdx) => (
                        <span 
                          key={bIdx}
                          className="bg-[var(--vscode-editor-bg)] text-[9px] text-[#4EC9B0] font-mono px-1.5 py-0.2 rounded border border-[var(--vscode-border)] select-none"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Bottom personal quote footer */}
            <FadeIn delay={0.35} y={10} className="mt-2 text-center select-text">
              <p className="text-[11px] font-mono text-[var(--vscode-text-muted)] italic">
                "Learning is a continuous timeline. Exploring all of it."
              </p>
            </FadeIn>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Story;
