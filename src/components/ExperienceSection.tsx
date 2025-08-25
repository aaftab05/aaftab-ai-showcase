import { Briefcase, Trophy, GraduationCap } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-12 text-center">
            Journey So Far
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Experience */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h3 className="font-headline text-2xl font-semibold">Experience</h3>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
                <h4 className="font-semibold text-lg mb-2">Intern – EZ-TS</h4>
                <p className="text-secondary font-medium mb-3">May 2024</p>
                <p className="text-muted-foreground leading-relaxed">
                  Designed and deployed a ticket booking platform using Python, Streamlit, and Firebase. Enhanced authentication flows, implemented error-handling, and optimized UI for responsiveness.
                </p>
              </div>
            </div>

            {/* Hackathons */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h3 className="font-headline text-2xl font-semibold">Competitions</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4 shadow-soft">
                  <h4 className="font-semibold">Ideathon Finalist (2024)</h4>
                  <p className="text-muted-foreground text-sm">Presented blockchain-based secure communication solution.</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4 shadow-soft">
                  <h4 className="font-semibold">Hackfest-02 Finalist</h4>
                  <p className="text-muted-foreground text-sm">Built a prototype addressing real-world challenges using AI.</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4 shadow-soft">
                  <h4 className="font-semibold">IEEE x MathWorks Challenge</h4>
                  <p className="text-secondary font-medium text-sm">2nd Place</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h3 className="font-headline text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4 shadow-soft">
                  <h4 className="font-semibold">B.E. AI & ML, BITM</h4>
                  <p className="text-muted-foreground text-sm">2022–2026</p>
                  <p className="text-secondary font-medium text-sm">CGPA: 8.62</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4 shadow-soft">
                  <h4 className="font-semibold">Sri Chaitanya PU College</h4>
                  <p className="text-muted-foreground text-sm">2020–2022</p>
                  <p className="text-secondary font-medium text-sm">88%</p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-4 shadow-soft">
                  <h4 className="font-semibold">St. Philomena's School</h4>
                  <p className="text-muted-foreground text-sm">2020</p>
                  <p className="text-secondary font-medium text-sm">93%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;