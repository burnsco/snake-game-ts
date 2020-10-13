import { ChakraProvider, ColorModeScript } from "@chakra-ui/core"
import theme from "@chakra-ui/theme"
import { AppProps } from "next/dist/next-server/lib/router/router"
import Layout from "../components/layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
