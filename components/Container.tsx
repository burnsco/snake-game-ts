import { AspectRatio, Box } from "@chakra-ui/core"

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AspectRatio
      position="relative"
      border="1px"
      maxW="500px"
      ratio={1}
      borderColor="gray.700"
      w="full"
    >
      <Box>{children}</Box>
    </AspectRatio>
  )
}

export default Container
