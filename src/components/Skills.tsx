
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Briefcase, FileText } from 'lucide-react';

interface SkillsProps {
  id: string;
  setActiveVisibility: (id: string) => void;
}

const Skills = ({ id, setActiveVisibility }: SkillsProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setActiveVisibility(id);
    }
  }, [inView, id, setActiveVisibility]);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: ["C", "Python", "Java"],
    },
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Machine Learning",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      skills: ["NumPy", "Pandas", "OpenCV"],
    },
    {
      title: "Hardware & Circuit Design",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      skills: ["Digital Logic Design", "Embedded C", "Microprocessors"],
    },
    {
      title: "Other Skills",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      skills: ["Strong coordination", "Leadership skills"],
    },
  ];

  return (
    <section id={id} ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
