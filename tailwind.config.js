module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: '390px',
      xs: '414px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px'
    },
    extend: {
      colors: {
        csgray: '#2D2D2F',
        csgray2: '#2D2D2e',
        csgray1: '#4B4B4B',
        csGrayDark: '#242425',
        csGrayDark1: '#252526',
        csGrayDark2: '#2a2a2b',
        csGrayDark3: '#181818',
        csGrayDark4: '#303030',
        csGrayDark5: '#202020',
        csGrayDark6: '#2b2b2d',
        csGrayDark7: '#313131',
        csGrayDark8: '#28282a',
        csGrayDark9: '#2c2c2d',
        csGrayDark10: '#252525',
        csGrayDark11: '#505050',
        csGrayDark12: '#464646',
        csGrayDark13: '#3F3F45',
        csGrayDark14: '#222223',
        csGrayDark15: '#232323',
        csGrayDark16: '#2e2e2e',
        csGrayDark17: '#3C3C3F',
        csGrayDark18: '#39393b',
        csGrayDark19: '#252525',
        csGrayDark20: '#3E3E3F',
        csGrayDark21: '#383838',
        csGrayDark22: '#232324',

        csblue: '#66ADFF',
        csblue1: '#9AB8FF',
        csblue2: '#B9D9FF',
        csblue3: '#4199FF',
        csblue4: '#66EDFF',
        csblue5: '#009FFF',
        blue1: 'rgba(102, 173, 255, 0.2)',
        gray0: 'rgba(28, 28, 28, 0.5)',
        gray1: 'rgba(45, 45, 47, 0.4)',
        gray2: 'rgba(129, 129, 129, 0.2)',
        csGrayDarker: '#1C1C1C',

        csGray1: '#616161',
        csGray2: '#414141',
        csGray3: '#2d2d2e',
        csGray4: '#919191',
        csGray5: '#353535',
        csGray6: '#202020',
        csGray7: '#818181',
        csGray8: '#141414',
        csGray9: '#393939',
        csGray10: '#505050',
        csGray11: '#383838',
        csGray12: '#363636',
        csGray13: '#959595',
        csGray14: '#242f42',

        Gray1: 'rgba(61, 61, 61, 0.4)',
        borderColor: '#2F3A62',

        green1: '#2DE86D',
        green2: '#3AE19B',
        green3: 'rgba(58, 225, 155, 0.2)',
        green4: '#1FC7D4',
        green5: '#0ECB81',

        red1: '#FD5959',
        white: '#fefefe',
        white1: 'rgba(255, 255, 255, 0.2)',

        orange1: '#FFAF66',
        orange2: 'rgba(255, 194, 102, 0.2)',
        orange3: '#FF8A1E',
        orange4: '#FFB800',

        purple: '#BB66F9',
        purple1: 'rgba(145, 124, 250, 0.3)',
        purple2: '#917CFA',
        purple3: '#E16CFF',
        purple4: '#e06bff',
        purple5: '#867CFF',
        purple6: '#97A1FF',

        yellow: '#ffff6e'
      },
      fontFamily: {
        body: ['Prompt', 'sans-serif']
      }
    },
    ejs: {}
  },
  variants: {
    extend: {
      objectPosition: ['hover', 'focus'],
      position: ['hover', 'focus'],
      tableLayout: ['hover', 'focus'],
      rotate: ['active', 'group-hover']
    }
  },
  plugins: []
}
