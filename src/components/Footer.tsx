import { Linkedin, Github, Music, Feather, Cpu, Sparkles } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/aaftabzohra",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/aaftab05",
      label: "GitHub"
    },
    {
      icon: Music,
      href: "https://open.spotify.com/show/422kquu9xU0LGWvdayTK00?si=3tDcm57AQL640y142L4nbA",
      label: "Spotify Podcast"
    }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/50 mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-4 w-8 h-8">
          <Cpu className="w-full h-full text-primary animate-pulse" />
        </div>
        <div className="absolute top-8 right-8 w-6 h-6">
          <Sparkles className="w-full h-full text-secondary animate-float" />
        </div>
        <div className="absolute bottom-4 left-1/4 w-4 h-4">
          <Feather className="w-full h-full text-primary/50 animate-pulse" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col items-center space-y-6">
          {/* Decorative Divider */}
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full border border-border/30 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </a>
            ))}
          </div>
          
          {/* Personal Signature */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-lg font-handwritten text-foreground/80">
              <Feather className="w-4 h-4 text-secondary" />
              <span>Crafted with Passion</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Aaftab Zohra • Turning Dreams into Digital Reality
            </p>
          </div>
          
          {/* AI Pattern Decoration */}
          <div className="flex items-center gap-1 opacity-20">
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-1 bg-secondary rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse animation-delay-400"></div>
            <div className="w-3 h-1 bg-secondary rounded-full animate-pulse animation-delay-600"></div>
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse animation-delay-800"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;