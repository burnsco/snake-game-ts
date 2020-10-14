import { ChakraProvider, ColorModeScript } from "@chakra-ui/core"
import { AppProps } from "next/dist/next-server/lib/router/router"
import Head from "next/head"
import Layout from "../components/Layout"
import FontFace from "../styles/font-face"
import theme from "../styles/theme"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#319795" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeScript initialColorMode="dark" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
      <FontFace />
    </>
  )
}

export default MyApp
