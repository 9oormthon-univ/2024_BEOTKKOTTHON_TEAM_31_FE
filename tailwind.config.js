/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
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
        error: '#FF5151',
        warning: '#FFCE4F',
        success: '#80F756',
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
      fontFamily: {
        noto_sans: ['NotoSansKR'],
      },
    },
  },
  plugins: [],
};
