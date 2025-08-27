const WhatIOffer = () => {
  const offerings = [
    {
      title: "Web Development",
      description: "Building responsive, modern websites that work seamlessly across all devices and browsers.",
      icon: "🌐",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization"]
    },
    {
      title: "Backend Solutions", 
      description: "Creating scalable backend systems that power your applications with reliability and efficiency.",
      icon: "⚡",
      features: ["API Development", "Database Design", "Server Architecture"]
    },
    {
      title: "Problem Solving",
      description: "Applying DSA knowledge and logical thinking to solve complex technical challenges.",
      icon: "🧠",
      features: ["Algorithm Optimization", "Code Efficiency", "System Design"]
    },
    {
      title: "AI/ML Integration",
      description: "Bridging web technologies with AI-driven innovations for cutting-edge solutions.",
      icon: "🤖",
      features: ["Machine Learning", "Data Processing", "Intelligent Systems"]
    }
  ];

  return (
    <section id="what-i-offer" className="py-20 lg:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            What I Offer
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto neon-glow mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I bring to the table a combination of technical expertise, creativity, and problem-solving ability. 
            Whether it's developing a responsive website, creating a scalable backend, or working on innovative 
            AI-ML integrations, my goal is always to deliver solutions that are efficient, reliable, and impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={offering.title}
              className="group bg-card/50 p-8 rounded-2xl border border-primary/20 neon-glow hover:neon-glow-hover transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {offering.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-orbitron text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {offering.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                {offering.features.map((feature, featureIndex) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-3 text-sm"
                    style={{ animationDelay: `${featureIndex * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20 neon-glow">
            <h3 className="font-orbitron text-2xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with innovative, efficient, and impactful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="px-6 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full font-medium">
                Efficient Solutions
              </span>
              <span className="px-6 py-2 bg-accent/20 text-accent border border-accent/30 rounded-full font-medium">
                Reliable Delivery
              </span>
              <span className="px-6 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full font-medium">
                Impactful Results
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIOffer;