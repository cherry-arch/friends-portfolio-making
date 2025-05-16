
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactProps {
  id: string;
  setActiveVisibility: (id: string) => void;
}

const Contact = ({ id, setActiveVisibility }: ContactProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setActiveVisibility(id);
    }
  }, [inView, id, setActiveVisibility]);

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 91545 45945",
      href: "tel:+919154545945",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "puthadivakar@gmail.com",
      href: "mailto:puthadivakar@gmail.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/",
    },
  ];

  return (
    <section id={id} ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-600 text-white p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8">Feel free to get in touch with me. I am always open to discussing new projects, opportunities or partnerships.</p>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                    target={contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : undefined}
                    rel={contact.label === "LinkedIn" || contact.label === "GitHub" ? "noopener noreferrer" : undefined}
                  >
                    <div className="bg-blue-500 p-2 rounded-full">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm opacity-75">{contact.label}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your message here..."
                  />
                </div>
                
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
