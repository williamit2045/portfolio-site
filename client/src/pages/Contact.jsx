import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Mail, Github, Linkedin, Twitter, BookOpen } from 'lucide-react';
import emailjs from '@emailjs/browser';
import textureA from '../assets/folk-pattern-black.webp';
import textureB from '../assets/double-bubble-dark.webp';
import textureC from '../assets/connectwork.webp';
import textureD from '../assets/paisley.webp';

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/williamit2045', icon: Github, description: 'Check out my open source projects and contributions.' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jdunbaugh/', icon: Linkedin, description: 'Connect with me professionally and see my journey.' },
  { name: 'Twitter', url: 'https://twitter.com/jdunbaugh', icon: Twitter, description: 'Follow my thoughts and updates.' },
  { name: 'Medium', url: 'https://medium.com/@mathewjamie/the-search-for-consciousness-two-hard-problems-and-a-bunch-of-absurdities-6b516bf5178c', icon: BookOpen, description: 'Read about my journey and insights on Medium.' },
  { name: 'Blog: Moral Apex', url: 'https://moralapex.wordpress.com/', icon: BookOpen, description: 'Explore my blog focused on ethical discussions.' },
  { name: 'Blog: Transhumanities', url: 'https://transhumanities.wordpress.com/', icon: BookOpen, description: 'Thoughts on transhumanism and future tech.' },
  { name: 'Blog: Ascension of Being', url: 'https://ascensionofbeing.wordpress.com/', icon: BookOpen, description: 'Exploring the human experience and personal growth.' },
  { name: 'Blog: JDunbaugh', url: 'https://jdunbaugh.wordpress.com/', icon: BookOpen, description: 'My personal blog on a variety of topics.' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
    className="min-h-screen bg-black text-white py-12 px-4"
    style={{ backgroundImage: `url(${textureB})`, backgroundRepeat: 'repeat' }}
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12" style={{ marginTop: '5rem' }}>
      {/* Left Column - Social Links */}
      <div className="space-y-8">
        <h1 className="text-xl font-serif font-bold text-center text-gray-200 lg:text-center">
          You have a duty to honor the truth, your truth, and the truth of your peers, even when politically inconvenient.
        </h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SOCIAL_LINKS.map(({ name, url, icon: Icon, description }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-lg flex items-start space-x-4 hover:bg-gray-700 transition-colors duration-300"
              style={{ backgroundImage: `url(${textureC})`, backgroundRepeat: 'repeat' }}
            >
              <Icon className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-transparent p-6 rounded-lg shadow-md text-gray-400 mb-6">
          <h2 className="text-2xl font-bold text-center mb-4">In case you need to know:</h2>
          <p className="mb-3">I was born as Jamie Blue Fichera to Donna Christine Fichera on May 15th, 1984, in Santa Cruz, California.</p>
          <p className="mb-3">In 1990, I was adopted by Michael and Linda Dunbaugh, and my legal name became Mathew Allen Dunbaugh.</p>
          <p className="mb-3">Throughout my early life, I continued to go by my birth name. My High School Diploma lists me as Jamie Dunbaugh.</p>
          <p className="mb-3">My DD214 from my Honorable Navy discharge names me as Mathew JamieAllen Dunbaugh.</p>
          <p className="mb-3">My Bachelor of Arts from the University of California, San Diego (UCSD) reads Mathew Jamie Dunbaugh.</p>
          <p className="mb-3">After careful reflection and research, I have chosen the name William Teach — a name I can earn for myself and grow into.</p>
        </div>
      </div>

      
  
      {/* Right Column - Contact Form */}
      <div
        className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
        style={{ backgroundImage: `url(${textureA})`, backgroundRepeat: 'repeat' }}
      >
        
  
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-400 lg:text-left">Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'email', 'message'].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-400 mb-2 capitalize"
              >
                {field}
              </label>
              {field !== 'message' ? (
                <input
                  type={field}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ backgroundImage: `url(${textureD})`, backgroundRepeat: 'repeat' }}/>
              ) : (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ backgroundImage: `url(${textureD})`, backgroundRepeat: 'repeat' }}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className="text-green-400 text-center mt-4">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-400 text-center mt-4">Failed to send message. Please try again.</p>}
        </form>
        
      </div>
    </div>
  </div>
  
  );
};

Contact.propTypes = {
  SOCIAL_LINKS: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default Contact;