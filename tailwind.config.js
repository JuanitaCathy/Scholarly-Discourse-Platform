module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      colors: {
        'dark-academia-bg': '#1C1C1E', // Dark background
        'dark-academia-text': '#E5E5E5', // Light text
        'dark-academia-highlight': '#9A8C98', // Highlight color
        'dark-academia-accent': '#4A4E69', // Accent color
        'dark-academia-muted': '#22223B', // Muted color for borders, etc.
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Lora', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
