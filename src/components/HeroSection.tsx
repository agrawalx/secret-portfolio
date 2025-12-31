import { Github, Twitter, Linkedin, Mail, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card text-sm font-mono text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Systems Engineer
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">Yash</span>{' '}
          <span className="gradient-text">Agrawal</span>
        </h1>

        {/* Focus areas */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light">
          <span className="text-primary">Cryptography</span>
          <span className="mx-3 text-border">•</span>
          <span className="text-secondary">Zero-Knowledge Proofs</span>
          <span className="mx-3 text-border">•</span>
          <span className="text-foreground/70">Distributed Systems</span>
        </p>

        {/* Description */}
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Building secure, scalable infrastructure for the decentralized future. 
          Specializing in ZK circuits, protocol design, and high-performance systems.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/agrawalx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card hover-glow transition-all duration-300 hover:scale-105"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://x.com/_KxrMa_G"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card hover-glow transition-all duration-300 hover:scale-105"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-agrawal-774ab3267/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card hover-glow transition-all duration-300 hover:scale-105"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="mailto:yasha4658@gmail.com"
            className="p-3 glass-card hover-glow transition-all duration-300 hover:scale-105"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
