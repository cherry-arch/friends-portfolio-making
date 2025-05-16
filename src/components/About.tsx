
import { useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  id: string;
  setActiveVisibility: (id: string) => void;
}

const About = ({ id, setActiveVisibility }: AboutProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveVisibility(id);
    }
  }, [inView, id, setActiveVisibility]);

  return (
    <section id={id} ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <p className="text-lg text-gray-700 mb-6">
              I'm an Electronics and Communication Engineering student at G. Pulla Reddy Engineering College with a passion for technology and innovation. I'm constantly looking to expand my knowledge and skill set across various domains including programming, web development, and machine learning.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My educational journey has equipped me with strong technical foundations, while my project experiences have helped me apply theoretical knowledge to practical scenarios. I'm particularly interested in AI/ML applications and web development.
            </p>
            <p className="text-lg text-gray-700">
              I'm committed to personal and professional growth while contributing positively in a dynamic environment. I thrive on challenges and continuously seek opportunities to learn and improve.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-1 rounded-xl">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl mb-4 text-blue-600">Personal Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium min-w-24">Location:</span>
                    <span>Kadapa, Andhra Pradesh, India</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-24">Phone:</span>
                    <span>+91 91545 45945</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-24">Email:</span>
                    <span>puthadivakar@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-24">Education:</span>
                    <span>B.Tech, Electronics & Communication Engineering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-24">Languages:</span>
                    <span>English, Telugu, Hindi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
