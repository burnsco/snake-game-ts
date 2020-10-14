import { useEffect, useState } from "react"
import Container from "./Container/index"
import Frog from "./Food/Frog"
import Mouse from "./Food/Mouse"
import Snake from "./Player/Snake"

const SnakeGame: React.FC = () => {
  const [dir, setDir] = useState("RIGHT")

  useEffect(() => {
    document.onkeydown = onKeyDown
  }, [])

  const onKeyDown = e => {
    e = e || window.event
    switch (e.keyCode) {
      case 38:
        setDir("UP")
        break
      case 40:
        setDir("DOWN")
        break
      case 37:
        setDir("LEFT")
        break
      case 39:
        setDir("RIGHT")
        break
    }
  }

  return (
    <Container>
      <Snake direction={dir} />
      <Mouse />
      <Frog />
    </Container>
  )
}

export default SnakeGame
