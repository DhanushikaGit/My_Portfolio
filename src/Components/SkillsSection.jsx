import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML5/CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "UI/UX Design", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "C#", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "Firebase", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "TMDB API Integration", category: "backend" },

  // Machine Learning
  { name: "Python", category: "machine learning" },
  { name: "Scikit-learn", category: "machine learning" },
  { name: "Pandas", category: "machine learning" },
  { name: "Matplotlib", category: "machine learning" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Visual Studio Code", category: "tools" },
  { name: "Android Studio", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Agile/Scrum", category: "tools" },
];

const categories = ["all", "frontend", "backend", "machine learning", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 capitalize border",
                activeCategory === category
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-foreground border-border hover:bg-muted"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-4 justify-center">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="px-4 py-2 rounded-full bg-card shadow-sm text-sm font-medium text-foreground border border-border hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
