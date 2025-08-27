import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:palaksh@example.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com/in/palaksh-kumar", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/palaksh-kumar", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/palaksh_kumar", label: "Instagram" },
  ];

  return (
    <footer className="bg-card/50 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-4">
              NEON<span className="text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.7)]">DEV</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connecting Ideas, Crafting Code and Creating digital experiences
              that illuminate the future of web development
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 transform hover:-translate-y-1 neon-glow hover:neon-glow-hover"
                  aria-label={link.label}
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
          </div>

          <div className="pt-8 border-t border-primary/10">
            <p className="text-sm text-muted-foreground">
              © 2024 Palaksh Kumar Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;