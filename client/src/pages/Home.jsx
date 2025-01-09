import React from 'react';
import { Terminal } from 'lucide-react';

const Home = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
    <Terminal className="h-20 w-20 text-blue-400 mb-8" />
    <h1 className="text-5xl font-bold text-blue-400">Welcome to My Portfolio</h1>
    <p className="text-xl text-gray-300 mt-4">Showcasing innovative projects and a passion for technology.</p>
  </div>
);

export default Home;
