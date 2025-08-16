import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "ReactJS", level: "Expert" },
        { name: "NextJS", level: "Advanced" },
        { name: "TypeScript", level: "Expert" },
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5/CSS3", level: "Expert" },
        { name: "Redux", level: "Advanced" },
        { name: "Zustand", level: "Expert" },
        { name: "Vue.js", level: "Intermediate" }, // Re-added
        { name: "Material UI / Ant Design", level: "Intermediate" },
        { name: "Bootstrap / SCSS", level: "Expert" },
      ],
      gradient: "from-primary to-accent",
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJS", level: "Expert" },
        { name: "Express", level: "Expert" },
        { name: "Python", level: "Advanced" },
        { name: "Django REST Framework", level: "Intermediate" },
        { name: ".NET Core", level: "Intermediate" },
        { name: "RESTful APIs", level: "Expert" },
        { name: "GraphQL", level: "Intermediate" },
        { name: "WebSockets", level: "Intermediate" },
      ],
      gradient: "from-accent to-primary",
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git / GitHub / Bitbucket", level: "Expert" },
        { name: "Docker", level: "Advanced" },
        { name: "Jenkins / Travis CI", level: "Intermediate" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "MySQL", level: "Intermediate" },
        { name: "VS Code / Webpack / Babel", level: "Expert" },
        { name: "Jest / Mocha / Cypress", level: "Advanced" },
        { name: "Figma", level: "Advanced" }, // Re-added
        { name: "Vercel", level: "Advanced" }, // Re-added
      ],
      gradient: "from-primary/80 to-accent/80",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-primary text-primary-foreground";
      case "Advanced":
        return "bg-accent text-accent-foreground";
      case "Intermediate":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-background" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">A comprehensive toolkit of modern technologies and frameworks for building exceptional web applications.</p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={category.title} className="bg-gradient-card border-primary/20 shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-500 animate-fade-in-left" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className={`h-2 w-full bg-gradient-to-r ${category.gradient} rounded-full mb-6 animate-pulse-glow`}></div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">{category.title}</h3>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/70 hover:scale-102 transition-all duration-300 animate-slide-up"
                        style={{
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.05}s`,
                        }}
                      >
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <Badge className={`${getLevelColor(skill.level)} hover:scale-105 transition-transform duration-200`}>{skill.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center animate-scale-in" style={{ animationDelay: "0.8s" }}>
            <Card className="bg-gradient-primary p-8 text-center hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Always Learning</h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                The tech landscape evolves rapidly, and so do I. I’m currently deepening my expertise in cybersecurity principles, exploring modern DevOps workflows, and mastering advanced patterns in fullstack application architecture to build
                scalable, secure solutions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
