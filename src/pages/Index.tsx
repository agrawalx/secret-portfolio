import { Helmet } from 'react-helmet-async';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Yash Agrawal | Systems Engineer - ZK & Cryptography</title>
        <meta 
          name="description" 
          content="Systems Engineer specializing in cryptography, zero-knowledge proofs, and distributed systems. Building secure infrastructure for the decentralized future." 
        />
        <meta name="keywords" content="Yash Agrawal, Systems Engineer, Cryptography, Zero-Knowledge Proofs, ZK, Rust, Solidity, Blockchain" />
      </Helmet>

      <AnimatedBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
