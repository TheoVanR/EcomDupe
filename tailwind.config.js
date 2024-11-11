/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'bounce-in': 'bounceIn 1s ease-out forwards', // Custom bounce-in animation
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'translateX(100%)', opacity: '1' },  // Start off-screen to the right

          '100%': { transform: 'translateX(0)', opacity: '1' },  // End at normal position
        },
      },
    },
  },
  plugins: [],
};
