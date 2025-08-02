import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <div className="fixed top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-50">
      <button
        onClick={onToggle}
        className={`
          flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full 
          transition-all duration-300 shadow-lg hover:shadow-xl
          ${isDarkMode 
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-500' 
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }
        `}
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="relative">
          <div className={`transition-all duration-300 ${
            isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
          }`}>
            <Sun className="w-5 h-5 md:w-6 md:h-6 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          </div>
          <div className={`transition-all duration-300 ${
            isDarkMode ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
          }`}>
            <Moon className="w-5 h-5 md:w-6 md:h-6 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          </div>
        </div>
      </button>
    </div>
  );
};