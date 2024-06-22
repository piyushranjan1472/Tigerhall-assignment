import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import fonts from "./fonts";


export const theme = extendTheme({ 
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'teal.1000',
          color: 'white',
        }
      }
    },
    fonts: {
        heading: `'PP Neue Montreal', sans-serif`,
        body: `'PP Neue Montreal', sans-serif`,
      },
    colors
  });
