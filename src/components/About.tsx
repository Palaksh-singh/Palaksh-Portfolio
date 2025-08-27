const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto neon-glow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am <span className="text-primary font-semibold">Palaksh Kumar</span>, a passionate and dedicated web developer who loves turning ideas into functional and visually appealing digital experiences. My journey in technology started with a curiosity for how the web works, which grew into a strong skillset in both frontend and backend development.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over time, I have developed the ability to design and build websites that are modern, responsive, scalable, and user-focused. Alongside my development skills, I have gained hands-on experience in <span className="text-accent font-semibold">Data Structures and Algorithms (DSA)</span> using Java at an intermediate level.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              This background has sharpened my problem-solving, logical thinking, and coding efficiency, enabling me to approach challenges systematically and craft optimized solutions.
            </p>
          </div>

          <div className="bg-card/50 p-8 rounded-2xl border border-primary/20 neon-glow">
            <h3 className="font-orbitron text-xl font-bold text-foreground mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary">B.Tech in Computer Science and Engineering</h4>
                <p className="text-accent">Specialization: Artificial Intelligence and Machine Learning</p>
                <p className="text-muted-foreground">VIT-AP University</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: 2027</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-primary/20">
              <p className="text-muted-foreground">
                This academic journey fuels my interest in bridging web technologies with AI-driven innovations, an area I plan to explore deeply in the coming years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;