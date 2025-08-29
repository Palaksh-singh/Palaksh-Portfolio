import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:palakshkumar866@gmail.com",
      label: "palakshkumar866@gmail.com",
      color: "text-primary"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: "https://www.linkedin.com/in/palaksh-kumar-584674346/",
      label: "Connect with me",
      color: "text-blue-400"
    },
    {
      name: "GitHub",
      icon: Github, 
      href: "https://github.com/Palaksh-singh",
      label: "View my code",
      color: "text-foreground"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.Instagram.com/palakshkumar_",
      label: "Follow me",
      color: "text-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto neon-glow mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am always open to collaborating on exciting projects, internships, or freelance opportunities.
            Let's connect and create something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.name}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group bg-card/50 p-8 rounded-2xl border border-primary/20 neon-glow hover:neon-glow-hover transition-all duration-300 transform hover:-translate-y-2 block"
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                      <IconComponent className={`w-8 h-8 ${method.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-orbitron text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {method.name}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {method.label}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Send className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-card/50 p-8 rounded-2xl border border-primary/20 neon-glow">
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-4">
                Let's Create Something Amazing
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
                I'd love to hear from you. Drop me a message and let's start the conversation!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="text-sm text-muted-foreground">Available for:</span>
                <div className="flex flex-wrap gap-3">
                  {["Freelance Projects", "Internships", "Collaborations", "Full-time Opportunities"].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;