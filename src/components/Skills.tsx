const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      icon: "🎨",
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express"],
      icon: "⚙️",
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL"],
      icon: "🗃️",
    },
    {
      title: "Programming Languages",
      skills: ["Java (DSA intermediate)", "Python (basic)", "C", "C++"],
      icon: "👨‍💻",
    },
  ];

  const coreStrengths = [
    "Problem-solving",
    "Clean code practices", 
    "Responsive design",
    "Scalability",
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto neon-glow mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I have worked with a wide range of tools, technologies, and programming languages, 
            allowing me to take ideas from design to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card/50 p-8 rounded-2xl border border-primary/20 neon-glow hover:neon-glow-hover transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className="font-orbitron text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card/50 p-8 rounded-2xl border border-primary/20 neon-glow">
          <h3 className="font-orbitron text-2xl font-bold text-center text-foreground mb-8">
            Core Strengths
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreStrengths.map((strength, index) => (
              <div
                key={strength}
                className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20 hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-all duration-300">
                  <div className="w-8 h-8 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {strength}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;