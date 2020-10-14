import { Box } from "@chakra-ui/core"
import { useState } from "react"

const Snake = () => {
  const snakeBody = []
  const [length, setLength] = useState(10)

  for (let i = 0; i < length; i += 2) {
    snakeBody.push(
      <Box
        key={i}
        top="0"
        left={`${i}%`}
        width="2%"
        height="2%"
        bg="yellow"
        position="absolute"
        border="1px solid yellow"
      />
    )
  }

  return <>{snakeBody}</>
}

export default Snake
