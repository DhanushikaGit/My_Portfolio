import { useState } from "react";
import { Code2, Database, Brain, Wrench, Globe, Server, Smartphone, GitBranch, Palette, Monitor } from "lucide-react";

const skillIcons = {
  "HTML5/CSS3": Globe,
  "JavaScript": Code2,
  "React": Code2,
  "Tailwind CSS": Palette,
  "Bootstrap": Palette,
  "UI/UX Design": Monitor,
  "Node.js": Server,
  "Express.js": Server,
  "Laravel": Server,
  "PHP": Server,
  "Java": Code2,
  "C#": Code2,
  "MongoDB": Database,
  "MySQL": Database,
  "Firebase": Database,
  "RESTful APIs": Server,
  "TMDB API Integration": Server,
  "Python": Brain,
  "Scikit-learn": Brain,
  "Pandas": Brain,
  "Matplotlib": Brain,
  "Git/GitHub": GitBranch,
  "Visual Studio Code": Code2,
  "Android Studio": Smartphone,
  "Postman": Wrench,
  "Agile/Scrum": Wrench,
};

const skills = [
  // Frontend
  { name: "HTML5/CSS3", category: "frontend", level: 90 },
  { name: "JavaScript", category: "frontend", level: 85 },
  { name: "React", category: "frontend", level: 88 },
  { name: "Tailwind CSS", category: "frontend", level: 92 },
  { name: "Bootstrap", category: "frontend", level: 80 },
  { name: "UI/UX Design", category: "frontend", level: 75 },
  
  // Backend
  { name: "Node.js", category: "backend", level: 85 },
  { name: "Express.js", category: "backend", level: 62 },
  { name: "Laravel", category: "backend", level: 78 },
  { name: "PHP", category: "backend", level: 80 },
  { name: "Java", category: "backend", level: 75 },
  { name: "C#", category: "backend", level: 70 },
  { name: "MongoDB", category: "backend", level: 85 },
  { name: "MySQL", category: "backend", level: 88 },
  { name: "Firebase", category: "backend", level: 80 },
  { name: "RESTful APIs", category: "backend", level: 80 },
  { name: "TMDB API Integration", category: "backend", level: 85 },
  
  // Machine Learning
  { name: "Python", category: "machine learning", level: 88 },
  { name: "Scikit-learn", category: "machine learning", level: 82 },
  { name: "Pandas", category: "machine learning", level: 85 },
  { name: "Matplotlib", category: "machine learning", level: 80 },
  
  // Tools
  { name: "Git/GitHub", category: "tools", level: 90 },
  { name: "Visual Studio Code", category: "tools", level: 95 },
  { name: "Android Studio", category: "tools", level: 75 },
  { name: "Postman", category: "tools", level: 75 },
  { name: "Agile/Scrum", category: "tools", level: 60 },
];

const categories = [

  { id: "frontend", name: "Frontend", icon: Globe },
  { id: "backend", name: "Backend", icon: Server },
  { id: "machine learning", name: "ML/AI", icon: Brain },
  { id: "tools", name: "Tools", icon: Wrench }
];

export const SkillsSection = () => {
const [activeCategory, setActiveCategory] = useState("frontend");

  
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        </div>
        
        {/* Category Sidebar Navigation */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-card rounded-3xl p-6 shadow-xl border border-border sticky top-8">
              <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-2">
                <Code2 size={20} className="text-primary" />
                Categories
              </h3>
              <nav className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  const count = category.id === "all" ? skills.length : skills.filter(s => s.category === category.id).length;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left
                        transition-all duration-300 group relative overflow-hidden
                        ${activeCategory === category.id
                          ? "bg-primary text-white shadow-lg shadow-primary/20"
                          : "bg-transparent text-foreground hover:bg-muted/50"
                        }
                      `}
                    >
                      <IconComponent size={18} className={`
                        transition-transform duration-300 group-hover:scale-110
                        ${activeCategory === category.id ? "text-white" : "text-primary"}
                      `} />
                      <span className="font-medium flex-1">{category.name}</span>
                      <span className={`
                        text-xs px-2 py-1 rounded-full font-bold
                        ${activeCategory === category.id 
                          ? "bg-white/20 text-white" 
                          : "bg-primary/10 text-primary"
                        }
                      `}>
                        {count}
                      </span>
                      
                      {/* Active indicator */}
                      {activeCategory === category.id && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
          
          {/* Skills Cards Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => {
                const IconComponent = skillIcons[skill.name] || Code2;
                
                return (
                  <div
                    key={index}
                    className="group relative bg-card rounded-2xl p-6 shadow-lg border border-border
                             hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500
                             hover:-translate-y-2 hover:border-primary/20"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {/* Skill Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <IconComponent size={24} className="text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-foreground/60 capitalize font-medium">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    
                    {/* Skill Level Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-foreground/70">Proficiency</span>
                        <span className="text-xs font-bold text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 100 + 300}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
            
            {/* Skills Summary */}
            
          </div>
        </div>
      </div>
    </section>
  );
};