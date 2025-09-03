import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, MapPin, TrendingUp, Database } from "lucide-react";

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
            Showcasing my expertise in machine learning, web development, and data visualization 
            through real-world applications and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Earthquake Prediction Project */}
          <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-card/50 border-primary/20 neon-glow">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src="/lovable-uploads/cb349b3b-11a4-4147-8123-127b9dbf960a.png" 
                alt="Earthquake Prediction Visualization Map"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <Badge variant="secondary" className="text-xs">ML Project</Badge>
              </div>
              <CardTitle className="font-orbitron text-xl group-hover:text-primary transition-colors">
                🌍 Earthquake Prediction & Visualization
              </CardTitle>
              <CardDescription>
                Machine learning pipeline to predict earthquake magnitude and depth using historical seismic data with interactive visualization.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span>MAE: 0.31 (Magnitude)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-accent" />
                    <span>Depth: 52km accuracy</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {["Python", "TensorFlow", "Keras", "Folium", "Streamlit"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open("https://github.com/Palaksh-singh/earthquake-prediction-ml", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open("https://earthquake-prediction-ml-dspcg5kppz7tzc8dnqkvsg.streamlit.app/", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder for future projects */}
          <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-card/20 border-primary/20 border-dashed">
            <CardContent className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-orbitron text-xl font-bold text-foreground mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground">
                I'm constantly working on new projects to showcase different aspects of my expertise.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;