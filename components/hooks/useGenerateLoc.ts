import { useState } from "react"
import useInterval from "./useInterval"

export default function useGenerateLocation() {
  const [location, setLocation] = useState([34, 22])

  function generate() {
    const max = 99
    const x = Math.floor(Math.random() * max + 1)
    const y = Math.floor(Math.random() * max + 1)
    setLocation([x, y])
  }

  useInterval(() => {
    generate()
  }, 7000)

  return location
}
