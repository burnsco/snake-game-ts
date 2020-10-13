import { Box, Stack, useColorModeValue } from "@chakra-ui/core"
import Header from "./nav"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const bg = useColorModeValue("gray.200", "black")
  return (
    <>
      <Header />
      <Box minH="100vh" bg={bg}>
        <Stack isInline spacing={8} mx="auto" py={6} px={4}>
          <Box as="main" width="100%">
            {children}
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default Layout
