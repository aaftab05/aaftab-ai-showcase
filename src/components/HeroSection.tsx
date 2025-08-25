import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Name */}
          <h1 className="font-handwritten text-6xl md:text-8xl font-bold mb-12 tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Aaftab Zohra
            </span>
          </h1>
          
          
          {/* CTA Button */}
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
              onClick={scrollToNext}
              className="group border-2 border-primary/20 hover:border-secondary hover:bg-secondary/10 transition-all duration-300 text-lg px-8 py-6"
            >
              <span className="flex items-center gap-3">
                Learn More
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
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