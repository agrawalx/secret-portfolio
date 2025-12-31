const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yash Agrawal. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground font-mono">
          Built with <span className="text-primary">cryptographic precision</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
