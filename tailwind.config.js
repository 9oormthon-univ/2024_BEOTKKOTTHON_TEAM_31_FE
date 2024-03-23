/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      lgx: '0.625rem', //10px
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
      large: '12px',
    },
    extend: {
      fontSize: {
        10: '0.625rem',
        12: '0.75rem',
        13: '0.8125rem', //13px
        14: '0.875rem',
        15: '0.9375rem', //15px
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
      },
      colors: {
        main: '#8636F2',
        sub_400: '#9D6BF3',
        sub_300: '#B591F7',
        sub_200: '#CEB5F9',
        sub_100: '#E6DBFD',
        black: '#000000',
        gray_600: '#2A2A3A',
        gray_500: '#484A64',
        gray_400: '#7F85A3',
        gray_300: '#C0C5DC',
        gray_200: '#EBEDF8',
        gray_100: '#F6F7FE',
        white: '#FFFFFF',
        wrong: '#FF5151',
        warning: '#FFCE4F',
        success: '#2AE45E',
        safety: '#459FF3',
      },
      margin: {
        x: '0px 16px',
        y: '12px 0px',
      },
      borderRadius: {
        8: '8px',
        12: '12px',
      },
      screens: {
        sm: { min: '250px', max: '390px' },
        md: { min: '391px', max: '767px' },
        lg: { min: '768px' },
      },
      blur: {
        xs: '2px',
        sm: '4px',
      },
    },
  },
  plugins: [],
};
