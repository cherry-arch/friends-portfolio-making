
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectsProps {
  id: string;
  setActiveVisibility: (id: string) => void;
}

const Projects = ({ id, setActiveVisibility }: ProjectsProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setActiveVisibility(id);
    }
  }, [inView, id, setActiveVisibility]);

  const projects = [
    {
      title: "Attendance Management System",
      description: "Developed an AI-powered attendance system using facial recognition to automate attendance tracking.",
      techStack: ["Python", "Pandas", "NumPy", "Streamlit", "Tkinter", "OpenCV"],
      image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio website showcasing projects, skills, and experience with responsive design.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Smart Resume Parser",
      description: "Developed a tool to extract structured data from unstructured resume files using NLP, entity recognition and text classification.",
      techStack: ["Python", "spaCy", "NLTK", "Pandas", "Regular Expressions", "JSON"],
      image: "https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section id={id} ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 mb-4">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
