import { Download, ArrowDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 pointer-events-none" />
      
      {/* Profile Photo - Top Right Corner */}
      <div className="absolute top-8 right-8 z-20 animate-fade-in">
        <div className="relative">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-soft">
            <img 
              src="/lovable-uploads/9ac55337-56aa-49ff-b325-d1268e92d2cf.png" 
              alt="Aaftab Zohra"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating animation dots */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-full animate-float"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Name */}
          <h1 className="font-handwritten text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg">
              Aaftab Zohra
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl font-medium mb-12 text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            🌱 Always Learning | 🚀 Always Building | 🎨 Turning Code into Stories
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="group bg-gradient-secondary hover:shadow-medium transition-all duration-300 text-lg px-8 py-6 font-semibold"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1AcBs0-eAXvzxK5trZWe0vSItG3VSxx7f/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="group border-2 border-primary/20 hover:border-secondary hover:bg-secondary/10 transition-all duration-300 text-lg px-8 py-6"
            >
              <span className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                Let's Connect
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float no-print">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;