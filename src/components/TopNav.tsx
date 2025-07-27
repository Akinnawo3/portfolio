import { useState, useCallback, useEffect, Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ITopNav {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}

const TopNav: React.FC<ITopNav> = ({ navOpen, setNavOpen }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const scrollListener = useCallback(() => {
    if (window.scrollY >= 500) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);

  const toggleMenu = () => setNavOpen(!navOpen);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);

    // Show loading toast
    const loadingToast = toast({
      title: "Preparing your resume",
      description: "Download will start shortly...",
      variant: "default",
    });

    try {
      // Create a hidden anchor element to trigger download
      const link = document.createElement("a");
      link.href = "https://drive.google.com/uc?export=download&id=1bqQ1Kkd-scjOxDXNlpDy1uuIEuLB-Sf7";
      link.setAttribute("download", "Victor_Akinnawo_Resume.pdf");
      // link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Dismiss loading toast and show success
      loadingToast.dismiss();
      toast({
        title: "Download started!",
        description: "Resume is being downloaded",
      });
    } catch (error) {
      // Dismiss loading toast and show error
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
      setNavOpen(false);
    }
  };

  const links = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="font-sans">
      <header
        className={`
        w-full z-50
        ${isSticky ? "fixed bg-[hsla(240,10%,3.9%,0.8)] backdrop-blur-md shadow-sm border-b border-grey-[100]" : "absolute"}
      `}
      >
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white/80 hover:text-white">
            Victor Akinnawo
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <a key={item.name} href={item.link} className="text-white/80 hover:text-white transition-colors duration-200">
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 focus:outline-none text-white rounded-md hover:bg-white/10 transition-colors duration-200" aria-label="Toggle menu">
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {navOpen && (
            <motion.div className="lg:hidden w-full bg-[hsla(240,10%,3.9%,0.95)] backdrop-blur-md py-6 px-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}>
              <div className="flex flex-col gap-6">
                {links.map((item) => (
                  <a key={item.name} href={item.link} className="py-2 text-lg text-white/80 hover:text-white transition-colors duration-200" onClick={toggleMenu}>
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <a
                    href="#"
                    onClick={handleDownload}
                    className={`px-4 py-3 rounded-md bg-gradient-to-r from-[hsl(263,70%,50%)] to-[hsl(263,70%,60%)] text-white text-center hover:opacity-90 transition-opacity duration-200 ${isDownloading ? "opacity-70 cursor-not-allowed" : ""}`}
                    // disabled={isDownloading}
                  >
                    {isDownloading ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Downloading...
                      </div>
                    ) : (
                      "Download Resume"
                    )}
                  </a>
                  <a href="#projects" className="px-4 py-3 rounded-md border border-[hsl(263,70%,50%)] text-[hsl(263,70%,50%)] text-center hover:bg-[hsla(263,70%,50%,0.1)] transition-colors duration-200" onClick={toggleMenu}>
                    View My Work
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default TopNav;
