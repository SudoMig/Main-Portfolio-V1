/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./src/**/*.{html,js}', './src/**/*.{html,js}'],
  content: ['./src/**/*.{js,jsx,css}'],
  theme: {
  

    extend: {
      backgroundImage: {
        bannerImage: "url('./Images/bannerImage.png')",
        WebsiteDesign: "url('./Images/MobileWebsiteDesign.png')",
        WebsiteDevelopment: "url('./Images/WebsiteDevelopment.png')",
        PersonalizedRequests: "url('./Images/SpecialRequest.png')",
        Others: "url('./Images/Other.png')",
        ContactBG: "url('./Images/ContactBG.png')",
        MobileWebsiteDesign: "url('./Images/MobileWebsiteDesign.png')",
        MobileWebsiteDevelopment: "url('./Images/MobileWebsiteDevelopment.png')",
        MobilePersonalizedRequests: "url('./Images/MobilePersonalizedRequest.png')",
        MobileOthers: "url('./Images/MobileOther.png')",
        Test: "url('./Images/TestPic.png')",
      },
      height: {
        backgroundImage: '60.9375rem',
        ContactBGImage: '55.5375rem',
        MobileContactBGImage: '44.5rem',
      },
      letterSpacing: {
        superWide: '.32em',
      },
      width: {
        128: '32rem',
      },
      colors: {
        PrimaryBlue: '#5476EA',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-side': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-in forwards',
        'fade-side': 'fade-side 700ms ease-in forwards',
      },
      variants: {
        animation: ['motion-safe'],
      },
    },
  },
  plugins: [],
};
