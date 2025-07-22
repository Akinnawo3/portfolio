import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/90"></div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main hero content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Crafting beautiful, performant web experiences with modern technologies. 
              Frontend expertise with full-stack capabilities.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow hover:scale-105 transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
              View My Work
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button variant="ghost" size="sm" className="hover:bg-primary/20 hover:text-primary-glow hover:scale-110 transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-primary/20 hover:text-primary-glow hover:scale-110 transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-primary/20 hover:text-primary-glow hover:scale-110 transition-all duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce-slow">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float animate-glow"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-20 w-8 h-8 bg-[hsl(var(--army-green-light))] rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-primary/30 rounded-full animate-rotate-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;