import { useState } from "react"
import Container from "./Container"
import Frog from "./Frog"
import Mouse from "./Mouse"
import Snake from "./Snake"

const SnakeGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [snakeLocation, setSnakeLocation] = useState(null)

  return (
    <Container>
      <Snake />
      <Mouse />
      <Frog />
    </Container>
  )
}

export default SnakeGame
