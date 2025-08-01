import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";
import profilePhoto from "@/assets/me2.jpg";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in modern web technologies with focus on React, Node.js, and cloud platforms",
    },
    {
      icon: Palette,
      title: "Frontend Excellence",
      description: "Creating beautiful, responsive UIs with attention to design details and user experience",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimizing applications for speed, scalability, and exceptional user experience",
    },
  ];

  return (
    <section className="py-20 bg-background relative " id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Passionate fullstack developer. I love building scalable web applications that deliver exceptional user experiences through clean code and thoughtful design.</p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-army border-4 border-[hsl(var(--army-green))]">
                  <img src={profilePhoto} alt="Developer Profile" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-army rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[hsl(var(--army-green-light))] rounded-full"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Building the Future of Web</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 5 years of experience in web development, I specialize in creating modern, responsive applications using cutting-edge technologies. My frontend expertise spans React, TypeScript, and modern CSS frameworks, while my backend
                  skills include Node.js, Python, and database management.
                </p>
                <p>
                  I'm passionate about writing clean, maintainable code and staying up-to-date with the latest industry trends. Whether it's crafting pixel-perfect interfaces or architecting scalable backend systems, I bring both technical expertise
                  and creative problem-solving to every project.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="animate-scale-in mb-16" style={{ animationDelay: "0.4s" }}>
            <Card className="bg-gradient-card border-primary/20 shadow-elegant">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">40+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[hsl(var(--army-green-light))] mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[hsl(var(--army-green-light))] mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Learning Mode</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={highlight.title} className="bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${index === 1 ? "bg-gradient-army" : "bg-gradient-primary"} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
