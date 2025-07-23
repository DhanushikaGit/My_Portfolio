import { Briefcase, Code, User, GraduationCap, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I'm a dedicated Full-Stack Developer with a BSc (Hons) in Computing and Software Engineering
              from Cardiff Metropolitan University. My expertise lies in crafting scalable, user-friendly web
              applications using technologies like React, Laravel, Node.js, and MongoDB.
            </p>

            <p className="text-muted-foreground">
              I have experience building platforms from doctor appointment systems to e-commerce apps. I love
              working on innovative solutions, continuously learning new tech, and applying UI/UX best practices
              to create seamless digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
  <a href="#contact" className="cosmic-button">
    Get In Touch
  </a>

  <a
  href="/Dhanushika_CV.zip"
  download
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download CV (.zip)
</a>
</div>

          </div>

          {/* RIGHT COLUMN - Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Full-Stack */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Experienced in MERN, Laravel, and PHP-based systems with integrated API services.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">
                    BSc (Hons) in Computing and Software Engineering – Cardiff Metropolitan University
                    <br />
                    <span className="text-sm text-muted-foreground">2022 – 2025</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Certifications</h4>
                  <ul className="text-muted-foreground text-sm space-y-1 mt-1">
                    <li>
                      <strong>React JS Tutorial</strong> – Great Learning Academy (Nov 2024)
                    </li>
                    <li>
                      <strong>Front-End Web Development</strong> – University of Moratuwa (Mar 2025)
                    </li>
                    <li>
                      <strong>Python for Beginners</strong> – University of Moratuwa (Dec 2024)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
