const skills = [
  { name: 'Rust', category: 'language' },
  { name: 'Noir', category: 'zk' },
  { name: 'Solidity', category: 'blockchain' },
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'ethers.js', category: 'blockchain' },
  { name: 'Foundry', category: 'blockchain' },
  { name: 'WASM', category: 'systems' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div>
            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
              About
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Building the <span className="gradient-text">future</span> of privacy
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Systems Engineer with a deep passion for cryptography and zero-knowledge proofs. 
                Currently pursuing Chemical Engineering at IIT Roorkee, I've dedicated my focus to 
                building secure, decentralized systems that push the boundaries of what's possible.
              </p>
              <p>
                My work spans from low-level protocol development in Rust to implementing 
                cutting-edge ZK circuits with Noir. I believe in building systems that are not 
                just functional, but mathematically provable and cryptographically secure.
              </p>
              <p>
                When I'm not writing code, you'll find me researching new cryptographic 
                primitives, contributing to open-source projects, or exploring the intersection 
                of game theory and mechanism design.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="glass-card p-8">
            <h4 className="text-sm font-mono text-primary mb-6 tracking-wider uppercase">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${skill.category === 'zk' 
                      ? 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20' 
                      : skill.category === 'blockchain'
                      ? 'bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20'
                      : 'bg-muted text-muted-foreground border border-border hover:bg-muted/80'
                    }
                  `}
                >
                  {skill.name}
                </span>
              ))}
            </div>
            
            {/* Education */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
                Education
              </h4>
              <div>
                <p className="font-medium text-foreground">IIT Roorkee</p>
                <p className="text-sm text-muted-foreground">B.Tech Chemical Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
