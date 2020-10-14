import { Box } from "@chakra-ui/core"

const GameBoard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box position="relative">
      <Box
        border="1px"
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

export default GameBoard
