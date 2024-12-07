import React from 'react';
import { Shield, Zap, Code2, Cloud } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure Execution',
    description: 'Advanced security measures to protect your scripts and account'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast Performance',
    description: 'Lightning-fast script execution with minimal latency'
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Script Library',
    description: 'Access to a vast collection of pre-made scripts'
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud Sync',
    description: 'Save and sync your scripts across devices'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white hover:scale-105 transition-transform duration-300">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group hover:bg-gradient-to-br hover:from-purple-50 hover:to-white dark:hover:from-gray-800 dark:hover:to-gray-900"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}