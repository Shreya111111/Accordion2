# Responsive FAQ Component

A beautiful, responsive FAQ (Frequently Asked Questions) component built with React, TypeScript, and Tailwind CSS. Features dark/light mode toggle, smooth animations, and mobile-first responsive design.

## 🌟 Features

- **Dark/Light Mode Toggle**: Seamless theme switching with system preference detection
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Elegant expand/collapse transitions with hover effects
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Local Storage**: Remembers user's theme preference
- **Clean Design**: Minimalist interface with line separators
- **TypeScript**: Full type safety and better developer experience

## 🚀 Live Demo

Visit the live demo: [https://sprightly-halva-d4c2f3.netlify.app](https://sprightly-halva-d4c2f3.netlify.app)

## 📱 Screenshots

### Light Mode
Clean, modern interface with purple accents and subtle shadows.

### Dark Mode
Sleek dark theme with blue accents and high contrast for better readability.

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful, customizable icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd faq-component
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── FAQ.tsx              # Main FAQ component
│   └── ThemeToggle.tsx      # Dark/light mode toggle button
├── hooks/
│   └── useDarkMode.ts       # Custom hook for theme management
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css                # Global styles and Tailwind imports
```

## 🎨 Customization

### Adding New FAQ Items

Edit the `faqData` array in `src/components/FAQ.tsx`:

```typescript
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Your question here?",
    answer: "Your detailed answer here..."
  },
  // Add more items...
];
```

### Styling Customization

The component uses Tailwind CSS classes. Key customization points:

- **Colors**: Modify color classes in components (e.g., `text-purple-600`, `text-blue-400`)
- **Spacing**: Adjust padding and margins using Tailwind spacing utilities
- **Typography**: Change font sizes and weights with Tailwind typography classes
- **Animations**: Modify transition durations and effects

### Theme Colors

- **Light Mode**: Purple accent (`purple-600`) with gray backgrounds
- **Dark Mode**: Blue accent (`blue-400`) with black/gray backgrounds

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Keyboard navigation support
- ARIA labels and roles
- High contrast ratios in both themes
- Focus indicators for interactive elements
- Screen reader friendly structure

## 🌙 Dark Mode Implementation

The dark mode feature includes:

- System preference detection
- Local storage persistence
- Smooth theme transitions
- Proper contrast ratios
- Icon animations for theme toggle

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service like Vercel, GitHub Pages, or AWS S3.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://reactjs.org/) for the component library

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
