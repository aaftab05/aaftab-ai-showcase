import { Award, Users, Mic, ExternalLink } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Users,
      title: "General Secretary",
      description: "AIML Department Forum (2023–2024)"
    },
    {
      icon: Users,
      title: "Technical Ambassador",
      description: "AIML Department Forum (2025–present)"
    },
    {
      icon: Users,
      title: "Secretary",
      description: "IEEE Student Branch"
    },
    {
      icon: Award,
      title: "2nd Place",
      description: "Business Plan Competition"
    },
    {
      icon: Award,
      title: "4th Place",
      description: "Technical Poster Presentation"
    },
    {
      icon: Mic,
      title: "Podcast Host",
      description: "Spotify Podcast on technology and self-help, sharing insights on growth and learning."
    }
  ];

  const certifications = [
    {
      title: "Google Cloud Professional: Generative AI",
      link: "https://drive.google.com/file/d/1wGKmY-KcogrT4YqXDj6II9WorawCV4Fq/view?usp=drive_link"
    },
    {
      title: "AWS Cloud Practitioner",
      link: "https://drive.google.com/file/d/136uqRHSGMsrf9A0D7M0VP6GpVWs6GnF9/view?usp=drive_link"
    },
    {
      title: "Innovascape: Prototype Design with Figma",
      link: "https://drive.google.com/file/d/1mgyrBDSSMGoUynZtOfiMhrrA_xZfb4EN/view?usp=drive_link"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-12 text-center">
            Milestones & Badges
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Achievements & Leadership */}
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-8 text-center lg:text-left">
                Achievements & Leadership
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.title}
                    className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="w-5 h-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-8 text-center lg:text-left">
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.title}
                    className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 group animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-lg">{cert.title}</h4>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground text-xs rounded-full border border-secondary/20">
                            Credly
                          </span>
                        </div>
                      </div>
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        aria-label={`View ${cert.title} certificate`}
                      >
                        <ExternalLink className="w-5 h-5 text-secondary-foreground" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;