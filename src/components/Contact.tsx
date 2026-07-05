import React from 'react';
import { Mail, Linkedin, Github, Instagram, ExternalLink, MapPin, FileText } from 'lucide-react';
import { FadeIn } from './ReusableComponents';

interface ContactChannel {
  name: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  actionText: string;
}

const CHANNELS: ContactChannel[] = [
  {
    name: 'LinkedIn',
    description: '',
    icon: <Linkedin className="w-5 h-5 text-blue-400" />,
    url: 'https://www.linkedin.com/in/motinath/',
    actionText: 'Connect'
  },
  {
    name: 'GitHub',
    description: '',
    icon: <Github className="w-5 h-5 text-[#f0f6fc]" />,
    url: 'https://github.com/motinath',
    actionText: 'Follow'
  },
  {
    name: 'Instagram',
    description: '',
    icon: <Instagram className="w-5 h-5 text-pink-400" />,
    url: 'https://www.instagram.com/motinath_/',
    actionText: 'DM / View'
  },
  {
    name: 'Email',
    description: 'motinath.rajendran@gmail.com',
    icon: <Mail className="w-5 h-5 text-emerald-400" />,
    url: 'mailto:motinath.rajendran@gmail.com',
    actionText: 'Write Mail'
  },
  {
    name: 'Resume',
    description: '',
    icon: <FileText className="w-5 h-5 text-amber-400" />,
    url: '/resume.pdf',
    actionText: 'View CV'
  }
];

export function Contact() {
  const handleAction = (url: string) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-full w-full bg-[var(--vscode-editor-bg)] text-[var(--vscode-text)] p-6 sm:p-10 flex flex-col justify-between font-sans select-none animate-fadeIn relative overflow-x-hidden">

      {/* Top Section */}
      <div className="flex-grow">
        {/* Page Header */}
        <FadeIn delay={0.1} y={20} className="border-b border-[var(--vscode-border)] pb-4 mb-8">
          <div className="flex items-center gap-2 mb-1 select-none">
            <span className="text-[var(--vscode-text-muted)]/30 text-3xl font-extralight">|</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--vscode-text)] tracking-tight uppercase">
              Get in Touch
            </h1>
          </div>
          <p className="text-xs text-[var(--vscode-text-muted)] mt-1 font-mono">Have a question or want to work together? Reach out anytime.</p>
        </FadeIn>

        {/* Channels Section */}
        <div className="max-w-3xl z-10 relative">
          <FadeIn delay={0.2} y={20} className="mb-6 select-none border-b border-[var(--vscode-border)] pb-2">
            <h2 className="text-sm font-semibold text-[var(--vscode-text)] font-mono uppercase tracking-wider">
              Connect / DM
            </h2>
          </FadeIn>

          <p className="text-xs text-[var(--vscode-text-muted)] mb-6 font-sans leading-relaxed">
            The fastest way to reach me is a direct message via LinkedIn or Email. I usually reply within a few hours.
          </p>

          {/* Connect Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CHANNELS.map((channel, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.05} y={15}>
                <div
                  onClick={() => handleAction(channel.url)}
                  className="flex items-center justify-between p-4 bg-[var(--vscode-tab-inactive-bg)] border border-[var(--vscode-border)] rounded-xl hover:border-[#007ACC]/50 hover:bg-[var(--vscode-border)]/50 transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[var(--vscode-editor-bg)] rounded-lg">
                      {channel.icon}
                    </div>
                    <div className="text-left leading-snug">
                      <h3 className="text-sm font-bold text-[var(--vscode-text)] group-hover:text-blue-400 transition-colors">
                        {channel.name}
                      </h3>
                      <p className="text-[10px] text-[var(--vscode-text-muted)] font-sans mt-0.5 max-w-[170px] truncate">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[var(--vscode-text-muted)] group-hover:text-[var(--vscode-text)] transition-colors">
                    <span>{channel.actionText}</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info Block */}
      <div className="mt-16 border-t border-[var(--vscode-border)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[var(--vscode-text-muted)] w-full">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-blue-500" />
          <span>Tamil Nadu, India</span>
        </div>
        <div>
          © {new Date().getFullYear()} Motinath R. Built with code & cameras.
        </div>
      </div>

    </div>
  );
}

export default Contact;
