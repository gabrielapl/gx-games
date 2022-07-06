import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#101114",
      "200": "#7C7A80",
      "100": "#B3B0B8",
      "50": "#EEEEF2",
    },
    purple: {
      "900": "#835AFD"
    }
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto"
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50"
      }
    }
  }
});