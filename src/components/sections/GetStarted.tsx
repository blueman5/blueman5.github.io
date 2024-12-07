import React from 'react';
import { FileDown, Play, Settings, Code } from 'lucide-react';

const steps = [
  {
    icon: <FileDown className="w-8 h-8" />,
    title: "Download & Install",
    description: "Download Selene and run the installer. Follow the setup wizard to complete installation."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Configure Settings",
    description: "Launch Selene and configure your preferences in the settings panel."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Load Your Script",
    description: "Copy and paste your script into the editor or load from our script library."
  },
  {
    icon: <Play className="w-8 h-8" />,
    title: "Execute",
    description: "Click the execute button to run your script in Roblox. It's that simple!"
  }
];

export default function GetStarted() {
  return (
    <section id="get-started" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Getting Started</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to start using Selene
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-purple-600 dark:text-purple-400 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-200 dark:bg-purple-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}