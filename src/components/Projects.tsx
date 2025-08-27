import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Clock } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto neon-glow mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am in the process of curating and uploading my projects, which will showcase my expertise 
            in both academic and personal work.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[400px] bg-card/20 rounded-3xl border border-primary/20 neon-glow">
          <div className="text-center max-w-2xl mx-auto p-8">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Clock className="w-12 h-12 text-primary" />
            </div>
            
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-6">
              Projects Coming Soon
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              These projects will demonstrate my ability to solve real-world problems, 
              build interactive web applications, and work across the full development stack. 
              Each project will showcase different aspects of my technical expertise and creative problem-solving.
            </p>
            
            <div className="space-y-4 text-left bg-card/50 p-6 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-primary mb-3">What to expect:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Responsive web applications built with modern frameworks
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Full-stack solutions showcasing both frontend and backend skills
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Integration of AI/ML concepts with web technologies
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Clean, efficient code following best practices
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-glow transition-all duration-300"
                onClick={() => window.open("https://github.com", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;