import { Lightbulb, Users2, Brain, Blend } from 'lucide-react';

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Bioinformatics Research",
      description: "Developed a bioinformatics mini-project for computational drug discovery, focusing on Lipinski descriptors and molecular fingerprints."
    },
    {
      icon: Users2,
      title: "Student Innovation Advocacy",
      description: "Advocated for student innovation and collaboration through leadership roles and hackathon organization."
    },
    {
      icon: Lightbulb,
      title: "AI & ML Systems Interest",
      description: "Strong interest in agentic AI, RAG (Retrieval-Augmented Generation), and applied ML systems."
    },
    {
      icon: Blend,
      title: "Interdisciplinary Approach",
      description: "Blend of technical engineering knowledge, research mindset, and creative problem-solving, making me adaptable across AI, software, and design-driven roles."
    }
  ];

  return (
    <section id="highlights" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-12 text-center">
            Beyond Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title}
                className="bg-card border border-border rounded-lg p-8 shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="font-headline text-xl font-semibold mb-4">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;