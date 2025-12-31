import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/agrawalx',
    description: 'Check out my code',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://x.com/_KxrMa_G',
    description: 'Follow my updates',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/yash-agrawal-774ab3267/',
    description: 'Connect professionally',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:yasha4658@gmail.com',
    description: 'yasha4658@gmail.com',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">connect</span>
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Interested in collaborating on cryptography, ZK systems, or distributed infrastructure? 
            I'm always open to discussing new ideas and opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="glass-card p-6 hover-glow transition-all duration-300 hover:-translate-y-1 group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <social.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{social.name}</h4>
                  <p className="text-sm text-muted-foreground">{social.description}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
