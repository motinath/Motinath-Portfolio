import { ExternalLink, Flame } from 'lucide-react';
import { FadeIn } from './ReusableComponents';
import gamesData from '../data/games.json';

interface Game {
  id: string;
  title: string;
  year: string;
  developer: string;
  genre: string;
  completed: boolean;
  poster: string;
  url: string;
}

// High-fidelity custom SVG logos for gaming accounts
const SteamIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#1b2838] dark:text-[#c7d5e0]">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.07 14.38c-.28 0-.53-.11-.72-.3L7.73 13.6c-.19-.19-.3-.44-.3-.72 0-.56.45-1.01 1.01-1.01.28 0 .53.11.72.3l2.48 2.48c.19.19.3.44.3.72 0 .56-.45 1.01-1.01 1.01zm3.82-3.15l-1.92-1.92.53-.53c.89-.89.89-2.33 0-3.22a2.27 2.27 0 00-3.22 0c-.89.89-.89 2.33 0 3.22l.53.53-1.92 1.92c-.3-.11-.63-.17-.97-.17-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5c0-.34-.06-.67-.17-.97l1.92-1.92.53.53c.44.44.97.66 1.5.66.53 0 1.06-.22 1.5-.66.82-.82.82-2.18 0-3zm-5.75 3.77c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
  </svg>
);

const XboxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#107c10]">
    <path d="M11.62 20.48c-.64.08-1.22.12-1.62.12-4.14 0-7.5-3.36-7.5-7.5 0-3.07 1.84-5.7 4.51-6.84C6.54 7.6 6 9.68 6 12c0 3.32 1.08 6.38 2.92 8.87l2.7-4.39zm9.39-6.38c0 4.14-3.36 7.5-7.5 7.5-.4 0-.98-.04-1.62-.12l2.7-4.39 2.7 4.39C19.13 18.99 21.01 15.68 21.01 12c0-2.32-.54-4.4-1.01-5.74 2.67 1.14 4.51 3.77 4.51 6.84zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.62 10.12l-1.62 2.62-1.62-2.62 1.62-2.62z" />
  </svg>
);

const EpicIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#313131] dark:text-[#f5f5f5]">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18.25c-3.45 0-6.25-2.8-6.25-6.25S8.55 7.75 12 7.75s6.25 2.8 6.25 6.25-2.8 6.25-6.25 6.25zm.5-9.25h-1v4h1v-4z" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#5865F2]">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.093 13.093 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
  </svg>
);

const BackloggdIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#8f55fd]">
    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm8 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 1.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
  </svg>
);

export function Gaming() {
  const gamesList: Game[] = gamesData;

  return (
    <div className="min-h-full w-full bg-transparent text-[var(--vscode-text)] p-6 sm:p-10 md:p-16 flex flex-col font-sans select-none animate-fadeIn relative">
      
      {/* Decorative blueprint backdrop */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 relative z-10">
        
        {/* Page Header */}
        <FadeIn delay={0.05} y={20} className="border-b border-[var(--vscode-border)] pb-4 mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1 select-none">
              <span className="text-[var(--vscode-text-muted)] text-3xl font-extralight select-none">|</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--vscode-text)] tracking-tight uppercase">
                Gaming Journey
              </h1>
            </div>
            <p className="text-xs text-[var(--vscode-text-muted)] font-sans font-medium">
              Story-mode campaigns, tactical shooters, and simulations I've played.
            </p>
          </div>
        </FadeIn>

        {/* Gaming Connection Badges Grid */}
        <FadeIn delay={0.08} y={15} className="mb-6">
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--vscode-text-muted)] font-mono text-left">
              Connect Gaming Hubs
            </span>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://backloggd.com/u/motinath/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--vscode-tab-inactive-bg)]/80 hover:bg-[var(--vscode-tab-inactive-bg)] border border-[var(--vscode-border)] hover:border-[#007ACC]/55 text-xs text-[var(--vscode-text)] font-semibold transition-all group"
              >
                <BackloggdIcon />
                <span>Backloggd: <strong className="text-[#8f55fd] group-hover:text-white">@motinath</strong></span>
                <ExternalLink className="w-3 h-3 text-[var(--vscode-text-muted)]" />
              </a>

              <a 
                href="https://steamcommunity.com/id/motinath_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--vscode-tab-inactive-bg)]/80 hover:bg-[var(--vscode-tab-inactive-bg)] border border-[var(--vscode-border)] hover:border-[#007ACC]/55 text-xs text-[var(--vscode-text)] font-semibold transition-all group"
              >
                <SteamIcon />
                <span>Steam: <strong className="text-[#107c10]/0 dark:text-[#c7d5e0] group-hover:text-white">@motinath_</strong></span>
                <ExternalLink className="w-3 h-3 text-[var(--vscode-text-muted)]" />
              </a>

              <a 
                href="https://xboxgamertag.com/search/motinath_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--vscode-tab-inactive-bg)]/80 hover:bg-[var(--vscode-tab-inactive-bg)] border border-[var(--vscode-border)] hover:border-[#007ACC]/55 text-xs text-[var(--vscode-text)] font-semibold transition-all group"
              >
                <XboxIcon />
                <span>Xbox: <strong className="text-[#107c10] group-hover:text-white">@motinath_</strong></span>
                <ExternalLink className="w-3 h-3 text-[var(--vscode-text-muted)]" />
              </a>

              <a 
                href="https://store.epicgames.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--vscode-tab-inactive-bg)]/80 hover:bg-[var(--vscode-tab-inactive-bg)] border border-[var(--vscode-border)] hover:border-[#007ACC]/55 text-xs text-[var(--vscode-text)] font-semibold transition-all group"
              >
                <EpicIcon />
                <span>Epic: <strong className="text-[var(--vscode-text)] group-hover:text-white">@motinath_</strong></span>
                <ExternalLink className="w-3 h-3 text-[var(--vscode-text-muted)]" />
              </a>

              <a 
                href="https://discord.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--vscode-tab-inactive-bg)]/80 hover:bg-[var(--vscode-tab-inactive-bg)] border border-[var(--vscode-border)] hover:border-[#007ACC]/55 text-xs text-[var(--vscode-text)] font-semibold transition-all group"
              >
                <DiscordIcon />
                <span>Discord: <strong className="text-[#5865F2] group-hover:text-white">@motinath_</strong></span>
                <ExternalLink className="w-3 h-3 text-[var(--vscode-text-muted)]" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Game Posters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 pb-10">
          {gamesList.map((game, idx) => (
            <FadeIn 
              key={game.id} 
              delay={0.12 + idx * 0.03} 
              y={25}
              className="group relative overflow-hidden rounded-xl border border-[var(--vscode-border)] hover:border-[#007ACC]/55 bg-[var(--vscode-tab-inactive-bg)]/35 transition-all duration-300 shadow-md hover:-translate-y-1 select-none"
            >
              <a 
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[2/3] overflow-hidden cursor-pointer"
              >
                {/* Poster Image */}
                <img 
                  src={game.poster} 
                  alt={game.title} 
                  loading="lazy" 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100" 
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12]/95 via-[#0c0d12]/20 to-transparent" />

                {/* Game Details - Hover state (No star ratings) */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0c0d12]/70 select-none">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono font-bold bg-[#00e054]/10 text-[#00e054] px-2 py-0.5 rounded border border-[#00e054]/25">
                      {game.year}
                    </span>
                    {game.completed && (
                      <span className="flex items-center gap-1 text-[9px] font-mono text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/25">
                        <Flame className="w-3 h-3 fill-current" />
                        Completed
                      </span>
                    )}
                  </div>

                  <div className="text-left">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-blue-400 font-bold block mb-1">
                      {game.genre}
                    </span>
                    <h3 className="text-sm font-bold text-white tracking-wide leading-tight">{game.title}</h3>
                    <p className="text-[10px] text-[var(--vscode-text-muted)] truncate mt-0.5">{game.developer}</p>
                  </div>
                </div>

                {/* Static details (shown if not hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5 group-hover:opacity-0 transition-opacity duration-300 text-left select-none pointer-events-none">
                  <h3 className="text-xs font-bold text-white truncate leading-snug">{game.title}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[10px] text-[var(--vscode-text-muted)] font-mono">{game.year}</span>
                    <span className="text-[9px] font-mono opacity-50 text-[var(--vscode-text-muted)]">{game.genre.split(' / ')[0]}</span>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}

          {/* View More Card */}
          <FadeIn
            delay={0.12 + gamesList.length * 0.03}
            y={25}
            className="group relative overflow-hidden rounded-xl border border-dashed border-[var(--vscode-border)] hover:border-[#007ACC]/55 bg-[var(--vscode-tab-inactive-bg)]/10 hover:bg-[var(--vscode-tab-inactive-bg)]/20 transition-all duration-300 shadow-md hover:-translate-y-1 select-none flex items-center justify-center aspect-[2/3]"
          >
            <a
              href="https://backloggd.com/u/motinath/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 text-center w-full h-full cursor-pointer"
            >
              <div className="flex items-center justify-center select-none flex-shrink-0 mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#8f55fd]/10 border border-[#8f55fd]/30 flex items-center justify-center shadow-[0_0_15px_rgba(143,85,253,0.35)]">
                  <BackloggdIcon />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#007ACC] transition-colors">View More</h3>
              <p className="text-[10px] text-[var(--vscode-text-muted)] max-w-[120px] leading-relaxed">
                Explore my entire game backlog and reviews on Backloggd
              </p>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--vscode-text-muted)] group-hover:text-white mt-4 transition-colors" />
            </a>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}

export default Gaming;
