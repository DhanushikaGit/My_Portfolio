import { ArrowRight, ExternalLink, Github, Calendar, Code2, Zap, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    description:
      "A responsive restaurant website with menu display, online reservations, and user reviews, built with React and Laravel.",
    image: "/projects/restaurant-website.png",
    tags: ["Java", "JavaScript", "MySQL", "Tailwind CSS", "Bootstrap"],
    githubUrl: "https://github.com/DhanushikaGit/ABC-restaurant.git",
  },
  {
    id: 2,
    title: "Movie Exploration App",
    description:
      "A web app that suggests movies using TMDB API integration and user preferences, built with React and Node.js.",
    image: "/projects/Movie-Exploration.png",
    tags: ["React", "JavaScript", "SCSS", "TMDB API", "Bootstrap"],
    githubUrl: "https://github.com/DhanushikaGit/movie_explore_app",
  },
  {
    id: 3,
    title: "Agriculture Platform",
    description:
      "A platform connecting farmers to agricultural services with information portals and service request forms, using PHP and Bootstrap.",
    image: "/projects/agriculture-platform.png",
    tags: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL", "JavaScript", "Tailwind CSS"],
    githubUrl:
      "https://github.com/DhanushikaGit/Agriculture_Services_and_Fertilizer_Distribution_Platform",
  },
  {
    id: 4,
    title: "Doctor Appointment Booking System",
    description:
      "Designed and developed a secure web app with role-based authentication, enabling appointment scheduling and payment integration for 100+ users.",
    image: "/projects/doctor-appointment.png",
    tags: ["React", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/DhanushikaGit/Appoinment_Booking_System",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Code2 size={16} />
            <span className="text-sm font-semibold">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Featured{" "}
            <span className="text-primary relative">
              Project
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"></div>
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        {/* Projects Grid - All Same Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border
                         shadow-lg hover:shadow-2xl hover:shadow-primary/10 
                         transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Project Number Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="w-8 h-8 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">0{project.id}</span>
                </div>
              </div>

              {/* Action Buttons - Only Demo URL if any */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                {project.demoUrl && (
                  <button
                    className="w-10 h-10 bg-card/80 backdrop-blur-sm border border-border rounded-full 
                                   flex items-center justify-center hover:bg-primary hover:text-white 
                                   hover:border-primary transition-all duration-300 group/btn"
                  >
                    <ExternalLink size={16} />
                  </button>
                )}
                {/* Removed GitHub button from here */}
              </div>

              {/* Image Container - Fixed Height */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Container - Fixed Height */}
              <div className="p-6 h-64 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium 
                                 rounded-full border border-border hover:border-primary hover:bg-primary/10 
                                 hover:text-primary transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link below tags */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>

              {/* Card Border Animation */}
              <div
                className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/30 
                            transition-all duration-500 pointer-events-none"
              ></div>

              {/* Corner Accent */}
              <div
                className="absolute bottom-0 left-0 w-0 h-0 border-l-[30px] border-b-[30px] 
                            border-l-transparent border-b-primary/10 group-hover:border-b-primary/20 
                            transition-colors duration-300 rounded-br-3xl"
              ></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-card rounded-3xl p-8 border border-border shadow-lg max-w-md mx-auto">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-2">
              <Github className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold">Explore My GitHub</h3>
            <p className="text-muted-foreground text-sm text-center">
              Discover more projects, code samples, and contributions on my GitHub profile
            </p>
            <a
              className="cosmic-button flex items-center gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/DhanushikaGit"
            >
              Visit GitHub
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
