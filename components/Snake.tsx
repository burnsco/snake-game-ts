import { Box } from "@chakra-ui/core"

const Snake: React.FC<{ location?: number[][] }> = ({ location }) => {
  const snakeBody = []
  const snakeLength = location.length

  for (let i = 0; i < snakeLength; i++) {
    snakeBody.push(
      <Box
        key={i}
        top={`${location[i][0]}%`}
        left={`${location[i][1]}%`}
        width="2%"
        height="2%"
        background="orange.400"
        position="absolute"
        border="1px"
        borderStyle="solid"
        borderColor="teal.500"
      />
    )
  }
  return <>{snakeBody}</>
}

export default Snake
