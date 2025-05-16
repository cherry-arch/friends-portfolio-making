
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface EducationProps {
  id: string;
  setActiveVisibility: (id: string) => void;
}

const Education = ({ id, setActiveVisibility }: EducationProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setActiveVisibility(id);
    }
  }, [inView, id, setActiveVisibility]);

  const educationData = [
    {
      institution: "G. Pulla Reddy Engineering College",
      degree: "B.Tech – Electronics and Communication Engineering (Ongoing)",
      location: "Kurnool, Andhra Pradesh",
      year: "Expected Graduation: 2026",
      grade: "CGPA: 8.8 (Ongoing)",
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate Education",
      location: "Andhra Pradesh",
      year: "Year of Passing: 2022",
      grade: "Percentage: 94%",
    },
    {
      institution: "Vedas Public School",
      degree: "Secondary Education",
      location: "Andhra Pradesh",
      year: "Year of Passing: 2020",
      grade: "Percentage: 95%",
    },
  ];

  return (
    <section id={id} ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Education
        </h2>
        
        <div className="space-y-10 max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="relative bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.institution}</h3>
              <p className="text-blue-600 font-medium mb-4">{edu.degree}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">📍</span> {edu.location}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">📅</span> {edu.year}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">📈</span> {edu.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
