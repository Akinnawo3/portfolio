import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import me from "@/assets/me.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${heroBackground})` }}></div>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content Container */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          {/* Intro & Image Side-by-Side */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-12">
            {/* Profile Image - Refined border */}
            <div className="relative w-56 h-56 lg:w-80 lg:h-80 md:w-64 md:h-64 flex-shrink-0 group">
              {/* Main image with elegant border */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[18px] border-white/20 shadow-2xl transition-all duration-700 group-hover:border-primary/50 group-hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.3)]">
                <img src={me} alt="Victor" className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -inset-4 z-0 pointer-events-none overflow-visible">
                {/* Golden dots circle */}
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-spin-slow [border-width:3px]" />

                {/* Floating diamonds */}
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

                {/* Corner accents */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary/10 rounded-full group-hover:bg-primary/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-primary/10 rounded-full group-hover:bg-primary/30 transition-all duration-500" />
              </div>

              {/* Glow effect */}
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
                <a href="https://drive.google.com/uc?export=download&id=1bqQ1Kkd-scjOxDXNlpDy1uuIEuLB-Sf7" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    <Download className="w-4 h-4" />
                    Download CV
                  </Button>
                </a>
                <a href="#projects">
                  <Button variant="outline" className="gap-2 text-white border-white hover:bg-white/10 hover:border-primary/50 transition-colors">
                    <ArrowDown className="w-4 h-4" />
                    View My Work
                  </Button>
                </a>
              </div>

              {/* Social Icons - Refined hover effects */}
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
// import { Button } from "@/components/ui/button";
// import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
// import heroBackground from "@/assets/hero-bg.jpg";

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${heroBackground})` }}>
//         {/* <div className="absolute inset-0 bg-gradient-hero/90"></div> */}
//       </div>

//       {/* Background decorative elements */}
//       {/* <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
//       </div> */}

//       <div className="container mx-auto px-6 py-20 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Main hero content */}
//           <div className="animate-fade-in">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text- animate-pulse-glow">Full Stack Developer</h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
//               Crafting beautiful, performant web experiences with modern technologies. Frontend expertise with full-stack capabilities.
//             </p>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
//             <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow hover:scale-105 transition-all duration-300">
//               <Download className="mr-2 h-5 w-5" />
//               Download Resume
//             </Button>
//             <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
//               View My Work
//             </Button>
//           </div>

//           {/* Social Links */}
//           <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
//             <Button variant="ghost" size="sm" className="hover:bg-primary/20 hover:text-primary-glow hover:scale-110 transition-all duration-300">
//               <Github className="h-5 w-5" />
//             </Button>
//             <Button variant="ghost" size="sm" className="hover:bg-primary/20 hover:text-primary-glow hover:scale-110 transition-all duration-300">
//               <Linkedin className="h-5 w-5" />
//             </Button>
//             <Button variant="ghost" size="sm" className="hover:bg-primary/20 hover:text-primary-glow hover:scale-110 transition-all duration-300">
//               <Mail className="h-5 w-5" />
//             </Button>
//           </div>

//           {/* Scroll indicator */}
//           <div className="animate-bounce-slow">
//             <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
//           </div>

//           {/* Floating Elements */}
//           <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float animate-glow"></div>
//           <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-bounce-slow" style={{ animationDelay: "1s" }}></div>
//           <div className="absolute top-1/2 left-20 w-8 h-8 bg-[hsl(var(--army-green-light))] rounded-full opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>
//           <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-primary/30 rounded-full animate-rotate-slow"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
