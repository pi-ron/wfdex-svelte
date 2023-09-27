module.exports = {
  daisyui: {
    base: false,
    styled: true,
    themes: [
      {
        myWebflowUI: {
          "outlineOffset": "0",
          // Backgrounds
          "dark": "#404040", // Webflow: background1
          "darker": "#363636", // Webflow: background3
          "darkest": "#2b2b2b", // Webflow: background4
          "light": "#EBEBEB", // Webflow: backgroundInverse
          "lighter": "#F6F6F6", // Webflow: actionPrimaryTextHover, actionSecondaryTextHover
          
          // Actions
          "secondary": "#5e5e5e", // Webflow: actionSecondaryBackground
          "secondary-focus": '#696969', // Webflow: actionSecondaryBackgroundHover
          "secondary-content": '#EBEBEB', // Webflow: actionSecondaryTextHover
          "primary": "#0073E6", // Webflow: actionPrimaryBackground
          "primary-focus": "#1280EE", // Webflow: actionPrimaryBackgroundHover
          
          // Borders
          "border": "#363636", // Webflow: border1
          
          // Text
          "text": "#d9d9d9", // Webflow: text1
          "textSecondary": "#757575", // Webflow: text3, textInactive
          
          // Colors
          "blue": "#2496FF", // Webflow: blue
          "green": "#2FC862", // Webflow: green
          "yellow": "#FFC700", // Webflow: yellow
          "red": "#FF424D", // Webflow: red
          "orange": "#F67E28", // Webflow: orange
          "purple": "#A484FF", // Webflow: purple
          
          // Font, Size, and Radius
          "--font-sans": "Inter, sans-serif",
          "--font-size-small": "11px",
          "--font-size-large": "12px",
          "--font-weight-normal": "400",
          "--font-weight-medium": "500",
          "--rounded-box": "2px",
          "--rounded-btn": "2px",
          "--rounded-badge": "2px",
          
          // Animation and Border
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "normal",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "2px",
          background1: '#404040',
          background2: '#4d4d4d',
          background3: '#363636',
          background4: '#2b2b2b',
          background5: '#212121',
          backgroundInactive: '#4d4d4d',
          backgroundInverse: '#EBEBEB',
          actionSecondaryBackground: '#5e5e5e',
          actionSecondaryBackgroundHover: '#696969',
          actionPrimaryText: '#FFFFFF',
          actionPrimaryTextHover: '#F6F6F6',
          actionSecondaryText: '#EBEBEB',
          actionSecondaryTextHover: '#F6F6F6',
          actionPrimaryBackground: '#0073E6',
          actionPrimaryBackgroundHover: '#1280EE',
          border1: '#363636',
          border2: '#2b2b2b',
          border3: '#212121',
          "border4": '#5e5e5e',
          text1: '#d9d9d9',
          text2: '#ababab',
          text3: '#757575',
          text4: '#696969',
          textInactive: '#757575',
          textInverse: '#363636',
          blueText: '#8AC2FF',
          blueIcon: '#2496FF',
          blueBorder: '#2496FF',
          greenBackground: '#008547',
          greenBackgroundHover: '#00944F',
          greenText: '#63D489',
          greenIcon: '#2FC862',
          greenBorder: '#2FC862',
          yellowBackground: '#996E00',
          yellowBackgroundHover: '#AD7D00',
          yellowText: '#FFC700',
          yellowIcon: '#FFC700',
          yellowBorder: '#FFC700',
          redBackground: '#CF313B',
          redBackgroundHover: '#DB434C',
          redText: '#FF8A8A',
          redIcon: '#FF424D',
          redBorder: '#FF424D',
          orangeBackground: '#C75300',
          orangeBackgroundHover: '#DD7124',
          orangeText: '#FFAB66',
          orangeIcon: '#F67E28',
          orangeBorder: '#F67E28',
          purpleBackground: '#7F5AE9',
          purpleBackgroundHover: '#8A61FF',
          purpleText: '#B89EFF',
          purpleIcon: '#A484FF',
          purpleBorder: '#A484FF',
        },
      },
    ]
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    fontSize: {
      // 'base': ['0.6875rem', {lineHeight: '1rem'}],
      // 'xl': ['0.75rem', {lineHeight: '1rem'}],
      'base': ['0.6875rem', {
        lineHeight: '1rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      'xl': ['0.75rem', {
        lineHeight: '1rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
    },
    extend: {
      outlineOffset: {
        1: '0',
      },
      colors: {
        magnum: {
          '50': '#fff9ed',
          '100': '#fef2d6',
          '200': '#fce0ac',
          '300': '#f9c978',
          '400': '#f7b155',
          '500': '#f38d1c',
          '600': '#e47312',
          '700': '#bd5711',
          '800': '#964516',
          '900': '#793a15',
          '950': '#411c09',
        },
        background1: '#404040',
        background2: '#4d4d4d',
        background3: '#363636',
        background4: '#2b2b2b',
        background5: '#212121',
        backgroundInactive: '#4d4d4d',
        backgroundInverse: '#EBEBEB',
        actionSecondaryBackground: '#5e5e5e',
        actionSecondaryBackgroundHover: '#696969',
        actionPrimaryText: '#FFFFFF',
        actionPrimaryTextHover: '#F6F6F6',
        actionSecondaryText: '#EBEBEB',
        actionSecondaryTextHover: '#F6F6F6',
        actionPrimaryBackground: '#0073E6',
        actionPrimaryBackgroundHover: '#1280EE',
        border1: '#363636',
        border2: '#2b2b2b',
        border3: '#212121',
        border4: '#5e5e5e',
        text1: '#d9d9d9',
        text2: '#ababab',
        text3: '#757575',
        text4: '#696969',
        textInactive: '#757575',
        textInverse: '#363636',
        blueText: '#8AC2FF',
        blueIcon: '#2496FF',
        blueBorder: '#2496FF',
        greenBackground: '#008547',
        greenBackgroundHover: '#00944F',
        greenText: '#63D489',
        greenIcon: '#2FC862',
        greenBorder: '#2FC862',
        yellowBackground: '#996E00',
        yellowBackgroundHover: '#AD7D00',
        yellowText: '#FFC700',
        yellowIcon: '#FFC700',
        yellowBorder: '#FFC700',
        redBackground: '#CF313B',
        redBackgroundHover: '#DB434C',
        redText: '#FF8A8A',
        redIcon: '#FF424D',
        redBorder: '#FF424D',
        orangeBackground: '#C75300',
        orangeBackgroundHover: '#DD7124',
        orangeText: '#FFAB66',
        orangeIcon: '#F67E28',
        orangeBorder: '#F67E28',
        purpleBackground: '#7F5AE9',
        purpleBackgroundHover: '#8A61FF',
        purpleText: '#B89EFF',
        purpleIcon: '#A484FF',
        purpleBorder: '#A484FF',
      },      
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              position: 'relative',
              borderRadius: theme('borderRadius.md'),
            },
          },
        },
      }),
    },
  },
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}