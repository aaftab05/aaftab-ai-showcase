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
          <h1 className="font-headline text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Aaftab Zohra
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl font-medium mb-8 text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            I am an aspiring Artificial Intelligence and Machine Learning engineer with a strong foundation in software development, data science, and user-centered design. As a student leader and active contributor to technical forums, I bring a balance of technical expertise, creativity, and leadership.
          </p>
          
          {/* Microcopy */}
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey has been shaped by hands-on projects, hackathon experiences, and leadership roles where I successfully managed teams, built scalable solutions, and mentored peers. I am passionate about exploring the intersection of AI, cloud technologies, and design thinking to create impactful and accessible solutions.
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="group bg-gradient-secondary hover:shadow-medium transition-all duration-300 text-lg px-8 py-6 font-semibold"
              asChild
            >
              <a 
                href="/assets/resume/AaftabZohra_Resume_2025.pdf" 
                download="AaftabZohra_Resume_2025.pdf"
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