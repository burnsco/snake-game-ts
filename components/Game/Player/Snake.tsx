import { Box } from "@chakra-ui/core"
import { useState } from "react"

const Snake: React.FC<{ direction?: string }> = ({ direction }) => {
  const [inMotion, setInMotion] = useState(false)
  const [snakeLength, setSnakeLength] = useState(10)

  const snakeBody = []

  for (let i = 0; i < snakeLength; i += 2) {
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

    snakeBody.push(
      <Box
        key={i}
        top={`0%`}
        left={`0%`}
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
