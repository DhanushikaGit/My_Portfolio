import { Briefcase, Code, User, GraduationCap, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            About{" "}
            <span className="text-primary relative">
              Me
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full transform scale-x-0 animate-pulse" style={{ animation: 'scaleX 2s ease-in-out infinite' }} />
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8 group">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Full-Stack Developer & Problem Solver
              </h3>

              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground transform hover:scale-[1.02] transition-all duration-300 p-4 rounded-xl hover:bg-background/50 backdrop-blur-sm">
                  I'm a dedicated Full-Stack Developer with a{" "}
                  <span className="text-primary font-semibold">BSc (Hons) in Computing and Software Engineering</span>{" "}
                  from Cardiff Metropolitan University. My expertise lies in crafting scalable, user-friendly web
                  applications using technologies like{" "}
                  <span className="text-primary font-semibold">React, Laravel, Node.js, and MongoDB</span>.
                </p>

                <p className="text-muted-foreground transform hover:scale-[1.02] transition-all duration-300 p-4 rounded-xl hover:bg-background/50 backdrop-blur-sm">
                  I have experience building platforms from doctor appointment systems to e-commerce apps. I love
                  working on innovative solutions, continuously learning new tech, and applying{" "}
                  <span className="text-primary font-semibold">UI/UX best practices</span>{" "}
                  to create seamless digital experiences.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get In Touch
                  <div className="w-2 h-2 bg-primary-foreground rounded-full animate-ping" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              <a
                href="/Dhanushika_CV.zip"
                download
                className="group relative px-8 py-4 rounded-2xl border-2 border-primary text-primary font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 bg-background/50 backdrop-blur-sm hover:bg-primary/5"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Download CV
                  <Award className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Cards */}
          <div className="space-y-6">
            {/* Full-Stack Development Card */}
            <div className="group relative p-8 rounded-3xl bg-background/60 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-6">
                <div className="relative p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6 transform-gpu">
                  <Code className="h-8 w-8 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Experienced in MERN, Laravel, and PHP-based systems with integrated API services.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="group relative p-8 rounded-3xl bg-background/60 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-6">
                <div className="relative p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6 transform-gpu">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                    Education
                  </h4>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    BSc (Hons) in Computing and Software Engineering – Cardiff Metropolitan University
                    <br />
                    <span className="text-sm text-primary/80 font-medium mt-2 inline-block px-3 py-1 bg-primary/10 rounded-full">
                      2022 – 2025
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="group relative p-8 rounded-3xl bg-background/60 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-6">
                <div className="relative p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500 group-hover:scale-110 group-hover:rotate-6 transform-gpu">
                  <Award className="h-8 w-8 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                    Certifications
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-background/50 hover:bg-primary/5 transition-colors duration-300">
                      <p className="font-semibold text-foreground">React JS Tutorial</p>
                      <p className="text-sm text-muted-foreground">Great Learning Academy • Nov 2024</p>
                    </div>
                    <div className="p-3 rounded-xl bg-background/50 hover:bg-primary/5 transition-colors duration-300">
                      <p className="font-semibold text-foreground">Front-End Web Development</p>
                      <p className="text-sm text-muted-foreground">University of Moratuwa • Mar 2025</p>
                    </div>
                    <div className="p-3 rounded-xl bg-background/50 hover:bg-primary/5 transition-colors duration-300">
                      <p className="font-semibold text-foreground">Python for Beginners</p>
                      <p className="text-sm text-muted-foreground">University of Moratuwa • Dec 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};