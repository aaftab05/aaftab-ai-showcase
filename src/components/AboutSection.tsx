const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-12 text-center">
            Who I Am
          </h2>
          
          <div className="prose prose-lg max-w-none text-center">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-soft">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                I am an aspiring Artificial Intelligence and Machine Learning engineer with a strong foundation in software development, data science, and user-centered design. As a student leader and active contributor to technical forums, I bring a balance of technical expertise, creativity, and leadership.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                My journey has been shaped by hands-on projects, hackathon experiences, and leadership roles where I successfully managed teams, built scalable solutions, and mentored peers. I am passionate about exploring the intersection of AI, cloud technologies, and design thinking to create impactful and accessible solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;