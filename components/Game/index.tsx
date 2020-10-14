import { Flex } from "@chakra-ui/core"
import Container from "./Container"
import Mouse from "./Mouse"
import Snake from "./Snake"

const SnakeGame: React.FC = () => {
  return (
    <Container>
      <Snake />
      <Flex display="flex" align="center" justify="center">
        <Mouse />
      </Flex>
    </Container>
  )
}

export default SnakeGame
