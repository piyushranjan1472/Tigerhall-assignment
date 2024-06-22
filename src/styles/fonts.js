import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'PP Neue Montreal';
      src: url('./assets/fonts/ppneuemontreal-bold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
    }
    
    @font-face {
      font-family: 'PP Neue Montreal';
      src: url('./assets/fonts/ppneuemontreal-thin.woff') format('woff');
      font-weight: 300;
      font-style: normal;
    }
    
    @font-face {
      font-family: 'PP Neue Montreal';
      src: url('./assets/fonts/ppneuemontreal-book.woff') format('woff');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'PP Neue Montreal';
      src: url('./assets/fonts/ppneuemontreal-medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
    }

    
    @font-face {
      font-family: 'PP Neue Montreal';
      src: url('./assets/fonts/ppneuemontreal-semibolditalic.woff') format('woff');
      font-weight: 400;
      font-style: italic;
    }
    
    @font-face {
      font-family: 'PP Neue Montreal';
      src: url('./assets/fonts/ppneuemontreal-bold.woff') format('woff');
      font-weight: 600;
      font-style: italic;
    }
      `}
  />
)

export default Fonts