import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500 ease-out",
        isScrolled 
          ? "py-3 bg-background/90 backdrop-blur-xl border-b border-border/20 shadow-lg shadow-black/5" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          className="relative group"
          href="#hero"
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/50 rounded-xl flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
              <span className="text-primary font-bold text-xl animate-pulse">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground leading-none group-hover:text-primary transition-colors duration-300">
                Dhanushika
              </span>
              <span className="text-sm text-foreground/70 leading-none tracking-wider">
                Portfolio
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl scale-0 group-hover:scale-110 transition-all duration-500 -z-10 blur-sm" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-2 bg-background/60 backdrop-blur-md rounded-2xl p-2 border border-border/30 shadow-lg shadow-black/10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative px-6 py-3 text-base font-semibold text-foreground/80 hover:text-primary transition-all duration-500 rounded-xl group overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="relative z-10 transform group-hover:scale-105 transition-transform duration-300 inline-block">
                  {item.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl scale-0 group-hover:scale-100 transition-all duration-500 origin-center" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            "md:hidden relative p-3 rounded-xl transition-all duration-500 z-50 group",
            "bg-background/60 backdrop-blur-md border border-border/30 shadow-lg",
            "hover:bg-background/80 hover:border-border/50 hover:scale-110 hover:rotate-180"
          )}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="w-7 h-7 flex items-center justify-center">
            {isMenuOpen ? (
              <X size={24} className="text-foreground transition-all duration-300 group-hover:text-primary" />
            ) : (
              <Menu size={24} className="text-foreground transition-all duration-300 group-hover:text-primary" />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl scale-0 group-hover:scale-100 transition-all duration-500 -z-10" />
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 md:hidden",
            "transition-all duration-500 ease-out",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "relative px-12 py-6 text-2xl font-bold text-foreground/90 hover:text-primary",
                    "transition-all duration-500 rounded-2xl group text-center overflow-hidden",
                    "transform hover:scale-110 hover:-rotate-1 bg-background/20 backdrop-blur-sm border border-border/20",
                    isMenuOpen ? "animate-slide-in" : ""
                  )}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(50px)',
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 150}ms`,
                  }}
                >
                  <span className="relative z-10 tracking-wide">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl scale-0 group-hover:scale-100 transition-all duration-500 origin-center" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
                </a>
              ))}
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-10 animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </nav>
  );
};