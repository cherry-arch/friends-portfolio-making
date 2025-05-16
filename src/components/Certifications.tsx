
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

interface CertificationsProps {
  id: string;
  setActiveVisibility: (id: string) => void;
}

const Certifications = ({ id, setActiveVisibility }: CertificationsProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setActiveVisibility(id);
    }
  }, [inView, id, setActiveVisibility]);

  const certifications = [
    {
      title: "C Training",
      issuer: "Spoken Tutorial Project, IIT Bombay",
      date: "2022",
      link: "https://drive.google.com/file/d/15EGdM4KYijwzSCRdRWareELKrFzKWEmm/view?usp=sharing"
    },
    {
      title: "Android Developer",
      issuer: "Google Developer Training Program",
      date: "2023",
      link: "https://drive.google.com/file/d/1SVhnwuApnsPI3sE7v-YHfa-ewMJKNoSE/view?usp=sharing"
    },
    {
      title: "AI/ML Virtual Internship",
      issuer: "Practical AI and ML Applications",
      date: "2023",
      link: "https://drive.google.com/file/d/1epwpxRwIekTF4ebYYoTzPaBnkQBHs7F5/view?usp=sharing"
    },
  ];

  return (
    <section id={id} ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <a 
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 group"
            >
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 flex items-center gap-2">
                  {cert.title}
                  <ExternalLink size={18} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-600 mb-4">{cert.issuer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{cert.date}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Certificate</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
