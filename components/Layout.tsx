import { Box, Stack, useColorModeValue } from "@chakra-ui/core"
import Header from "./Header"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const bg = useColorModeValue("white", "black")
  return (
    <>
      <Header />
      <Box bg={bg}>
        <Stack isInline spacing={8} pt={8} px={5} mt="4rem">
          <Box as="main" width="100%">
            {children}
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Layout
