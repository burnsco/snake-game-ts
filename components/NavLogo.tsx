import { chakra, ChakraProps, useColorModeValue } from "@chakra-ui/core"

const RunLogo = (props: ChakraProps) => {
  const fill = useColorModeValue("#2D3748", "#fff")

  return (
    <chakra.svg
      height="2em"
      width="2em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle fill="#FF9800" cx="28" cy="9" r="5" />
      <path
        fill="#009688"
        d="M26.8 15.2l-2.2-1c-1.3-.6-2.9 0-3.5 1.3L9.2 41.1c-.5 1 0 2.2 1 2.7c.3.1.6.2.9.2c.8 0 1.5-.4 1.8-1.1c0 0 9.6-13.3 10.4-14.9s4.9-9.3 4.9-9.3c.5-1.3 0-2.9-1.4-3.5z"
      />
      <path
        fill="#FF9800"
        d="M40.5 15.7c-.7-.8-2-1-2.8-.3l-5 4.2l-6.4-3.5c-1.1-.6-2.6-.4-3.3.9c-.8 1.3-.4 2.9.8 3.4l8.3 3.4c.3.1.6.2.9.2c.5 0 .9-.2 1.3-.5l6-5c.8-.7.9-1.9.2-2.8z"
      />
      <path
        fill="#FF9800"
        d="M11.7 23.1l3.4-5.1l4.6.6l1.5-3.1c.4-.9 1.2-1.4 2.1-1.5h-9.2c-.7 0-1.3.3-1.7.9l-4 6c-.6.9-.4 2.2.6 2.8c.2.2.6.3 1 .3c.6 0 1.3-.3 1.7-.9z"
      />
    </chakra.svg>
  )
}

export default RunLogo
