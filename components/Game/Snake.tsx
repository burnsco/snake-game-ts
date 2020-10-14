import { Box } from "@chakra-ui/core"
import { useState } from "react"

const Snake = () => {
  const snakeBody = []
  const [snakeLength, setSnakeLength] = useState(2)

  for (let i = 0; i < snakeLength; i += 2) {
    snakeBody.push(
      <Box
        key={i}
        top="0"
        left={`${i}%`}
        width="2%"
        height="2%"
        background="teal.500"
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
