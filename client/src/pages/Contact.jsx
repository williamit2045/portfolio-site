import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, BookOpen, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import textureD from '../assets/paisley.webp';
import textureA from '../assets/folk-pattern-black.webp';
import textureB from '../assets/double-bubble-dark.webp';
import textureC from '../assets/connectwork.webp';
import texture from '../assets/spiration-dark.webp';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/williamit2045',
    icon: Github,
    description: 'Check out my open source projects and contributions.',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jdunbaugh/',
    icon: Linkedin,
    description: 'Connect with me professionally and see my journey.',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/jdunbaugh',
    icon: Twitter,
    description: 'Follow my thoughts and updates.',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@mathewjamie/the-search-for-consciousness-two-hard-problems-and-a-bunch-of-absurdities-6b516bf5178c',
    icon: BookOpen,
    description: 'Read about my journey and insights on Medium.',
  },
  {
    name: 'Blog: Moral Apex',
    url: 'https://moralapex.wordpress.com/',
    icon: BookOpen,
    description: 'Explore my blog focused on ethical discussions.',
  },
  {
    name: 'Blog: Transhumanities',
    url: 'https://transhumanities.wordpress.com/',
    icon: BookOpen,
    description: 'Thoughts on transhumanism and future tech.',
  },
  {
    name: 'Blog: Ascension of Being',
    url: 'https://ascensionofbeing.wordpress.com/',
    icon: BookOpen,
    description: 'Exploring the human experience and personal growth.',
  },
  {
    name: 'Blog: JDunbaugh',
    url: 'https://jdunbaugh.wordpress.com/',
    icon: BookOpen,
    description: 'My personal blog on a variety of topics.',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_6qtvoms',
        'template_qh8il3o',
        {
          to_email: 'williamit2060@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '8_OlTHxuidKtAWkDh'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4"
    style={{
        backgroundImage: `url(${textureB})`,
        backgroundSize: 'auto', // Use original size for tiling
        backgroundRepeat: 'repeat', // Repeat the texture across the entire background
        borderRadius: '0rem'
      }}
      >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Social Links */}
        <div className="space-y-6"
            style={{
                backgroundImage: `url(${textureB})`,
                backgroundSize: 'auto', // Use original size for tiling
                backgroundRepeat: 'repeat', // Repeat the texture across the entire background
            }}
          >
          <h1 className="text-4xl font-bold mb-6">I'm all ears.</h1>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" 
            
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-6 rounded-lg flex items-start space-x-4 hover:bg-gray-700 transition-colors duration-300"

                style={{
                    backgroundImage: `url(${textureC})`,
                    backgroundSize: 'auto', // Use original size for tiling
                    backgroundRepeat: 'repeat', // Repeat the texture across the entire background
                }}
              >
                <link.icon className="h-6 w-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{link.name}</h3>
                  <p className="text-sm text-gray-400">{link.description}</p>
                </div>
              </a>
            ))}
          </div>


          
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Since 2016, I've been developing an experimental website, inspired by my research at UCSD in philosophy of mind.
            
            The development of this project has been my primary impetus for learning fullstack web development. 

            Now that the project is nearing it's launch, I am seeking to develop three other project congruent with my primary focus, 
            
            all of which meaningful—not just for me, but inteded to support others like myself, such as veterans, 
            
            and groups of people seeking new types of connection. Whether you're interested in collaboration or just want to share ideas, 
            
            I'd love to hear from you.
          </p>
          
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg"style={{
        backgroundImage: `url(${textureA})`,
        backgroundSize: 'auto', // Use original size for tiling
        backgroundRepeat: 'repeat', // Repeat the texture across the entire background
        borderRadius: '0rem'
      }}>
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                style={{
                    backgroundImage: `url(${textureD})`,
                    backgroundSize: 'auto', // Use original size for tiling
                    backgroundRepeat: 'repeat', // Repeat the texture across the entire background
                    color: 'gray'
                  }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                style={{
                    backgroundImage: `url(${textureD})`,
                    backgroundSize: 'auto', // Use original size for tiling
                    backgroundRepeat: 'repeat', // Repeat the texture across the entire background
                    color: 'gray'
                  }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                style={{
                    backgroundImage: `url(${textureD})`,
                    backgroundSize: 'auto', // Use original size for tiling
                    backgroundRepeat: 'repeat', // Repeat the texture across the entire background
                    color: 'gray'
                  }}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"

              style={{
                backgroundImage: `url(${textureD})`,
                backgroundSize: 'auto', // Use original size for tiling
                backgroundRepeat: 'repeat', // Repeat the texture across the entire background
                color: 'gray'
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center mt-4">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
