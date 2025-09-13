import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Send, Download } from "lucide-react";
import heroProfileImage from "@/assets/profile-new.jpg";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Create floating particles
    const createParticles = () => {
      const profileWrapper = document.querySelector('.profile-wrapper');
      if (!profileWrapper) return;

      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle absolute rounded-full pointer-events-none z-10';
        
        const size = Math.random() * 8 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 6 + 4;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity.toString();
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        particle.style.animation = `float ${Math.random() * 10 + 5}s infinite ease-in-out`;
        
        profileWrapper.appendChild(particle);
      }
    };

    const timer = setTimeout(createParticles, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            {/* Main Hero Text */}
            <div className="space-y-4">
              <div className="overflow-hidden">
                <h1 className="font-orbitron text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none animate-fade-in">
                  <span className="block text-gradient hover:scale-105 transition-transform duration-500 cursor-default">
                    PALAKSH
                  </span>
                  <span className="block text-gradient hover:scale-105 transition-transform duration-500 cursor-default" style={{ animationDelay: '0.2s' }}>
                    KUMAR
                  </span>
                </h1>
              </div>
              
              <div className="space-y-2">
                <div className="overflow-hidden">
                  <p className="font-orbitron text-lg md:text-xl lg:text-2xl text-accent font-medium animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    Full Stack Developer & AI Enthusiast
                  </p>
                </div>
                <div className="overflow-hidden">
                  <p className="font-orbitron text-base md:text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    Crafting Digital Experiences • Building Tomorrow's Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Message */}
            <div className="overflow-hidden">
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
                Transforming ideas into powerful web applications with modern technologies, 
                machine learning expertise, and a passion for clean, scalable code.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("projects")}
                className="group relative bg-primary text-primary-foreground font-bold text-lg px-8 py-6 neon-glow hover:neon-glow-hover transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  View Projects
                </div>
              </Button>
              
              <Button
                onClick={() => window.open("https://drive.google.com/file/d/10Y4L29FK7vpGNIfpoyDxJZ4heXAY66aq/view?usp=sharing", "_blank")}
                className="group relative bg-secondary text-secondary-foreground font-bold text-lg px-8 py-6 neon-glow hover:neon-glow-hover transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Resume
                </div>
              </Button>
              
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group relative border-2 border-primary text-primary bg-transparent font-semibold text-lg px-8 py-6 neon-glow hover:bg-primary hover:text-primary-foreground transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12"></div>
                <div className="relative flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Contact Me
                </div>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative profile-wrapper w-80 h-80 lg:w-[450px] lg:h-[450px] floating-animation">
              <img
                src={heroProfileImage}
                alt="Palaksh Kumar - Web Developer"
                className="w-full h-full object-cover border-4 border-transparent glow-animation morph-animation relative z-20"
                style={{
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  boxShadow: "var(--shadow-glow)",
                }}
              />
              <div
                className="absolute w-[110%] h-[110%] -top-[5%] -left-[5%] rounded-full opacity-30 blur-[60px] z-10 pulse-animation"
                style={{ background: "hsl(var(--neon-red))" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
