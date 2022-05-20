module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      borderWidth: {
        '15': '15px',
      },
      fontSize: {
        'tiny': '.5rem',
      },
      fontFamily: {
        'futura': ['"Futura Md BT"'],
        'josefin': ['Josefin Sans'],
        'basker': ['Baskerville'],
      },
      colors: {
        'kartuli-orange': '#c88f34',
        
      },
      backgroundImage: {
        'kartuli-fig': "url('./images/homePage_Section2.jpg')",
        'vineyard': "url(./images/vineyard.jpg);",
        'vineyard-sm': "url(./images/vineyard-sm.jpg);",
        'drink-collection': "url(./images/drink-with-bar.jpg)"
      }
    },
    variants: {
      display: ["group-hover"]
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      
      'lap': { 'max': '1440px' },
      
      'xl': {'max': '1320px'},
      // => @media (max-width: 1279px) { ... }
      
      'md-b': { 'max': '1125px'},
      
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }


      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

// ---------------------------------------------------------------------------------------------------

      'sm-min': '640px',
      // => @media (min-width: 640px) { ... }

      'md-min': '768px',
      // => @media (min-width: 768px) { ... }

      'lg-min': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl-min': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl-min': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    plugins: [],
  }
}
