import { ChakraProvider, ColorModeScript } from "@chakra-ui/core"
import theme from "@chakra-ui/theme"
import { AppProps } from "next/dist/next-server/lib/router/router"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
