import { ChakraProvider, ColorModeScript } from "@chakra-ui/core"
import { AppProps } from "next/dist/next-server/lib/router/router"
import Layout from "../components/Layout"
import theme from "../styles/theme"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
