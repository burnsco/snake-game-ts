import { Box } from "@chakra-ui/core"

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box position="relative">
      <Box
        border="2px"
        minH="500px"
        minW="500px"
        borderColor="gray.700"
        w="full"
      >
        {children}
      </Box>
    </Box>
  )
}

export default Container