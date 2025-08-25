import { Code, Database, Palette, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Frameworks",
      skills: ["Python", "HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "Flask"]
    },
    {
      icon: Database,
      title: "Data & Tools",
      skills: ["Streamlit", "PowerBI", "Docker", "Firebase", "Git & GitHub"]
    },
    {
      icon: Palette,
      title: "Design & Prototyping",
      skills: ["Figma", "UX Research", "Wireframing"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Leadership", "Public Speaking", "Problem-Solving", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-12 text-center">
            My Toolbox
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  
                  <h3 className="font-headline text-xl font-semibold mb-4 text-foreground">
                    {category.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;