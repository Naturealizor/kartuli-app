module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      borderWidth: {
        '15': '15px',
        '25': '25px',
      },
      fontSize: {
        'tiny': '.5rem',
        'reg': '.6rem',
      },
      fontFamily: {
        'futura': ['Futura Md BT Medium'],
        'josefin': ['Josefin Sans Medium'],
        'josefin-lite': ['Josefin Sans Light'],
        'basker': ['Baskervville'],
      },
      colors: {
        'kartuli-orange': '#c88f34',
        'kartuli-peach': '#FFCF8F',
        'kartuli-orange-dark': '#8E6128',
        
      },
    },
    backgroundImage: {
      'kartuli-fig': "url('/images/homePage_Section2.jpg')",
      'kartuli-fig-sm': "url('/images/homePage_Section2-sm.jpg')",
      'kartuli-fig-md': "url('/images/homePage_Section2-sm (Medium).jpg')",
      'vineyard': "url('/images/vineyard-2.jpg')",
      'vineyard-sm': "url('/images/vineyard-sm.jpg')",
      'drink-collection': "url('/images/drink-with-bar.jpg')",
      'copper-still': "url('/images/copper-still-wide.jpg')",
      'copper-still-sm': "url('/images/copper-still - Copy.jpg')",
      'copper-still-mobile': "url('/images/copper-still-mobile.jpg')",
      'copper-still-og': "url('/images/copper-still.jpg')",
      'premium-top': "url('/images/premium-top.jpg')",
      'flavored-top': "url('/images/flavored-top.jpg')",
      'brandy-top': "url('/images/brandy-top.png')",
      'liqueur-top': "url('/images/liqueur-top.png')",
      'cheers-1': "url('/images/drink-collection-big.jpg')",
      'cheers-2': "url('/images/drink-collection-big2.jpg')",
      'international-top': "url('/images/international-top.png')",
      'elite-top': "url('/images/productDescription_Passion_TopSection.jpg')",
      'elite-second': "url('/images/productDescription_Passion_Section2.png')",
      'distillery-top': "url('/images/distillery-top.jpg')",
      'club-top': "url('/images/kartuli-club-top.jpg')",
      'home-grid-4-xl': "url('/images/home-grid-4-xl.jpg')",
      'event-1': "url('/images/event-1.jpg')",
      'news-banner': "url('/images/news-banner.jpg')",
    },
    variants: {
      display: ["group-hover"]
    },
    screens: {
      // '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      
      // 'lap': { 'max': '1440px' },
      
      // 'xl': {'max': '1320px'},
      // => @media (max-width: 1279px) { ... }
      
      // 'md-b': { 'max': '1125px'},
      
      // 'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }


      // 'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      // 'sm': {'max': '639px'},
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
