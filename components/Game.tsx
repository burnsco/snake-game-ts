import { Button } from "@chakra-ui/core"
import { useEffect, useState } from "react"
import useInterval from "../hooks/useInterval"
import Container from "./Container"
import Frog from "./Frog"
import Snake from "./Snake"

const SnakeGame: React.FC = () => {
  const [snakeLocation, setSnakeLocation] = useState([
    [0, 0],
    [2, 0]
  ])
  const [foodLocation, setFoodLocation] = useState([34, 22])

  const [enlarge, setEnlarge] = useState(false)
  const [speed, setSpeed] = useState(200)
  const [dir, setDir] = useState("RIGHT")

  useEffect(() => {
    document.onkeydown = onKeyDown
  })

  useEffect(() => {
    const head = snakeLocation[snakeLocation.length - 1]
    const food = foodLocation
    if (head[0] == food[0] && head[1] == food[1]) {
      generate()
      enlargeSnake()
    }
  }, [foodLocation, snakeLocation])

  useInterval(moveSnake, speed)
  useInterval(() => {
    generate()
  }, 7000)

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

  function moveSnake() {
    const snake = [...snakeLocation]
    let head = snake[snake.length - 1]

    switch (dir) {
      case "UP":
        head = [head[0] - 2, head[1]]
        break
      case "DOWN":
        head = [head[0] + 2, head[1]]
        break
      case "LEFT":
        head = [head[0], head[1] - 2]
        break
      case "RIGHT":
        head = [head[0], head[1] + 2]
        break
    }
    snake.push(head)
    snake.shift()
    setSnakeLocation([...snake])
  }

  function generate() {
    const max = 98
    const x = Math.floor(Math.random() * max + 1)
    const y = Math.floor(Math.random() * max + 1)
    setFoodLocation([x, y])
  }

  function checkIfEat() {
    const head = snakeLocation[snakeLocation.length - 1]
    const food = foodLocation
    if (head[0] == food[0] && head[1] == food[1]) {
      generate()
      enlargeSnake()
    }
  }

  function enlargeSnake() {
    const newSnake = [...this.state.snakeDots]
    newSnake.unshift([])
    setSnakeLocation([newSnake])
  }

  return (
    <>
      <Button>Start</Button> <Button>Pause</Button> <Button>Reset</Button>
      <Button>Enlarge</Button> <Button>Add Food</Button>{" "}
      <Button>Subract Food</Button>
      <Container>
        <Snake location={snakeLocation} />

        <Frog foodLocation={foodLocation} />
      </Container>
    </>
  )
}

export default SnakeGame
