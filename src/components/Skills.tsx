import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './ReusableComponents';
import { cn } from '../lib/utils';
import { ChevronDown, Code2 } from 'lucide-react';

// Custom inline SVGs for logos not present on SimpleIcons
// Custom inline SVGs for logos not present on SimpleIcons or as offline fallbacks
const IIScLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" fill="none" stroke="#D4AF37" strokeWidth="6" />
    <circle cx="50" cy="50" r="34" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4,2" />
    <text x="50" y="58" textAnchor="middle" fontSize="22" fontWeight="900" fontFamily="sans-serif" fill="#D4AF37" letterSpacing="0.5">IISc</text>
  </svg>
);

const MavenSiliconLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" fill="none" stroke="#0284C7" strokeWidth="6" />
    <path d="M 25 70 L 25 35 L 50 55 L 75 35 L 75 70" fill="none" stroke="#0284C7" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="25" cy="35" r="4.5" fill="#0284C7" />
    <circle cx="50" cy="55" r="4.5" fill="#0284C7" />
    <circle cx="75" cy="35" r="4.5" fill="#0284C7" />
  </svg>
);

const AIAgentsLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" fill="#7C3AED" />
    <circle cx="50" cy="50" r="12" fill="none" stroke="#FFF" strokeWidth="6" />
    <path d="M 50 18 L 50 82 M 18 50 L 82 50" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
    <circle cx="50" cy="18" r="5" fill="#FFF" />
    <circle cx="50" cy="82" r="5" fill="#FFF" />
    <circle cx="18" cy="50" r="5" fill="#FFF" />
    <circle cx="82" cy="50" r="5" fill="#FFF" />
  </svg>
);

const AntigravityLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="antiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="42" fill="none" stroke="url(#antiGrad)" strokeWidth="6" />
    <circle cx="50" cy="40" r="16" fill="url(#antiGrad)" />
    <path d="M 25 75 Q 50 65 75 75" fill="none" stroke="url(#antiGrad)" strokeWidth="4" strokeLinecap="round" />
    <path d="M 35 85 Q 50 78 65 85" fill="none" stroke="url(#antiGrad)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const GazeboLogo = () => (
  <svg viewBox="0 0 128 128" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path fill="var(--vscode-text)" d="m14.428 38.099.651 54.711 47.547 28.335 2.28-26.38S91.612 78.48 89.657 77.179c-1.952-1.302-75.23-39.08-75.23-39.08z" opacity="0.15" />
    <path fill="currentColor" d="m60.493 68.22 1.61 1a3.591 3.591 0 0 0 1.892.539c.658 0 1.315-.18 1.894-.542l1.614-1.005 16.37 10.139-21.857 13.61a3.58 3.58 0 0 0-1.69 3.051l.065 22.308L20.904 92.8ZM17.565 41.564 53.697 64 17.565 86.436Zm99.814 22.365a3.583 3.583 0 0 0-5.48-3.032L90.662 74.12l-16.37-10.136 41.483-25.83a3.587 3.587 0 0 0 1.69-3.048 3.586 3.586 0 0 0-1.697-3.042L65.882 1.175a3.583 3.583 0 0 0-3.778.003L12.218 32.154a3.584 3.584 0 0 0-1.693 3.045V92.8a3.585 3.585 0 0 0 1.693 3.046l49.886 30.976c.024.013.05.024.075.039.026.015.05.034.077.05.058.031.117.054.175.082.06.03.117.06.177.083.093.04.188.073.283.102.056.02.111.04.168.056.107.03.215.05.324.068.047.006.093.02.14.026.156.021.314.034.471.034h.001c.326 0 .653-.045.97-.137h.004a2.92 2.92 0 0 0 .36-.13c.036-.013.074-.023.11-.038.098-.043.192-.098.288-.152.052-.03.106-.053.158-.083l.002-.002.002-.002.095-.06 49.787-30.912a3.585 3.585 0 0 0 1.693-3.057l-.085-28.86" />
    <path fill="var(--vscode-text)" d="m67.501 96.99.059 20.355 42.73-26.534-.06-20.43L67.5 96.989" opacity="0.3" />
    <path fill="#f58113" d="m20.904 35.199 43.09 26.755 43.091-26.833L63.998 8.44 20.904 35.198"/>
  </svg>
);

const QiskitLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="qGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#D946EF" />
        <stop offset="100%" stopColor="#6D28D9" />
      </radialGradient>
    </defs>
    <path d="M 50 50 A 10 10 0 0 1 60 60 A 20 20 0 0 1 40 70 A 30 30 0 0 1 70 30 A 40 40 0 0 1 10 50" fill="none" stroke="url(#qGrad)" strokeWidth="8" strokeLinecap="round" />
    <circle cx="50" cy="50" r="8" fill="#FFF" />
  </svg>
);

const OpenAILogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M 35 45 C 20 45 20 25 35 25 C 40 25 45 30 50 35 C 55 30 60 25 65 25 C 80 25 80 45 65 45 C 65 60 55 75 50 75 C 45 75 35 60 35 45 Z" fill="none" stroke="#22D3EE" strokeWidth="6" strokeLinecap="round" />
    <circle cx="35" cy="45" r="4" fill="#22D3EE" />
    <circle cx="50" cy="35" r="4" fill="#22D3EE" />
    <circle cx="65" cy="45" r="4" fill="#22D3EE" />
    <circle cx="50" cy="75" r="4" fill="#22D3EE" />
    <line x1="35" y1="45" x2="50" y2="35" stroke="#22D3EE" strokeWidth="2" />
    <line x1="65" y1="45" x2="50" y2="35" stroke="#22D3EE" strokeWidth="2" />
    <line x1="35" y1="45" x2="50" y2="75" stroke="#22D3EE" strokeWidth="2" />
    <line x1="65" y1="45" x2="50" y2="75" stroke="#22D3EE" strokeWidth="2" />
  </svg>
);

const JavaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="none" stroke="#F89820" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 65 C30 75, 70 75, 70 65 L 65 35 L 35 35 Z" fill="#5382A1" opacity="0.2" />
    <path d="M30 65 C30 75, 70 75, 70 65 L 65 35 L 35 35 Z" />
    <path d="M70 42 C80 42, 80 52, 70 52" />
    <path d="M42 25 Q45 15 42 5" stroke="#E22726" strokeWidth="4" />
    <path d="M52 25 Q55 15 52 5" stroke="#E22726" strokeWidth="4" />
    <path d="M25 80 C25 85, 75 85, 75 80" />
  </svg>
);

const CLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" x="20" y="20" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="6" />
    <path d="M 30 10 L 30 20 M 50 10 L 50 20 M 70 10 L 70 20 M 30 80 L 30 90 M 50 80 L 50 90 M 70 80 L 70 90 M 10 30 L 20 30 M 10 50 L 20 50 M 10 70 L 20 70 M 80 30 L 90 30 M 80 50 L 90 50 M 80 70 L 90 70" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" />
    <text x="50" y="58" textAnchor="middle" fontSize="24" fontWeight="bold" fontFamily="sans-serif" fill="#38BDF8">C</text>
  </svg>
);

const CadenceLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="90" x="5" y="5" rx="16" fill="#E31B23" />
    <path d="M 70 50 C 70 30, 30 30, 30 50 C 30 70, 70 70, 70 50 L 52 50 C 52 58, 48 58, 48 50 C 48 42, 52 42, 52 50 Z" fill="#FFF" />
  </svg>
);

const SynopsysLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="synopsysGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A154B" />
        <stop offset="50%" stopColor="#9E1F63" />
        <stop offset="100%" stopColor="#FF385C" />
      </linearGradient>
    </defs>
    <rect width="90" height="90" x="5" y="5" rx="16" fill="url(#synopsysGrad)" />
    <text x="50" y="64" textAnchor="middle" fontSize="38" fontWeight="bold" fontFamily="'Inter', 'Segoe UI', sans-serif" fill="#FFF">S</text>
  </svg>
);

const MultisimLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" fill="#00A859" />
    <circle cx="50" cy="50" r="28" fill="none" stroke="#FFF" strokeWidth="8" />
    <path d="M 35 50 L 65 50 M 50 35 L 50 65" stroke="#FFF" strokeWidth="10" strokeLinecap="round" />
  </svg>
);

const AutoCADLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="90" x="5" y="5" rx="16" fill="#E31B23" />
    <path d="M 25 75 L 50 18 L 75 75 M 32 60 L 68 60" fill="none" stroke="#FFF" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MatlabLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="matlabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EA580C" />
        <stop offset="100%" stopColor="#F97316" />
      </linearGradient>
    </defs>
    <path d="M 10 75 Q 30 40 50 20 Q 70 40 90 75 Z" fill="url(#matlabGrad)" />
    <path d="M 30 75 Q 50 50 70 75" fill="none" stroke="#FFF" strokeWidth="4" />
    <path d="M 50 20 L 50 75" fill="none" stroke="#FFF" strokeWidth="4" />
  </svg>
);

const CSSLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="none" stroke="#1572B6" strokeWidth="6" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 15 L 80 15 L 73 75 L 50 85 L 27 75 Z" fill="#1572B6" opacity="0.15" />
    <path d="M 20 15 L 80 15 L 73 75 L 50 85 L 27 75 Z" />
    <path d="M 35 35 L 65 35 L 62 55 L 50 60 L 38 55" />
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="90" x="5" y="5" rx="16" fill="#1E1E1E" />
    <circle cx="40" cy="30" r="12" fill="#F24E1E" />
    <circle cx="60" cy="30" r="12" fill="#FF7262" />
    <circle cx="40" cy="50" r="12" fill="#A259FF" />
    <circle cx="60" cy="50" r="12" fill="#1ABC9C" />
    <path d="M 40 62 A 12 12 0 0 0 52 74 L 52 62 Z" fill="#18A0FB" />
  </svg>
);

const FramerLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 10 L 80 10 L 80 40 L 50 40 L 80 70 L 50 70 L 20 40 L 50 40 Z" />
  </svg>
);

const WindowsLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="#0078D4" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 17 L 46 22 L 46 48 L 10 48 Z" />
    <path d="M 52 21 L 90 16 L 90 48 L 52 48 Z" />
    <path d="M 10 52 L 46 52 L 46 78 L 10 83 Z" />
    <path d="M 52 52 L 90 52 L 90 84 L 52 79 Z" />
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="#FF9900" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 40 Q 50 30 80 40 L 80 50 Q 50 40 20 50 Z" />
    <path d="M 20 60 Q 50 75 80 60" fill="none" stroke="#FF9900" strokeWidth="8" strokeLinecap="round" />
    <path d="M 75 50 L 85 62 L 85 45 Z" />
  </svg>
);

const VSCodeLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="#007ACC" xmlns="http://www.w3.org/2000/svg">
    <path d="M 15 25 L 45 5 L 85 20 L 85 80 L 45 95 L 15 75 Z" opacity="0.15" />
    <path d="M 20 30 L 80 75 L 80 25 L 20 70 L 45 50 Z" fill="none" stroke="#007ACC" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AnthropicLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="90" x="5" y="5" rx="16" fill="#191919" />
    <text x="50" y="64" textAnchor="middle" fontSize="42" fontWeight="bold" fontFamily="'Inter', 'Segoe UI', sans-serif" fill="#E0B883">A</text>
  </svg>
);

const CanvaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" fill="#00C4CC" />
    <text x="50" y="64" textAnchor="middle" fontSize="42" fontWeight="900" fontFamily="sans-serif" fill="#FFF">C</text>
  </svg>
);

const AdobePhotoshopLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="90" x="5" y="5" rx="16" fill="#001E36" stroke="#00C8FF" strokeWidth="6" />
    <text x="50" y="64" textAnchor="middle" fontSize="38" fontWeight="bold" fontFamily="'Inter', 'Segoe UI', sans-serif" fill="#00C8FF">Ps</text>
  </svg>
);

const AdobeExpressLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ccGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF385C" />
        <stop offset="50%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    <path d="M 30 50 C 15 35 15 65 30 50 Q 50 30 70 50 C 85 65 85 35 70 50 Z" fill="none" stroke="url(#ccGrad)" strokeWidth="12" strokeLinecap="round" />
  </svg>
);

const CapCutLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="90" x="5" y="5" rx="16" fill="#000" />
    <path d="M 30 30 L 50 30 L 50 70 L 30 70 M 70 30 L 50 30 L 50 70 L 70 70" fill="none" stroke="#FFF" strokeWidth="10" strokeLinecap="round" />
  </svg>
);

const AdobePremiereProLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="90" x="5" y="5" rx="16" fill="#1C002C" stroke="#EA77FF" strokeWidth="6" />
    <text x="50" y="64" textAnchor="middle" fontSize="38" fontWeight="bold" fontFamily="'Inter', 'Segoe UI', sans-serif" fill="#EA77FF">Pr</text>
  </svg>
);

const GoogleSearchConsoleLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="90" x="5" y="5" rx="16" fill="#FFF" stroke="#4285F4" strokeWidth="4" />
    <path d="M 20 70 L 40 45 L 60 55 L 80 30" fill="none" stroke="#34A853" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <text x="50" y="68" textAnchor="middle" fontSize="38" fontWeight="bold" fontFamily="sans-serif" fill="#EA4335">G</text>
  </svg>
);

const OracleLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="42" ry="25" fill="none" stroke="#F80000" strokeWidth="12" />
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 10 C 30 10 30 25 30 35 L 30 45 L 50 45 L 50 50 L 25 50 C 15 50 15 70 25 80 L 35 80 Q 50 80 50 70 L 50 60 L 70 60 Q 85 60 85 45 C 85 30 75 10 50 10 Z" fill="#3776AB" opacity="0.3" />
    <path d="M 50 90 C 70 90 70 75 70 65 L 70 55 L 50 55 L 50 50 L 75 50 C 85 50 85 30 75 20 L 65 20 Q 50 20 50 30 L 50 40 L 30 40 Q 15 40 15 55 C 15 70 25 90 50 90 Z" fill="#FFE873" opacity="0.3" />
    <text x="50" y="58" textAnchor="middle" fontSize="30" fontWeight="900" fontFamily="sans-serif" fill="#FFE873">Py</text>
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0 animate-spin-slow" fill="none" stroke="#61DAFB" strokeWidth="6" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(90 50 50)" />
    <ellipse cx="50" cy="50" rx="15" ry="40" transform="rotate(150 50 50)" />
    <circle cx="50" cy="50" r="6" fill="#61DAFB" />
  </svg>
);

const HTMLLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="none" stroke="#E34F26" strokeWidth="6" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 15 L 80 15 L 73 75 L 50 85 L 27 75 Z" fill="#E34F26" opacity="0.15" />
    <path d="M 20 15 L 80 15 L 73 75 L 50 85 L 27 75 Z" />
    <path d="M 35 35 L 65 35 L 60 55 L 50 60 L 40 55" />
  </svg>
);

const JavascriptLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="90" x="5" y="5" rx="16" fill="#F7DF1E" />
    <text x="70" y="75" textAnchor="middle" fontSize="42" fontWeight="900" fontFamily="sans-serif" fill="#000">JS</text>
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="none" stroke="#F05032" strokeWidth="6" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="60" x="20" y="20" rx="8" transform="rotate(45 50 50)" />
    <circle cx="50" cy="35" r="6" fill="#F05032" />
    <circle cx="50" cy="65" r="6" fill="#F05032" />
    <circle cx="65" cy="50" r="6" fill="#F05032" />
    <line x1="50" y1="35" x2="50" y2="65" />
    <line x1="50" y1="50" x2="65" y2="50" />
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5C25.1 5 5 25.1 5 50c0 19.9 12.9 36.8 30.8 42.8 2.3.4 3.1-1 3.1-2.2v-7.7c-12.5 2.7-15.1-6-15.1-6-2-5.2-5-6.6-5-6.6-4.1-2.8.3-2.7.3-2.7 4.5.3 6.9 4.6 6.9 4.6 4 6.9 10.6 4.9 13.2 3.8.4-2.9 1.6-4.9 2.9-6-10-1.1-20.5-5-20.5-22.3 0-4.9 1.8-9 4.7-12.1-.5-1.1-2-5.7.4-11.9 0 0 3.8-1.2 12.4 4.6 3.6-1 7.5-1.5 11.3-1.5s7.7.5 11.3 1.5c8.6-5.9 12.4-4.6 12.4-4.6 2.5 6.2 1 10.8.4 11.9 3 3.1 4.7 7.2 4.7 12.1 0 17.3-10.5 21.1-20.5 22.2 1.6 1.4 3.1 4.2 3.1 8.5v12.7c0 1.2.8 2.6 3.1 2.2C87.1 86.8 100 69.9 100 50 100 25.1 79.9 5 50 5z" />
  </svg>
);

const LinuxLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" fill="none" stroke="#FCC624" strokeWidth="6" />
    <text x="50" y="62" textAnchor="middle" fontSize="30" fontWeight="900" fontFamily="sans-serif" fill="#FCC624">Tux</text>
  </svg>
);

const ROSLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="42" fill="none" stroke="#22314E" strokeWidth="6" />
    <circle cx="35" cy="50" r="8" fill="#22314E" />
    <circle cx="50" cy="50" r="8" fill="#22314E" />
    <circle cx="65" cy="50" r="8" fill="#22314E" />
  </svg>
);

const GoogleAnalyticsLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="none" stroke="#E37400" strokeWidth="6" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M 25 80 L 25 60 M 50 80 L 50 40 M 75 80 L 75 20" />
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="none" stroke="#FF7A59" strokeWidth="6" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="55" r="20" />
    <line x1="50" y1="35" x2="50" y2="15" />
    <circle cx="50" cy="15" r="6" fill="#FF7A59" />
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="none" stroke="#0081FB" strokeWidth="6" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M 25 50 Q 37 35 50 50 Q 63 65 75 50 Q 87 35 75 20 Q 63 35 50 50 Q 37 65 25 50 Q 13 35 25 20 Z" />
  </svg>
);

const ArduinoLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="none" stroke="#00979C" strokeWidth="6" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="50" r="18" />
    <circle cx="65" cy="50" r="18" />
    <text x="35" y="55" textAnchor="middle" fill="#00979C" fontSize="16" fontWeight="bold">+</text>
    <text x="65" y="55" textAnchor="middle" fill="#00979C" fontSize="16" fontWeight="bold">-</text>
  </svg>
);


const GIMPLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5.5 h-5.5 flex-shrink-0" fill="none" stroke="#A78BFA" strokeWidth="6" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 60 C 20 40, 40 20, 60 20 C 80 20, 80 40, 60 60 Z" />
    <circle cx="35" cy="45" r="4" fill="#A78BFA" />
    <circle cx="50" cy="35" r="4" fill="#A78BFA" />
    <circle cx="65" cy="45" r="4" fill="#A78BFA" />
  </svg>
);

interface Skill {
  name: string;
  iconType: 'simple' | 'custom';
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: 'Quantum Computing',
    skills: [
      { name: 'IBM Qiskit Metal', iconType: 'custom', icon: 'qiskit' },
    ],
  },
  {
    title: 'Artificial Intelligence',
    skills: [
      { name: 'Generative AI', iconType: 'custom', icon: 'openai' },
      { name: 'AI Agents', iconType: 'custom', icon: 'aiagents' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', iconType: 'custom', icon: 'python' },
      { name: 'Java', iconType: 'custom', icon: 'java' },
      { name: 'Embedded C', iconType: 'custom', icon: 'c' },
    ],
  },
  {
    title: 'Electronic Design Automation (EDA)',
    skills: [
      { name: 'Cadence Virtuoso', iconType: 'custom', icon: 'cadence' },
      { name: 'Synopsys', iconType: 'custom', icon: 'synopsys' },
    ],
  },
  {
    title: 'Circuit Simulation',
    skills: [
      { name: 'Multisim', iconType: 'custom', icon: 'multisim' },
    ],
  },
  {
    title: 'Computer-Aided Design (CAD)',
    skills: [
      { name: 'AutoCAD', iconType: 'custom', icon: 'autocad' },
    ],
  },
  {
    title: 'Modeling & Simulation',
    skills: [
      { name: 'MATLAB Simulink', iconType: 'custom', icon: 'matlab' },
    ],
  },
  {
    title: 'Embedded Systems',
    skills: [
      { name: 'Arduino IDE', iconType: 'custom', icon: 'arduino' },
    ],
  },
  {
    title: 'Robotics',
    skills: [
      { name: 'ROS2', iconType: 'custom', icon: 'ros' },
      { name: 'Gazebo', iconType: 'custom', icon: 'gazebo' },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', iconType: 'custom', icon: 'html5' },
      { name: 'CSS', iconType: 'custom', icon: 'css' },
      { name: 'Javascript', iconType: 'custom', icon: 'javascript' },
      { name: 'React.js', iconType: 'custom', icon: 'react' },
    ],
  },
  {
    title: 'UI/UX Design',
    skills: [
      { name: 'Figma', iconType: 'custom', icon: 'figma' },
      { name: 'Framer', iconType: 'custom', icon: 'framer' },
    ],
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', iconType: 'custom', icon: 'git' },
      { name: 'GitHub', iconType: 'custom', icon: 'github' },
    ],
  },
  {
    title: 'Operating Systems',
    skills: [
      { name: 'Windows', iconType: 'custom', icon: 'windows' },
      { name: 'Ubuntu', iconType: 'custom', icon: 'ubuntu' },
      { name: 'Linux', iconType: 'custom', icon: 'linux' },
    ],
  },
  {
    title: 'Cloud',
    skills: [
      { name: 'AWS', iconType: 'custom', icon: 'aws' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', iconType: 'custom', icon: 'vscode' },
      { name: 'Antigravity', iconType: 'custom', icon: 'antigravity' },
      { name: 'Cursor', iconType: 'simple', icon: 'cursor' },
      { name: 'Claude Code', iconType: 'custom', icon: 'anthropic' },
      { name: 'Codex', iconType: 'custom', icon: 'openai' },
    ],
  },
  {
    title: 'Graphic Design & Editing',
    skills: [
      { name: 'Canva', iconType: 'custom', icon: 'canva' },
      { name: 'Adobe Photoshop', iconType: 'custom', icon: 'adobephotoshop' },
      { name: 'Adobe Express', iconType: 'custom', icon: 'adobeexpress' },
      { name: 'GIMP', iconType: 'custom', icon: 'gimp' },
      { name: 'CapCut', iconType: 'custom', icon: 'capcut' },
      { name: 'Adobe Premiere Pro', iconType: 'custom', icon: 'adobepremierepro' },
    ],
  },
  {
    title: 'Digital Marketing',
    skills: [
      { name: 'Google Search Console', iconType: 'custom', icon: 'googlesearchconsole' },
      { name: 'Google Analytics', iconType: 'custom', icon: 'googleanalytics' },
      { name: 'HubSpot', iconType: 'custom', icon: 'hubspot' },
      { name: 'Meta Ads Manager', iconType: 'custom', icon: 'meta' },
    ],
  },
  {
    title: 'Certifications',
    skills: [
      { name: 'Oracle Cloud Infrastructure 2025 Generative AI Professional', iconType: 'custom', icon: 'oracle' },
      { name: 'Oracle Fusion Cloud Applications ERP Process Essentials Certified – Rel 1', iconType: 'custom', icon: 'oracle' },
      { name: 'India Semiconductor Workforce Development Program - IISc', iconType: 'custom', icon: 'iisc' },
      { name: 'Foundation Course on Embedded System Design - Maven Silicon', iconType: 'custom', icon: 'maven' },
    ],
  },
];

const getIconUrl = (slug: string, theme: 'light' | 'dark') => {
  if (slug === 'nextdotjs' || slug === 'github') {
    return `https://cdn.simpleicons.org/${slug}/${theme === 'dark' ? 'fff' : '000'}`;
  }
  return `https://cdn.simpleicons.org/${slug}`;
};

function SkillCard({ skill }: { skill: Skill }) {
  const [imgError, setImgError] = useState(false);
  const isLightTheme = typeof document !== 'undefined' && document.documentElement.classList.contains('theme-github-light');
  const theme = isLightTheme ? 'light' : 'dark';

  const renderIcon = () => {
    const showCustom = skill.iconType === 'custom' || imgError;

    if (showCustom) {
      if (skill.icon === 'iisc') return <IIScLogo />;
      if (skill.icon === 'maven') return <MavenSiliconLogo />;
      if (skill.icon === 'aiagents') return <AIAgentsLogo />;
      if (skill.icon === 'antigravity') return <AntigravityLogo />;
      if (skill.icon === 'gazebo') return <GazeboLogo />;
      if (skill.icon === 'qiskit') return <QiskitLogo />;
      if (skill.icon === 'openai') return <OpenAILogo />;
      if (skill.icon === 'java') return <JavaLogo />;
      if (skill.icon === 'c') return <CLogo />;
      if (skill.icon === 'cadence') return <CadenceLogo />;
      if (skill.icon === 'synopsys') return <SynopsysLogo />;
      if (skill.icon === 'multisim') return <MultisimLogo />;
      if (skill.icon === 'autocad') return <AutoCADLogo />;
      if (skill.icon === 'matlab') return <MatlabLogo />;
      if (skill.icon === 'css3' || skill.icon === 'css') return <CSSLogo />;
      if (skill.icon === 'figma') return <FigmaLogo />;
      if (skill.icon === 'framer') return <FramerLogo />;
      if (skill.icon === 'windows') return <WindowsLogo />;
      if (skill.icon === 'amazonaws' || skill.icon === 'aws') return <AWSLogo />;
      if (skill.icon === 'visualstudiocode' || skill.icon === 'vscode') return <VSCodeLogo />;
      if (skill.icon === 'anthropic') return <AnthropicLogo />;
      if (skill.icon === 'canva') return <CanvaLogo />;
      if (skill.icon === 'adobephotoshop') return <AdobePhotoshopLogo />;
      if (skill.icon === 'adobeexpress') return <AdobeExpressLogo />;
      if (skill.icon === 'capcut') return <CapCutLogo />;
      if (skill.icon === 'adobepremierepro') return <AdobePremiereProLogo />;
      if (skill.icon === 'googlesearchconsole') return <GoogleSearchConsoleLogo />;
      if (skill.icon === 'oracle') return <OracleLogo />;
      if (skill.icon === 'python') return <PythonLogo />;
      if (skill.icon === 'react') return <ReactLogo />;
      if (skill.icon === 'html5') return <HTMLLogo />;
      if (skill.icon === 'javascript') return <JavascriptLogo />;
      if (skill.icon === 'git') return <GitLogo />;
      if (skill.icon === 'github') return <GitHubLogo />;
      if (skill.icon === 'linux' || skill.icon === 'ubuntu') return <LinuxLogo />;
      if (skill.icon === 'ros') return <ROSLogo />;
      if (skill.icon === 'googleanalytics') return <GoogleAnalyticsLogo />;
      if (skill.icon === 'hubspot') return <HubSpotLogo />;
      if (skill.icon === 'meta') return <MetaLogo />;
      if (skill.icon === 'arduino') return <ArduinoLogo />;
      if (skill.icon === 'gimp') return <GIMPLogo />;
    }

    if (skill.iconType === 'simple' && !imgError) {
      const iconUrl = getIconUrl(skill.icon, theme);
      return (
        <img
          src={iconUrl}
          alt={`${skill.name} icon`}
          className="w-5.5 h-5.5 object-contain filter transition-all duration-300 group-hover:scale-105"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      );
    }

    return <Code2 className="w-5.5 h-5.5 text-blue-400" />;
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group select-none",
        "bg-[var(--vscode-tab-inactive-bg)]/80 border border-[var(--vscode-border)]",
        "hover:border-[var(--vscode-tab-active-border)]/55 hover:bg-[var(--vscode-editor-bg)]/90 hover:-translate-y-[1px]"
      )}
    >
      <div className="flex items-center justify-center w-6 h-6 flex-shrink-0 select-none">
        {renderIcon()}
      </div>
      <span className="font-sans font-semibold text-[11px] sm:text-xs text-[var(--vscode-text)] select-none whitespace-normal break-words leading-snug">
        {skill.name}
      </span>
    </div>
  );
}

interface AccordionItemProps {
  category: SkillCategory;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ category, isExpanded, onToggle, index }: AccordionItemProps) {
  return (
    <FadeIn delay={0.02 + index * 0.02} y={15}>
      <div className="border border-[var(--vscode-border)] rounded-xl overflow-hidden bg-[var(--vscode-tab-inactive-bg)]/25 transition-all duration-300 mb-3">
        {/* Header Button */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between py-2.5 px-4 text-left transition-colors duration-200 hover:bg-[var(--vscode-tab-inactive-bg)]/35"
        >
          <div className="flex items-center gap-2 select-none">
            <ChevronDown
              className={cn(
                "w-4 h-4 text-[var(--vscode-text-muted)] transition-transform duration-300 ease-in-out",
                !isExpanded && "-rotate-90"
              )}
            />
            <h3 className="font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider text-[var(--vscode-text)]">
              {category.title}
            </h3>
          </div>
          <span className="text-xs text-[var(--vscode-text-muted)] font-mono select-none">
            {category.skills.length} skills
          </span>
        </button>

        {/* Content Wrapper */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="p-4 pt-0 border-t border-[var(--vscode-border)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
                  {category.skills.map((skill, sIndex) => (
                    <SkillCard key={sIndex} skill={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export function Skills() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'Quantum Computing': true,
    'Artificial Intelligence': true,
    'Programming Languages': true,
    'Electronic Design Automation (EDA)': true,
    'Circuit Simulation': true,
    'Computer-Aided Design (CAD)': true,
    'Modeling & Simulation': true,
    'Embedded Systems': true,
    'Robotics': true,
    'Frontend Development': true,
    'UI/UX Design': true,
    'Version Control': true,
    'Operating Systems': true,
    'Cloud': true,
    'Tools': true,
    'Graphic Design & Editing': true,
    'Digital Marketing': true,
    'Certifications': true,
  });

  const toggleCategory = (title: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="min-h-full w-full bg-transparent text-[var(--vscode-text)] p-6 sm:p-10 md:p-16 flex flex-col font-sans select-none animate-fadeIn relative">
      
      {/* Decorative starry blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none z-0" />

      <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 relative z-10">
        
        {/* Page Header */}
        <FadeIn delay={0.05} y={20} className="border-b border-[var(--vscode-border)] pb-4 mb-6">
          <div className="flex items-center gap-2 mb-1 select-none">
            <span className="text-[var(--vscode-text-muted)] text-3xl font-extralight select-none">|</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--vscode-text)] tracking-tight uppercase">
              Skills
            </h1>
          </div>
          <p className="text-xs text-[var(--vscode-text-muted)] mt-1 font-sans font-medium">
            Technologies and tools I work with.
          </p>
        </FadeIn>

        {/* ACCORDION CATEGORIES */}
        <div className="flex flex-col">
          {CATEGORIES.map((category, index) => (
            <AccordionItem
              key={index}
              category={category}
              isExpanded={!!openCategories[category.title]}
              onToggle={() => toggleCategory(category.title)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
