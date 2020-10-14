import { Box } from "@chakra-ui/core"
import { useState } from "react"

const Snake: React.FC<{ direction?: string }> = ({ direction }) => {
  const snakeBody = []
  const [snakeLocation, setSnakeLocation] = useState([
    [0, 2],
    [0, 4],
    [0, 6],
    [0, 8]
  ])

  switch (direction) {
    case "UP":
      console.log("UP")
      break
    case "DOWN":
      console.log("DOWN")
      break
    case "LEFT":
      console.log("LEFT")
      break
    case "RIGHT":
      console.log("RIGHT")
      break
  }

  for (let i = 0; i < snakeLocation.length; i++) {
    snakeBody.push(
      <Box
        key={i}
        top={`${snakeLocation[i][0]}%`}
        left={`${snakeLocation[i][1]}%`}
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
