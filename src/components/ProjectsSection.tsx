import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  highlight?: boolean;
}

const projects: Project[] = [
  {
    title: 'Orbital AMM',
    description: 'Spherical AMM implementation based on the Paradigm whitepaper, built on Arbitrum Stylus for enhanced performance and lower gas costs.',
    tech: ['Rust', 'Arbitrum Stylus', 'Solidity'],
    highlight: true,
  },
  {
    title: 'Deimos',
    description: 'ZK benchmarking platform designed for mobile devices, enabling performance testing of zero-knowledge proof generation on constrained hardware.',
    tech: ['Noir', 'Rust', 'Mobile'],
    highlight: true,
  },
  {
    title: 'On-chain Game Engine',
    description: 'Fully on-chain game with WASM-based game engine on Polkadot, featuring physics calculations executed directly on the blockchain.',
    tech: ['Rust', 'WASM', 'Polkadot', 'ink!'],
  },
  {
    title: 'InheritChain',
    description: 'Decentralized cross-chain inheritance protocol enabling secure, trustless transfer of digital assets across multiple blockchain networks.',
    tech: ['Solidity', 'Cross-chain', 'Smart Contracts'],
  },
  {
    title: 'LeadPool',
    description: 'Copy-trading protocol leveraging Zircuit GUD router for optimized trade execution and seamless cross-pool liquidity.',
    tech: ['Solidity', 'DeFi', 'Zircuit'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Building <span className="gradient-text">cryptographic</span> systems
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`
                glass-card p-6 hover-glow transition-all duration-300 hover:-translate-y-1
                ${project.highlight ? 'lg:col-span-1 md:col-span-1' : ''}
                ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              `}
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h4>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${project.title} Live Link`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-muted/50 text-muted-foreground rounded-md border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note about links */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          Project links coming soon — reach out for demos and repositories
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
