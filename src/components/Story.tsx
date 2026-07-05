import { BookOpen } from 'lucide-react';
import { FadeIn } from './ReusableComponents';

export function Story() {
  return (
    <div className="min-h-full w-full bg-transparent text-[var(--vscode-text)] flex flex-col font-sans select-none animate-fadeIn h-[calc(100vh-114px)] overflow-hidden">

      {/* Top Sub-Header (mimicking Markdown preview tab) */}
      <div className="flex items-center justify-between h-[30px] bg-[var(--vscode-tabs-bg)] border-b border-[var(--vscode-border)] px-4 select-none text-[11px] text-[var(--vscode-text-muted)] font-mono flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          <span>src &gt; Hobbies &gt; Story.md &gt; Preview</span>
        </div>
      </div>

      {/* Editor Panel */}
      <div className="flex-grow flex flex-row h-full overflow-hidden">

        {/* Main Panel: Beautiful Markdown Preview */}
        <div className="w-full bg-[var(--vscode-editor-bg)] overflow-y-auto p-6 sm:p-10 select-none scrollbar-thin flex flex-col text-left relative">

          {/* Subtle starry backdrop grid */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />

          <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col gap-4 text-[var(--vscode-text)] font-sans leading-relaxed text-sm sm:text-base select-text">
            <FadeIn delay={0.05} y={10}>
              <p>
                Engineer by degree, creator by passion, developer by craft, and storyteller at heart.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} y={10}>
              <p>
                I blend electronics with software, creativity with logic, and design with technology to build meaningful digital experiences.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} y={10}>
              <p>
                Beyond engineering, you'll find me exploring cinematic worlds, immersive games, and the ideas that inspire the next project.
              </p>
            </FadeIn>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Story;
