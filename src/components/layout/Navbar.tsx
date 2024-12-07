import React from 'react';
import { Moon, Sun, Terminal } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 group hover:scale-105 transition-transform duration-300">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-900 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
              Selene
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-105">Features</a>
            <a href="#download-section" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-105">Download</a>
            <a href="#get-started" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-105">Get Started</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 text-purple-600 dark:text-purple-400 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}