import { useInterval } from "@chakra-ui/core"
import { useState } from "react"

export default function useGenerateLocation() {
  const [location, setLocation] = useState([34, 22])

  function generate() {
    const max = 98
    const x = Math.floor(Math.random() * max + 1)
    const y = Math.floor(Math.random() * max + 1)
    setLocation([x, y])
  }

  useInterval(() => {
    generate()
  }, 7000)

  return location
}
