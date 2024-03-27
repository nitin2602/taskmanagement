// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  styles: {
    global: {
     
      body: {
        backgroundImage:"url('/Bg.jpg')",
      },
    },
  },
  components: {
    label: {
      padding:"20px"
    },
  },
});
