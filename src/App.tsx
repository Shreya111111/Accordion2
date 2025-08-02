import React from 'react';
import { FAQ } from './components/FAQ';
import { ThemeToggle } from './components/ThemeToggle';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode 
        ? 'bg-black' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      
      <main className="pt-20 md:pt-24 pb-8">
        <FAQ isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;