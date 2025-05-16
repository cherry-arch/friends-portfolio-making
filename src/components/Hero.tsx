
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const handleExplore = () => {
    setActiveSection('about');
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Putha Divakar Reddy
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
            Electronics and Communication Engineering Student
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-10 text-lg">
            A motivated and dedicated student aiming to apply academic knowledge and continuously enhance skills through learning and participation in real-world projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={handleExplore}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all"
            >
              Explore My Work
              <ArrowDown size={18} />
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                setActiveSection('contact');
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full transition-all"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
