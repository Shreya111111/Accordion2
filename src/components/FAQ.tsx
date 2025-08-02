import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  isDarkMode: boolean;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Q1. Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur elit. Sint maxime porta tellus turpis quam sed risus sit dictum gravida nunc facilisis. Vulputate sit risus oriente integer ut faucibus posuere. Placerat eget vel lorem imperdiet velit lobortis nunc. At posuere faucibus porta massa lorem sit massa amet pellentesque elementum. Interdum sagittis mi lorem vitae dolor. In elit pulvinar leo elit massa varius aliquam eget. Ut purus nunc et ut sodales. Fermentum viverra risus pellentesque tortor fermentum prom. Dapibus mattis quam turpis molestie lorem ultricies porta nulla risus et dolor posuere porta vel. Orci dictumst integer auctor turpis venenatis."
  },
  {
    id: 2,
    question: "Q2. Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur elit. Sint maxime porta tellus turpis quam sed risus sit dictum gravida nunc facilisis. Vulputate sit risus oriente integer ut faucibus posuere. Placerat eget vel lorem imperdiet velit lobortis nunc. At posuere faucibus porta massa lorem sit massa amet pellentesque elementum. Interdum sagittis mi lorem vitae dolor. In elit pulvinar leo elit massa varius aliquam eget. Ut purus nunc et ut sodales. Fermentum viverra risus pellentesque tortor fermentum prom. Dapibus mattis quam turpis molestie lorem ultricies porta nulla risus et dolor posuere porta vel. Orci dictumst integer auctor turpis venenatis."
  },
  {
    id: 3,
    question: "Q3. Lorem ipsum dolor sit amet consectetur?",
    answer:  "Lorem ipsum dolor sit amet consectetur elit. Sint maxime porta tellus turpis quam sed risus sit dictum gravida nunc facilisis. Vulputate sit risus oriente integer ut faucibus posuere. Placerat eget vel lorem imperdiet velit lobortis nunc. At posuere faucibus porta massa lorem sit massa amet pellentesque elementum. Interdum sagittis mi lorem vitae dolor. In elit pulvinar leo elit massa varius aliquam eget. Ut purus nunc et ut sodales. Fermentum viverra risus pellentesque tortor fermentum prom. Dapibus mattis quam turpis molestie lorem ultricies porta nulla risus et dolor posuere porta vel. Orci dictumst integer auctor turpis venenatis."
  },
  {
    id: 4,
    question: "Q4. Lorem ipsum dolor sit amet consectetur?",
    answer:  "Lorem ipsum dolor sit amet consectetur elit. Sint maxime porta tellus turpis quam sed risus sit dictum gravida nunc facilisis. Vulputate sit risus oriente integer ut faucibus posuere. Placerat eget vel lorem imperdiet velit lobortis nunc. At posuere faucibus porta massa lorem sit massa amet pellentesque elementum. Interdum sagittis mi lorem vitae dolor. In elit pulvinar leo elit massa varius aliquam eget. Ut purus nunc et ut sodales. Fermentum viverra risus pellentesque tortor fermentum prom. Dapibus mattis quam turpis molestie lorem ultricies porta nulla risus et dolor posuere porta vel. Orci dictumst integer auctor turpis venenatis."
  },
  {
    id: 5,
    question: "Q5. Lorem ipsum dolor sit amet consectetur?",
    answer:  "Lorem ipsum dolor sit amet consectetur elit. Sint maxime porta tellus turpis quam sed risus sit dictum gravida nunc facilisis. Vulputate sit risus oriente integer ut faucibus posuere. Placerat eget vel lorem imperdiet velit lobortis nunc. At posuere faucibus porta massa lorem sit massa amet pellentesque elementum. Interdum sagittis mi lorem vitae dolor. In elit pulvinar leo elit massa varius aliquam eget. Ut purus nunc et ut sodales. Fermentum viverra risus pellentesque tortor fermentum prom. Dapibus mattis quam turpis molestie lorem ultricies porta nulla risus et dolor posuere porta vel. Orci dictumst integer auctor turpis venenatis."
  }
];

export const FAQ: React.FC<FAQProps> = ({ isDarkMode }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isExpanded = (id: number) => expandedItems.includes(id);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 ${
        isDarkMode ? 'text-blue-400' : 'text-purple-600'
      }`}>
        Frequently asked questions
      </h1>
      
      <div className="space-y-0">
        {faqData.map((item) => (
          <div 
            key={item.id}
            className={`transition-all duration-300 ${
              item.id !== faqData.length ? (isDarkMode ? 'border-b border-gray-600' : 'border-b border-gray-300') : ''
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={`w-full px-4 md:px-6 py-4 md:py-5 text-left flex items-center justify-between transition-colors duration-200 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span className="text-base md:text-lg font-medium pr-4 leading-relaxed">
                {item.question}
              </span>
              <div className={`flex-shrink-0 transition-transform duration-300 ${
                isExpanded(item.id) ? 'rotate-180' : ''
              }`}>
                {isExpanded(item.id) ? (
                  <ChevronUp className={`w-5 h-5 md:w-6 md:h-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`} />
                ) : (
                  <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`} />
                )}
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className={`px-4 md:px-6 pb-4 md:pb-5 pt-0 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p className="text-sm md:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};