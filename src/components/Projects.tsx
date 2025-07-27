import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import workergen from "@/assets/workergen.png";
import lagosRide from "@/assets/lagosride.png";
import dever from "@/assets/dever.png";
import toch from "@/assets/toch.png";
import flyer from "@/assets/flyer.png";
type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Workergen AI Platform",
    description: "A productivity platform that connects users with autonomous AI agents for content creation, lead generation, and marketing automation.",
    technologies: ["ReactJS", "NodeJS", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Akinnawo3", // replace with repo if public
    live: "https://app.workergen.com",
    image: workergen,
    featured: true,
  },
  {
    title: "LagosRide Admin Dashboards",
    description: "Dashboards for Nigeria's ride-hailing platform (500 k+ users): trip analytics, driver verification, vehicle-maintenance workflows, more.",
    technologies: ["ReactJS", "NodeJS", "MongoDB", "React Native"],
    github: "https://github.com/Akinnawo3", // replace with repo if public
    live: "https://lrdash.lagosride.com", // may require VPN / auth
    image: lagosRide,
  },
  {
    title: "Dever Logistics",
    description: "A logistics platform that allows users to request delivery services through a seamless web interface, with coordinated handling via integrated communication channels.",
    technologies: ["ReactJS", "Redux", "NodeJS", "MongoDB"],
    github: "https://github.com/Akinnawo3", // update with actual repo if available
    live: "https://www.deverlogistics.com/",
    image: dever, // assuming you've imported the image properly
  },
  {
    title: "Toch",
    description: "A mobility platform introducing eco-friendly electric vehicle rides in Nigeria. Early sign-ups receive exclusive access starting in 2025.",
    technologies: ["ReactJS", "Zustand", "Express", "MongoDB"],
    github: "https://github.com/Akinnawo3", // replace with repo if public
    live: "https://www.tochbyzeno.com/",
    image: toch,
  },

  {
    title: "Flyer Ai",
    description: "Responsive portfolio built with React & Tailwind CSS, featuring smooth animations and lightning-fast performance.",
    technologies: ["React", "TypeScript", "Express", "Tailwind CSS", "Anthropic"],
    github: "https://github.com/Akinnawo3",
    live: "https://flyer.workergen.com/",
    image: flyer,
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">A showcase of my real-world work demonstrating full-stack expertise and production-grade delivery.</p>
        </div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <Card key={project.title} className="mb-16 bg-gradient-card border-primary/20 shadow-elegant hover:shadow-glow hover:scale-102 transition-all duration-500 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover  min-h-[300px] lg:min-h-[400px] hover:scale-110 transition-transform duration-500" />

                    <div className="absolute inset-0 bg-gradient-primary/20" />
                  </div>

                  {/* Details */}
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="bg-primary text-primary-foreground w-fit mb-4 animate-bounce-slow">Featured Project</Badge>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/30 hover:scale-105 transition-transform duration-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.live && project.live !== "#" && (
                        <Button asChild className="bg-primary hover:bg-primary/90">
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <Card key={project.title} className="bg-gradient-card border-primary/20 shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-500 group animate-slide-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img src={project.image} alt={project.title} className="w-full h-48 object group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                    {/* Tech Stack (first 3) */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-primary/30 hover:scale-105 transition-transform duration-200">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-primary/30">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.live && project.live !== "#" && (
                        <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button asChild size="sm" variant="outline" className="flex-1 border-primary/30 hover:bg-primary/10">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-1 h-3 w-3" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
