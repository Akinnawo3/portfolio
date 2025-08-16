import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import me from "@/assets/me.jpeg";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);

    const loadingToast = toast({
      title: "Preparing Resume",
      description: "Download will start shortly...",
      variant: "default",
    });

    try {
      const link = document.createElement("a");
      link.href = "https://drive.google.com/uc?export=download&id=1bqQ1Kkd-scjOxDXNlpDy1uuIEuLB-Sf7";
      link.setAttribute("download", "Victor_Akinnawo_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      loadingToast.dismiss();
      toast({
        title: "Download started!",
        description: "Resume is being downloaded",
      });
    } catch (error) {
      loadingToast.dismiss();
      toast({
        title: "Download failed",
        description: "Please try again later",
        variant: "destructive",
        action: (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleDownload(e);
            }}
            className="text-sm font-medium hover:underline"
          >
            Retry
          </button>
        ),
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${heroBackground})` }}></div>

      {/* Semi-transparent Overlay - Fixed for iOS */}
      {/* <div className="absolute inset-0 z-0 transform-gpu will-change-transform" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} /> */}

      {/* Content Container */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          {/* Intro & Image Side-by-Side */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-12">
            {/* Profile Image */}
            <div className="relative w-56 h-56 lg:w-80 lg:h-80 md:w-64 md:h-64 flex-shrink-0 group">
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[18px] border-white/20 shadow-2xl transition-all duration-700 group-hover:border-primary/50 group-hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.3)]">
                <img src={me} alt="Victor" className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 z-0 pointer-events-none overflow-visible">
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-spin-slow [border-width:3px]" />

                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/60 rotate-45"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `
                        translate(-50%, -50%) 
                        rotate(${i * 45}deg) 
                        translateY(-120%)
                      `,
                      animation: `pulse 2s ${i * 0.2}s infinite`,
                    }}
                  />
                ))}

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary/10 rounded-full group-hover:bg-primary/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-primary/10 rounded-full group-hover:bg-primary/30 transition-all duration-500" />
              </div>

              <div className="absolute -inset-4 rounded-full bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>

            {/* Text Section */}
            <div className="">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                Hi, I'm <span className="text-primary">Victor</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-2 drop-shadow">Full Stack Developer</h2>
              <p className="text-md sm:text-lg text-muted-foreground mt-4 max-w-lg drop-shadow">I build fast, scalable, and user-centric applications using modern web technologies. Passionate about crafting seamless digital experiences.</p>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
                <Button onClick={handleDownload} className="gap-2" disabled={isDownloading}>
                  {isDownloading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download CV
                    </>
                  )}
                </Button>
                <a href="#projects">
                  <Button variant="outline" className="gap-2 text-white border-white hover:bg-white/10 hover:border-primary/50 transition-colors">
                    <ArrowDown className="w-4 h-4" />
                    View My Work
                  </Button>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-6 my-10 animate-fade-in">
                <a href="https://github.com/Akinnawo3" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-white hover:text-primary hover:bg-transparent hover:scale-110 transition-all">
                    <Github className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/victor-akinnawo/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-white hover:text-primary hover:bg-transparent hover:scale-110 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
                <a href="mailto:victorakinnawo@gmail.com">
                  <Button variant="ghost" size="sm" className="text-white hover:text-primary hover:bg-transparent hover:scale-110 transition-all">
                    <Mail className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-slow">
            <ArrowDown className="h-6 w-6 mx-auto text-white opacity-80" />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float animate-glow" />
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-bounce-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-20 w-8 h-8 bg-[hsl(var(--army-green-light))] rounded-full opacity-40 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-primary/30 rounded-full animate-rotate-slow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
