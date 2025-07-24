import { ArrowDown, Code2, Sparkles, MousePointer } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const skills = ["React", "Node.js", "TypeScript", "MongoDB", "Express", "Next.js"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {i % 3 === 0 && <Code2 className="w-4 h-4 text-primary animate-pulse" />}
            {i % 3 === 1 && <Sparkles className="w-3 h-3 text-primary animate-spin-slow" />}
            {i % 3 === 2 && <MousePointer className="w-3 h-3 text-primary animate-bounce" />}
          </div>
        ))}
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10 relative">
        {/* Welcome Badge */}
        

        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="relative">
                Hi, I'm
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-ping opacity-75"></div>
              </span>
            </div>

            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="text-primary relative inline-block">
                Dhanushika
                <div className="absolute inset-0 bg-primary/10 rounded-lg -z-10 scale-110 animate-pulse"></div>
              </span>
            </div>

            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="text-gradient ml-2 relative">
                Madushani
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none" className="animate-draw" />
                </svg>
              </span>
            </div>
          </h1>

          {/* Dynamic Skill Word */}
         

          {/* Description */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            I am a skilled Full-Stack Developer with expertise in building robust web applications. Proficient in front-end and back-end technologies, I deliver seamless user experiences and scalable solutions. Passionate about coding and innovation.
          </p>

          {/* CTA Buttons */}
          <div className={`pt-4 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#projects" className="cosmic-button group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <div className="w-2 h-2 bg-white rounded-full group-hover:animate-bounce"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#contact" className="px-6 py-3 border border-primary/30 rounded-lg text-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 group">
                <span>Get In Touch</span>
                <ArrowDown className="w-4 h-4 rotate-[-45deg] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className={`pt-8 transform transition-all duration-1000 delay-1400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
              {["React", "Node.js", "TypeScript", "MongoDB"].map((tech, index) => (
                <div
                  key={tech}
                  className="px-3 py-1 text-xs bg-primary/5 border border-primary/10 rounded-full text-muted-foreground hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${1600 + index * 100}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer transition-all duration-1000 delay-1600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="relative">
          <span className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
            Scroll
          </span>
          <div className="absolute -inset-2 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="relative">
          <ArrowDown className="h-5 w-5 text-primary animate-bounce group-hover:scale-110 transition-transform" />
          <div className="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-25"></div>
        </div>
      </div>

      {/* ✅ Fixed style (no jsx attribute) */}
      <style>{`
        @keyframes draw {
          from { stroke-dasharray: 0 100; }
          to { stroke-dasharray: 100 0; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-draw {
          animation: draw 2s ease-in-out infinite alternate;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};
