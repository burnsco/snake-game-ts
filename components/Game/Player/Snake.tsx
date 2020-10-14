import { Box } from "@chakra-ui/core"
import { useState } from "react"

const Snake: React.FC<{ direction?: string }> = ({ direction }) => {
  const snakeBody = []
  const [snakeLocation, setSnakeLocation] = useState([
    [0, 0],
    [2, 0],
    [4, 0],
    [6, 0]
  ])

  if (direction === "UP") {
    console.log(`UP`)
  }
  if (direction === "DOWN") {
    console.log(`DOWN`)
  }
  if (direction === "LEFT") {
    console.log(`LEFT`)
  }
  if (direction === "RIGHT") {
    console.log(`RIGHT`)
  }

  for (let i = 0; i < snakeLocation.length; i++) {
    snakeBody.push(
      <Box
        key={i}
        top={`${snakeLocation[i][0]}%`}
        left={`${snakeLocation[i][1]}%`}
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
