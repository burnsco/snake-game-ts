import { chakra, useColorModeValue } from "@chakra-ui/core"

const Frog = ({ foodLocation, ...props }) => {
  const fill = useColorModeValue("#2D3748", "#fff")

  return (
    <chakra.svg
      top={`${foodLocation[0]}%`}
      left={`${foodLocation[1]}%`}
      position="absolute"
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        d="M57.1 23.6C45.7 6.8 18.3 6.8 6.9 23.6c-4 5.9-5 12.5-4.9 13.9c.3 4 9.3 20.6 30 20.5c20.6-.1 29.6-16.4 30-20.5c.1-1.4-.9-8-4.9-13.9"
        fill="#83bf4f"
      />
      <path
        d="M2 37.5c.3 4 6.6 21.6 30 21.5c23.3-.1 29.6-17.4 30-21.5c0 0-12.1 10-29.9 10c-18 0-30.1-10-30.1-10"
        fill="#ffdf99"
      />
      <g fill="#3e4347">
        <path d="M26.3 32c-1.4 0-4.3 4-4.3 4s2.9-1.3 4.3-1.3s4.3 1.3 4.3 1.3s-2.9-4-4.3-4" />
        <path d="M37.7 32c-1.4 0-4.3 4-4.3 4s2.9-1.3 4.3-1.3S42 36 42 36s-2.9-4-4.3-4" />
      </g>
      <circle cx="50" cy="17" r="12" fill="#83bf4f" />
      <circle cx="50" cy="17" r="8" fill="#ffe655" />
      <path
        d="M54 17.2c0 2.2-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4"
        fill="#3e4347"
      />
      <path
        d="M26 17c0 6.6-5.4 12-12 12S2 23.6 2 17S7.4 5 14 5s12 5.4 12 12z"
        fill="#83bf4f"
      />
      <circle cx="14" cy="17" r="8" fill="#ffe655" />
      <path
        d="M18 17.2c0 2.2-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4"
        fill="#3e4347"
      />
      <g fill="#83bf4f">
        <ellipse cx="14" cy="11.6" rx="9.7" ry="5.4" />
        <ellipse cx="50" cy="11.6" rx="9.7" ry="5.4" />
      </g>
    </chakra.svg>
  )
}

export default Frog
