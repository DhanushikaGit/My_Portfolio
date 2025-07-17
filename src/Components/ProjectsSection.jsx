import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    description: "A responsive restaurant website with menu display, online reservations, and user reviews, built with React and Laravel.",
    image: "/projects/restaurant-website.png",
    tags: [" Java", "JavaScript", "MySQL", "Tailwind CSS","Bootstrap"],
    
    githubUrl: "#",
  },
  {
    id: 2,
    title: " Movie Exploration App",
    description: "A web app that suggests movies using TMDB API integration and user preferences, built with React and Node.js.",
    image: "/projects/Movie-Exploration.png",
    tags: ["React", "JavaScript,","SCSS", "TMDB API", "Bootstrap"],
   
    githubUrl: "https://github.com/DhanushikaGit/movie_explore_app",
  },
  {
    id: 3,
    title: "Agriculture Platform",
    description: "A platform connecting farmers to agricultural services with information portals and service request forms, using PHP and Bootstrap.",
    image: "/projects/agriculture-platform.png",
    tags: ["Html","CSS","PHP", "Bootstrap", "MySQL", "JavaScript","Tailwind CSS"],
 
    githubUrl: "https://github.com/DhanushikaGit/Agriculture_Services_and_Fertilizer_Distribution_Platform",
  },
  {
    id: 4,
    title: "Doctor Appointment Booking System",
description: "Designed and developed a secure web app with role-based authentication, enabling appointment scheduling and payment integration for 100+ users.",
    image: "/projects/doctor-appointment.png",
    tags: ["React", "MongoDB,", "Express.js","Node.js", "Tailwind CSS"],
  
    githubUrl: "https://github.com/DhanushikaGit/Appoinment_Booking_System",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/DhanushikaGit"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};