import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "HTML/CSS", level: "Expert" },
        { name: "Redux", level: "Advanced" },
        { name: "Vue.js", level: "Intermediate" }
      ],
      gradient: "from-primary to-accent"
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Redis", level: "Intermediate" },
        { name: "GraphQL", level: "Intermediate" },
        { name: "REST APIs", level: "Expert" }
      ],
      gradient: "from-accent to-primary"
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Git", level: "Expert" },
        { name: "Docker", level: "Advanced" },
        { name: "AWS", level: "Intermediate" },
        { name: "Vercel", level: "Advanced" },
        { name: "Figma", level: "Advanced" },
        { name: "VS Code", level: "Expert" },
        { name: "Webpack", level: "Intermediate" },
        { name: "Jest", level: "Advanced" }
      ],
      gradient: "from-primary/80 to-accent/80"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-primary text-primary-foreground";
      case "Advanced": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks 
              for building exceptional web applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title}
                className="bg-gradient-card border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${categoryIndex * 0.2}s`}}
              >
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className={`h-2 w-full bg-gradient-to-r ${category.gradient} rounded-full mb-6`}></div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    {category.title}
                  </h3>
                  
                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors duration-200 animate-scale-in"
                        style={{animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.05}s`}}
                      >
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <Badge className={getLevelColor(skill.level)}>
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Card className="bg-gradient-primary p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Always Learning
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                The tech landscape evolves rapidly, and so do I. Currently exploring 
                AI/ML integrations, Web3 technologies, and advanced React patterns 
                to stay at the forefront of web development.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;