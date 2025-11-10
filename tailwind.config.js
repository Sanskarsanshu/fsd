// ///** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['Inter', 'sans-serif'],
//       },
//       colors: {
//         emerald: {
//           50: '#f0fdf4',
//           100: '#dcfce7',
//           200: '#bbf7d0',
//           300: '#86efac',
//           400: '#4ade80',
//           500: '#22c55e',
//           600: '#16a34a',
//           700: '#15803d',
//           800: '#166534',
//           900: '#145231',
//           950: '#052e16',
//         },
//       },
//       animation: {
//         'fadeIn': 'fadeIn 0.6s ease-out',
//         'slideUp': 'slideUp 0.5s ease-out',
//         'slideDown': 'slideDown 0.5s ease-out',
//         'slideLeft': 'slideLeft 0.5s ease-out',
//         'slideRight': 'slideRight 0.5s ease-out',
//         'scaleIn': 'scaleIn 0.4s ease-out',
//         'bounce-slow': 'bounce 2s infinite',
//         'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
//         'shimmer': 'shimmer 2s infinite',
//         'float': 'float 3s ease-in-out infinite',
//         'gradient': 'gradient 3s ease infinite',
//         'rotating': 'rotating 20s linear infinite',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//         slideDown: {
//           '0%': { transform: 'translateY(-20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//         slideLeft: {
//           '0%': { transform: 'translateX(20px)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         slideRight: {
//           '0%': { transform: 'translateX(-20px)', opacity: '0' },
//           '100%': { transform: 'translateX(0)', opacity: '1' },
//         },
//         scaleIn: {
//           '0%': { transform: 'scale(0.9)', opacity: '0' },
//           '100%': { transform: 'scale(1)', opacity: '1' },
//         },
//         pulseGlow: {
//           '0%, 100%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)' },
//           '50%': { boxShadow: '0 0 0 10px rgba(16, 185, 129, 0)' },
//         },
//         shimmer: {
//           '0%': { backgroundPosition: '-1000px 0' },
//           '100%': { backgroundPosition: '1000px 0' },
//         },
//         float: {
//           '0%, 100%': { transform: 'translateY(0px)' },
//           '50%': { transform: 'translateY(-20px)' },
//         },
//         gradient: {
//           '0%, 100%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//         },
//         rotating: {
//           '0%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(360deg)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        slideUp: "slideUp 0.6s ease-out forwards",
        slideDown: "slideDown 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
