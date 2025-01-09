import React from 'react';
import { Terminal } from 'lucide-react';

const Home = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
    <Terminal className="h-20 w-20 text-blue-400 mb-8" />
    <h1 className="text-5xl font-bold text-blue-400">Welcome</h1>
    <p className="text-xl text-gray-300 mt-4">Harnessing ironic simplicity for enhanced adaptation, and showcasing innovative projects and a passion for irony.</p>
  </div>
);

export default Home;
