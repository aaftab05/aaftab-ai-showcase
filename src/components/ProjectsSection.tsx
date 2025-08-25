import { Brain, MessageCircle, FileText, Ticket, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      icon: Brain,
      title: "Bioactivity Prediction (Drug Discovery – ML)",
      description: "Built a bioactivity prediction model using chemical descriptors to identify potential acetylcholinesterase inhibitors (Alzheimer's drug candidates). Preprocessed datasets, engineered features, and evaluated regression models for accuracy.",
      tags: ["Machine Learning", "Drug Discovery", "Python", "Data Science"]
    },
    {
      icon: MessageCircle,
      title: "Twitter Hashtag Analysis (NLP)",
      description: "Conducted sentiment and trend analysis using Python, pandas, and matplotlib. Designed dashboards to visualize insights from real-time social media data.",
      tags: ["NLP", "Python", "Data Visualization", "Social Media"]
    },
    {
      icon: FileText,
      title: "DocuMorph AI – Intelligent Document Transformation Engine",
      description: "Developed an AI-powered web app (React + Gemini API) to transform raw text into structured, publication-ready .docx documents. Implemented semantic parsing, template-based rendering, and a clean, interactive UI.",
      tags: ["AI", "React", "Gemini API", "Document Processing"]
    },
    {
      icon: Ticket,
      title: "Virtual Ticketing System (Streamlit + Firebase)",
      description: "Built a scalable ticket booking system with secure authentication, booking logic, and responsive design. Focused on reusable code and error handling.",
      tags: ["Streamlit", "Firebase", "Authentication", "Full-Stack"]
    },
    {
      icon: Smartphone,
      title: "Food Review App Prototype (Figma)",
      description: "Designed a mobile-first app UI with accessibility features and potential WordPress integration. Applied design thinking principles to improve usability.",
      tags: ["UI/UX Design", "Figma", "Mobile Design", "Accessibility"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-12 text-center">
            Showcase
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-secondary/30 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="font-headline text-xl font-semibold leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-sm rounded-full border border-secondary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;